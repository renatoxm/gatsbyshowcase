import type { GatsbyConfig } from 'gatsby'
require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

let IS_DEV = false
if (process.env.NODE_ENV === `development`) IS_DEV = true

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsblog`,
    siteUrl: `https://gatsbyshowcase.vercel.app/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/portfolio/`,
        ignore: [`\`**/.*`],
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/posts/`,
      },
      __key: `posts`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        name: `posts`,
        path: `./src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-datadog`,
      options: {
        site: process.env.DATADOGSITE,
        sampleRate: 100,
        enabled: !IS_DEV,
        rum: {
          applicationId: process.env.DATADOGAPPID,
          clientToken: process.env.DATADOGCLIENTOKEN,
        },
        logs: {
          clientToken: process.env.DATADOGCLIENTOKEN,
        },
      },
    },
  ],
  jsxRuntime: `automatic`,
}

export default config
