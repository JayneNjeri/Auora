import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="navbar bg-gray-100 flex items-center justify-between p-4">
      <Link to="/" className="font-caveat font-bold text-4xl text-blue-300 mb-4">
        MYCARE
      </Link>
      <div className="font-semibold">
        <ul className="flex flex-row space-x-8">
          <li>
            <Link to="/about" className="px-4 py-2 hover:bg-blue-200 rounded">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/providers" className="px-4 py-2 hover:bg-blue-200 rounded">
              Providers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-4 py-2 hover:bg-blue-200 rounded">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className="px-4 py-2 hover:bg-blue-200 rounded">
              FAQ
            </Link>
            </li>
        </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;