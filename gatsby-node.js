exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              slug
              title
            }
          }
          next {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(post => {
    actions.createPage({
      path: post.node.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        previous: post.previous,
        next: post.next,
        slug: post.node.frontmatter.slug,
      },
    });
  });
};
