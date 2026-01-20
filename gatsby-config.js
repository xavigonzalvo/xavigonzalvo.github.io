/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Xavi Gonzalvo - Machine Learning Researcher`,
    description: `Machine Learning Researcher at Google, specializing in LLMs, AutoML, and neural architecture search. PhD in Electrical Engineering.`,
    author: `Xavi Gonzalvo`,
    siteUrl: `https://xavigonzalvo.github.io`,
    social: {
      twitter: `@xavigonzalvo`,
      github: `xavigonzalvo`,
      linkedin: `xavigonzalvo`,
      scholar: `nThSlSwAAAAJ`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    "gatsby-plugin-mdx",
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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xavi Gonzalvo - Machine Learning Researcher`,
        short_name: `Xavi Gonzalvo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3b82f6`,
        display: `minimal-ui`,
        icon: `src/icons/icon.png`, // Create this icon file
      },
    },
  ],
};
