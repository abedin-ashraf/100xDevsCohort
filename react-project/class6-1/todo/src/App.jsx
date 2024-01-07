import { useState } from 'react'
import './App.css'

let counter = 4;


function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Go to gym today"
  },
  {
    id: 2,
    title: "Go to class",
    description: "Go to class today"
  }, {
    id: 3,
    title: "Go to showme center",
    description: "Go to showme center today"
  }
  ])

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add new Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  )
}

function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
