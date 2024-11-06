import { Outlet } from 'react-router-dom'
import Navbar from './Utils/navbar'
import Home from './Pages/Home'
import './App.css'

function App() {
 
  return (
    <>
       <Navbar />
       
       <Home />
    <nav className='content'>
      <Outlet />
    </nav>
  
  
   
    </>
  )
}

export default App
