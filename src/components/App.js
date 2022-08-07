import '../css/App.css';
import MovieAdder from '../components/MovieAdder';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);



  return (
    <main>
      <h1>Not sure what to watch?</h1>
      <MovieAdder />
    </main>
  )
}

export default App;
