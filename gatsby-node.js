const { siteMetadata } = require("./gatsby-config");

/**
 * Make sure the ScholarStats type always exists, even if the network fetch
 * fails at build time. That way GraphQL queries against it never break the
 * build; the consuming component simply renders nothing when values are null.
 */
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type ScholarStats implements Node {
      userId: String
      profileUrl: String
      citationsAll: Int
      citationsRecent: Int
      hIndexAll: Int
      hIndexRecent: Int
      i10IndexAll: Int
      i10IndexRecent: Int
    }
  `);
};

/**
 * Pull the public citation metrics straight from the Google Scholar profile
 * page at build time. Scholar has no official API, so we fetch the HTML and
 * read the values out of the metrics table (#gsc_rsb_st). The six numeric
 * cells appear in this fixed order:
 *   citations(all, recent), h-index(all, recent), i10-index(all, recent)
 */
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const userId = siteMetadata?.social?.scholar;
  if (!userId) {
    reporter.warn("No Google Scholar user id in siteMetadata.social.scholar");
    return;
  }

  const profileUrl = `https://scholar.google.com/citations?hl=en&user=${userId}`;
  let values = [];

  try {
    const response = await fetch(profileUrl, {
      headers: {
        // Scholar serves a stripped page (or blocks) without a browser UA.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
          "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    values = [...html.matchAll(/gsc_rsb_std">(\d+)</g)].map((m) =>
      parseInt(m[1], 10)
    );

    if (values.length < 6) {
      throw new Error(
        `expected 6 metric values, parsed ${values.length} (page layout changed or request was blocked)`
      );
    }
  } catch (error) {
    reporter.warn(
      `Could not fetch Google Scholar stats from ${profileUrl}: ${error.message}`
    );
  }

  const [
    citationsAll = null,
    citationsRecent = null,
    hIndexAll = null,
    hIndexRecent = null,
    i10IndexAll = null,
    i10IndexRecent = null,
  ] = values;

  const data = {
    userId,
    profileUrl,
    citationsAll,
    citationsRecent,
    hIndexAll,
    hIndexRecent,
    i10IndexAll,
    i10IndexRecent,
  };

  actions.createNode({
    ...data,
    id: createNodeId(`scholar-stats-${userId}`),
    internal: {
      type: "ScholarStats",
      contentDigest: createContentDigest(data),
    },
  });

  if (hIndexAll != null) {
    reporter.info(
      `Fetched Google Scholar stats: citations ${citationsAll}, h-index ${hIndexAll}, i10-index ${i10IndexAll}`
    );
  }
};
