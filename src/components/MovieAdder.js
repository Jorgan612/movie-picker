import { useState } from 'react';
import MovieContainer from '../components/MovieContainer';


const MovieAdder = () => {

  const [newMovie, setNewMovie] = useState('');
  const [movies, setMovies] = useState([]);

   const addMovie = () => {
    setMovies([...movies, newMovie]); 
    clearInput(); 
    console.log('movies array', movies )
  }

  const clearInput = () => {
    setNewMovie('');
  }

  const determineMovie = () => {
    return Math.floor(Math.random() * movies.length);
  }

  return (
    <section className="movie-adder-section">
      <h4>Start by adding movies you like, love, or haven't seen yet!</h4>
      <div className="add-movie-input-div">
        <input 
          type='text' 
          name='title' 
          placeholder='Movie Title' 
          value={newMovie}
          onChange={(event) => setNewMovie(event.target.value)} 
        />
        <button className="add-movie-btn" onClick={addMovie}>+</button>
      </div>
      {movies.length > 1 ? <MovieContainer movies={movies} /> : <p>Waiting on movies to be added...</p>}
    </section>
  )
}

export default MovieAdder;