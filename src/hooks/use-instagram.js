import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allPosts {
        nodes {
          url
          name
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
      login: node.owner.login
  }))
};

export default useInstagram;
 