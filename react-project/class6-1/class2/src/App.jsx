import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CardWrapper>
        <CardWrapper>
          Hi There
        </CardWrapper>
      </CardWrapper>
      <CardWrapper>
        <TextComponent></TextComponent>
      </CardWrapper>
    </div>
  )
}
function TextComponent() {
  return <div>
    Hi There
  </div>
}
function TextComponent2() {
  return <div>
    Hi there 2
  </div>
}

function CardWrapper({ children }) {
  console.log(children);
  return <div style={{ border: "2px solid black", padding: "10px" }}>
    {children}
  </div>
}

export default App
