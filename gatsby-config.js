module.exports = {
  siteMetadata: {
    title: 'Gatsby GetGo Along With JsonLengstrof At Frontend Masters',
    description:
      'A site I\'ve building along with Json Lenstrof at Frontend Masters Gatsby workshop!',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
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
    // github public api only for public repositories
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: {
          development: 'https://api.github.com/users/luml/repos',
          production: 'https://api.github.com/users/luml/repos',
        },
        rootKey: 'posts',
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
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "Fauna",
    //     fieldName: "fauna",
    //     url: "https://graphql.fauna.com/graphql",
    //     headers: {
    //       Authorization: "Bearer <fnADsR6s6RACADRmJymCdil-2330g4wtv-E3DZGh>",
    //     },
    //   },
    // }
  ],
};
