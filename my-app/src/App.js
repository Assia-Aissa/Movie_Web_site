
import {useEffect,useState} from 'react';
import React from 'react'
import './App.css' ;

import SearchIcon from'./Search.svg';
import MovieCard from './MovieCard';
const API_URL = "http://www.omdbapi.com?apikey=ca1a86e5";

const movie1={
  
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTU4NjkzNzItMDY5ZS00NDY3LWI4YjctMjZjMzIwNzczMTcyXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg"
  
}
const App =()=>{

  const [movies, setMovies] =useState([]);

  const [searchTerm , setSearchTerm] = useState('');
  const searchMovies = async(title) =>{
  
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
    setMovies(data.Search);
  }

  useEffect(()=>{
      searchMovies();
  },[]);
  
  return (
    <div className="app">
     <h1>MovieLand</h1>
     <div className="search">
      <input placeholder="Search for movies" 
      value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value)}
      />
      <img 
      src={SearchIcon}
      alt="search"
      onClick={()=> searchMovies(searchTerm)}
      />
     </div>
     {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
     </div>
    );
  
  };

export default App;
