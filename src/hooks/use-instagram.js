import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allPosts(
        limit: 20
        filter: { fork: { eq: false }, homepage: { ne: null } }
      ) {
        nodes {
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
    url: node.url,
    name: node.name,
    description: node.description,
    homepage: node.homepage,
    fork: node.fork,
    login: node.owner.login,
  }));
};

export default useInstagram;
