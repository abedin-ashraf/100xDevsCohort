import { useEffect, useState } from 'react'

function App3() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
                .then(async function (res) {
                    const json = await res.json();
                    setTodos(json.todos);
                })
        }, 10000)
    }, [])
    return (
        <div>
            {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
        </div>
    )
}

function Todo({ title, description }) {
    return <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
    </div>
}
export default App3
