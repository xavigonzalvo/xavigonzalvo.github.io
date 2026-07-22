/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Xavi Gonzalvo · Machine Learning Researcher`,
    description: `Xavi Gonzalvo, Research Scientist at Google in New York, leading a team on LLM efficiency and LLM safety. Previously led Google's AutoML team. PhD in Electrical Engineering.`,
    author: `Xavi Gonzalvo`,
    siteUrl: `https://xavigonzalvo.com`,
    social: {
      twitter: `@xavigonzalvo`,
      github: `xavigonzalvo`,
      linkedin: `xavigonzalvo`,
      scholar: `nThSlSwAAAAJ`,
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xavi Gonzalvo - Machine Learning Researcher`,
        short_name: `Xavi Gonzalvo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#14b8a6`,
        display: `minimal-ui`,
        icon: `src/icons/icon.png`,
      },
    },
  ],
};
