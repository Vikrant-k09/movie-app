import {useEffect, useState} from "react";

import './App.css'
import searchIcon from './searchIcon.svg';
import MovieCard from "./MovieCard.jsx";
import * as React from "react";
import background from "./assets/back.jpg";


function App() {
    const API_URL = "https://www.omdbapi.com?apikey=58324415";

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        //https://www.omdbapi.com?apikey=58324415&s=telugu
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        // searchMovies();
    }, [searchTerm]);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchTerm);
        }
    };

    return (
        <div className="app" style={{ backgroundImage: `url(${background})` }}>
            <br></br>
            <div className = "container-center">
                <div>
                <h1>Movie Finder</h1>

                </div>
            <div>
            <br></br>
                <img src="/image.jpg" alt="REEL" width={400} height={150}/>
            </div>
                
            
            
            <div className="find">
                <input
                    placeholder="Enter Movie/Series Name"
                    alt="movieSearch"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    onKeyDown={handleKeyPress}
                />
                <img
                    src={searchIcon}
                    alt="searchIcon"
                    onClick={() => {
                        searchMovies(searchTerm);
                    }}/>
            </div>
            </div>
            
            {movies?.length > 0 ?
                <div className="container">
                    {movies.map((movie) => (
                        <div>
                            <MovieCard Movie={movie}/>
                        </div>
                    ))}

                </div> : <div className="empty">
                    <h3 style={{color: 'white'}}></h3>
                </div>
            }


        </div>
    )
}

export default App;
