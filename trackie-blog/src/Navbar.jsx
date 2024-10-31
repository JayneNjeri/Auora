const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white font-poppins"> Trackie Blog </h1>
            <div className="space-x-6">
           < a href="/" className="text-xl text-white hover:text-gray-300 underline underline-offset-4 font-poppins transition duration-300">Home</a>
           < a href="/create" className="text-xl text-white hover:text-gray-300 underline underline-offset-4 font-poppins transition duration-300">New Blog</a>
            </div>
          </div>
        </nav>
      );
    }
 
export default Navbar;