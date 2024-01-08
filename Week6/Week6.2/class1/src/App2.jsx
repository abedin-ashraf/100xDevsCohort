import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

function App2() {
    const [button, setButton] = useState(1);
    return (
        <>
            <button onClick={function () { setButton(1) }}>1</button>
            <button onClick={() => setButton(2)}>2</button>
            <button onClick={() => setButton(3)}>3</button>
            <button onClick={() => setButton(4)}>4</button>
            <button onClick={() => setButton(5)}>5</button>
            <button onClick={() => setButton(6)}>6</button>
            <Todo id={button}></Todo>
        </>
    )
}

function Todo({ id }) {

    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
            .then(response => {
                setTodo(response.data.todo);
            })
    }, [id])
    return <div>
        Id: {id}
        <h1>{todo.title}</h1>
        <h5>{todo.description}</h5>
    </div>
}

export default App2
