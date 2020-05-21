import { graphql } from "gatsby"

const faunaData = () => {
    const data = (graphql`
      {
        fauna {
              allTodos {
                data { _id title completed }
              }
        }
      }
    `);

    // return data.fauna.allTodos.map(todo => ({
    //     title: todo.title,
    //     completed: todo.completed
    // }))

    console.log(data)

    return data.map(todo => ({
      title: todo.title,
      completed: todo.completed
  }))
}


export default faunaData