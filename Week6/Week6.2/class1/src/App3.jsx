import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

function App3() {
    const [count, setCount] = useState(0);
    const [value, setInputValue] = useState(0);
    return (
        <>
            <input onChange={function (e) {
                setInputValue(e.target.value)
            }} /><br />
            <h2>Sum is {parseInt(count) + parseInt(value)}</h2>
            <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
        </>
    )
}



export default App3
