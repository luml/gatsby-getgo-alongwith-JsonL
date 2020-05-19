import { graphql } from "gatsby"

const faunaData = () => {
    const data = (graphql`
    {
        fauna {
          allProducts {
            data { _id title description }
          }
        }
      }
    `);

    return data.fauna.allProducts.map(product => ({
        title: product.title,
        description: product.description
    }))
}


export default faunaData