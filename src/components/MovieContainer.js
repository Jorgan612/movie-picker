import '../css/App.css';
import { useState } from 'react';

const MovieContainer = ({movies}) => {
  const [randomMovie, setRandomMovie] = useState('')


  const determineMovie = () => {
    const randomMovieIndex = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomMovieIndex]);
  }

 return (
  <div className='movie-container-div'>
    <button className='random-movie-btn' onClick={determineMovie}>Get Movie!</button>
    <p>{randomMovie}</p>
  </div>
 )
}

export default MovieContainer;