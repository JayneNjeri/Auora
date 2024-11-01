import { useState, useEffect } from 'react';
import './index.css';
import SearchIcon from './assets/search.svg';

  //Api key 7fb6c640
const API_URL="http://www.omdbapi.com/?apikey=7fb6c640&";

const movie1=
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "Movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
}


function App() {
  // useEffect(() => {
  //   searchMovies("Batman");
  // }, []);

  return (
      <div className="App">
        <h1>MovieLand</h1>

        <div className="search">
          <input placeholder="Search for Movies" value="Batman"
          onChange={()=>{}}
          />
          <img src={SearchIcon} alt="Search"
          onClick={()=>{}}
           />
          </div>

          <div className='Container'>
            <div className='Movie'>
              <div>
                <p>{movie1.Year}</p>
              </div>
              <div>
                <img src={movie1.Poster!=='N/A'? movie1.Poster:'https://via.placeholder.com/400'} alt={movie1.Title} />
              </div>
              <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
              </div>
            </div>


          </div>

        </div> 
  )
}

export default App;
