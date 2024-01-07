import { memo } from 'react';
import { useState } from 'react'


function App() {
  const [title, setTitle] = useState("Ashraf");
  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button><br /><br />
      <Headers title={title}> </Headers>
      <Headers title="Kajal"></Headers>
      <Headers title="Mohammed"></Headers>
      <Headers title="Nurul"></Headers>
      <Headers title="Abedin"></Headers>
      <Headers title="Ashraf"></Headers>
    </div>
  )
}
// function HeaderWithButton() {
//   const [title, setTitle] = useState("Ashraf");
//   function updateTitle() {
//     setTitle(Math.random());
//   }
//   return (
//     <>
//       <button onClick={updateTitle}>Update the title</button><br /><br />
//       <Headers title={title}> </Headers>
//     </>
//   )
// } 
// function Headers({ title }) { //function Headers(props)
//   return <div>
//     My name is {title}
//   </div>
// }
const Headers = memo(function ({ title }) { //function Headers(props)

  return <div>
    My name is {title}
  </div>
});
export default App



///Second 
// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <CardWrapper>
//         <CardWrapper>
//           Hi There
//         </CardWrapper>
//       </CardWrapper>
//       <CardWrapper>
//         <TextComponent></TextComponent>
//       </CardWrapper>
//     </div>
//   )
// }
// function TextComponent() {
//   return <div>
//     Hi There
//   </div>
// }
// function TextComponent2() {
//   return <div>
//     Hi there 2
//   </div>
// }

// function CardWrapper({ children }) {
//   console.log(children);
//   return <div style={{ border: "2px solid black", padding: "10px" }}>
//     {children}
//   </div>
// }

// export default App
