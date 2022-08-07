import '../css/App.css';
import MovieAdder from '../components/MovieAdder';
import MovieContainer from '../components/MovieContainer';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);
  

  const addMovie = (newMovie) => {
    // setMovies([...movies, newMovie]);
    console.log('movies array', movies )
  }

  return (
    <main>
      <h1>Not sure what to watch?</h1>
      <MovieAdder addMovie={addMovie}/>
      {movies.length > 1 ? <MovieContainer movies={movies} /> : <p>Waiting on movies to be added...</p>}
    </main>
  )
}

export default App;
