import { useState } from 'react';
import './App.css'

// const Person =(props)=>{
//   //Props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

//   return(
//     <>
//     <h1>Name:{props.name}</h1>
//     <h2>Age:{props.age}</h2>
//     <h3>Last Name: {props.lastname}</h3>
//     </>
    
//   )
// }

function App() {
  const [counter, setCounter]=useState(0);
  return (
  
      <div className="App">
       {/* <Person name={'Jane' } age={25} lastname= {'Mwangi'}/>
      <Person name={'John' } age={30} lastname= {'Doe'}/>
       <Person/> */}

       <button onClick={()=>setCounter((prevCount)=>prevCount -1)}>-</button>

       <h1>{counter}</h1>

       <button  onClick={()=>setCounter((prevCount)=>prevCount +1)}>+</button>
      
        </div>
      
  
  )
}

export default App
