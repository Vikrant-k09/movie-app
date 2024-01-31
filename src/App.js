import React, { useEffect, useState } from "react";
import "./App.css";
import searchicon from "./search.svg";
import Card from "./Card";

const API_url = "https://www.omdbapi.com/?apikey=3d78f484";

// const movie1 = {
//   Title: "The Matrix Resurrections",
//   Year: "2021",
//   imdbID: "tt10838180",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
// };

const App = () => {




    const [searchTerm , setSearchTerm] = useState() ;


    
    
    
    
    
    // [state , setState
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Matrix");
  }, []);


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1> Movie Finder </h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter Title "
          value={searchTerm}
          onChange={(name) => setSearchTerm(name.target.value)}
          onKeyDown={handleKeyDown} // Corrected event name

          
        
        />

        <img src={searchicon} alt="Search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found </h2>
        </div>
      )}
    </div>
  );
};

export default App;
