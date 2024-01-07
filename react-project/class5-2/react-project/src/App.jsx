import { useState } from 'react'

//state , components

//jsx -> javaScript XML

//todos = [{title: "todo1", description: "First todo", completed: false}]

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "From 9am to 10pm",
      completed: true
    }
  ]) //[number, function]

  
  function addTodo() {
    let newTodos = [...todos, {
      title: "new Todo",
      description: "desc of new Todo"
    }];
    setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {
        todos.map(function (i) {
          return <Todo title={i.title} description={i.description}></Todo>
        })
      }

    </div>
  )

}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <input type="checkbox" checked={props.completed}></input>
  </div>
}

export default App
