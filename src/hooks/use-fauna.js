// import { graphql } from "gatsby"

// const faunaData = () => {
//     const data = (graphql`
//       {
//         fauna {
//               allTodos {
//                 data { _id title completed }
//               }
//         }
//       }
//     `);

//     // TODO the graphql is working, but data.fauna is undefined 
//     return data.fauna.allTodos.map(todo => ({
//         title: todo.title,
//         completed: todo.completed
//     }))
// }


// export default faunaData