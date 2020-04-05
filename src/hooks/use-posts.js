import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___time, order: DESC }, limit: 3) {
        nodes {
          frontmatter {
            title
            author
            slug
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title.toUpperCase(),
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
