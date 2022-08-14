import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieContainer from '../components/MovieContainer';

const MovieAdder = () => {

  const [newMovie, setNewMovie] = useState('');
  const [validInput, setValidInput] = useState(true);
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    const initialValue = JSON.parse(savedMovies);
    return initialValue || '';
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies])

   const addMovie = () => {
    if (newMovie !== '') {
      setValidInput(true);
      setMovies([...movies, newMovie]); 
      clearInput(); 
    } else {
      setValidInput(false);
    }
  }

  const clearInput = () => {
    setNewMovie('');
  }

  return (
    <section className="movie-adder-section">
      <p>Start by adding movies you like, love, or haven't seen yet!</p>
      <div className="add-movie-input-div">
        <input 
          type='text' 
          name='title' 
          placeholder='Movie Title'
          aria-label='move title'
          value={newMovie}
          onChange={(event) => setNewMovie(event.target.value)} 
        />
        <button className="add-movie-btn" onClick={addMovie}>+</button>
      </div>
      <div className='movie-list-btn-div'>
        {!validInput && <p className='invalid-input-msg'>Uh oh! Fill in the title field before trying to add a new movie title.</p>}
        <button className='movie-list-btn' >Edit Movie List</button>
      </div>
      {movies.length > 1 ? <MovieContainer movies={movies} /> : <p>Waiting on more movies to be added...</p>}
    </section>
  )
}

export default MovieAdder;