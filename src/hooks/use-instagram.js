import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allPosts(limit: 10, filter: { fork: { eq: false } }) {
        nodes {
          url
          name
          description
          homepage
          fork
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
