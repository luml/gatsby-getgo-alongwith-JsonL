import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allPosts(
        sort: { fields: id__normalized, order: DESC }
        limit: 20
        filter: { fork: { eq: false }, homepage: { ne: null } }
      ) {
        nodes {
          id
          url
          name
          homepage
          fork
          description
          owner {
            login
          }
        }
      }
    }
  `);

  return data.allPosts.nodes.map(node => ({
    id: node.id,
    url: node.url,
    name: node.name.toUpperCase(),
    description: node.description,
    homepage: node.homepage,
    fork: node.fork,
    login: node.owner.login,
  }));
};

export default useInstagram;
