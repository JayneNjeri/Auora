import Navbar from './Navbar';
import Home from './Home';
import './index.css';

function App() {
  return (
    //div is a container element that is used to group other elements
    //className is an attribute that is used to define the class of an element
   
    <div className="min-h-screen bg-gradient-to-br from-black to-red-900 text-white">
    
      <Navbar />
      <div className="Content">
       <Home />
      </div>
    </div>
  );
}

//exporting the App component so that it can be used in other files
export default App;
