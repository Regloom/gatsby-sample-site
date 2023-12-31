/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Site Title`,
    siteUrl: `https://localhost:8000`,
    description: `My First Gatsby Site`,
  },
  plugins: [    
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem", //READ FILES FROM FS
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx", //MDX PARSER
    "gatsby-transformer-sharp", //IMAGES FOR BLOG
  ],
}
