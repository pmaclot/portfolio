import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pierre Maclot`,
    siteUrl: `https://pierremaclot.dev`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/icon.png'
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: require('./src/theme')
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Honk`,
            file: `https://fonts.googleapis.com/css2?family=Honk&display=swap`
          },
          {
            name: `Ubuntu`,
            file: `https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,700;1,700&display=swap`
          },
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap`
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ],
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: 'never'
};

export default config;
