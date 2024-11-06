import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        
      <nav className="navbar bg-gray-100 flex items-center justify-between p-4 ">
        <h1 className=" font-caveat font-bold text-4xl  text-blue-300 mb-4">MYCARE</h1>
        <div className="font-semibold">
        <ul className="flex flex-row space-x-8">
          <li><Link to="/" className="px-4 py-2 hover:bg-blue-200 rounded">Home</Link></li>
          <li><Link to="/src/Pages/about" className="px-4 py-2 hover:bg-blue-200 rounded">About Us</Link></li>
          <li><Link to="/src/Pages/Providers.jsx" className="px-4 py-2 hover:bg-blue-200 rounded">Providers</Link></li>
          <li><Link to="/src/Pages/contact" className="px-4 py-2 hover:bg-blue-200 rounded">Contact Us</Link></li>
        </ul>
        </div>
        
        
        <div className="flex flex-row space-x-3 font-semibold">
          <button className="px-4 py-2 rounded hover:bg-blue-200 hover:text-white">
             <Link to="/signup">Sign Up</Link> 
            {/* onClick={() => history.push('/signup')} */}
          </button>
          <button className="px-4 py-2 rounded hover:bg-blue-200 hover:text-white">
            <Link to="/signin">Log In</Link>
          </button>
        </div>
        </nav>
       
     );
}
 
export default Navbar;