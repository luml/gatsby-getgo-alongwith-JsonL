module.exports = {
  siteMetadata: {
    title: 'Gatsby GetGo Along With JsonLengstrof Frontend Masters',
    description:
      'A site i built along with Json Lenstrof at Frontend Masters Gatsby workshop!',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: {
          development: 'https://api.github.com/users/luml/repos',
          production: 'https://api.github.com/users/luml/repos',
        },
        rootKey: "posts",
        schemas: {
          posts: `
            url: String
            name: String
            description: String
          `,
          owner: `
            login: String
            repos_url: String
          `,
        },
      },
    },
  ],
};
