import { Outlet, Link} from 'react-router-dom'
import Navbar from './Utils/navbar'
import Home from './Pages/Home'
import './App.css'

function App() {
 
  return (
    <>
    <div className='App'>
       <Navbar />
    <nav className='content'>
     
      <Outlet />
    </nav>
    </div>
    </>
  )
}

export default App
