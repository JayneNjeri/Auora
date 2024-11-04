import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="font-semibold">
      <nav className="navbar flex items-center justify-between p-4">
        <h1 className="text-3xl text-blue-300 mb-4">DAYCARE</h1>
        <ul className="flex flex-row space-x-8">
          <li><Link to="/" className="px-4 py-2 hover:bg-blue-200 rounded">Home</Link></li>
          <li><Link to="/about" className="px-4 py-2 hover:bg-blue-200 rounded">About Us</Link></li>
          <li><Link to="/pricing" className="px-4 py-2 hover:bg-blue-200 rounded">Pricing</Link></li>
          <li><Link to="/contact" className="px-4 py-2 hover:bg-blue-200 rounded">Contact Us</Link></li>
        </ul>

        </nav>
        </div>
     );
}
 
export default Navbar;