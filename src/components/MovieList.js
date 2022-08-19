import { useState, useEffect } from  'react';

const MovieList = ({movies, removeMovie}) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([])
  const listMovies = movies.map((movie) => {
    return <article key ={movie} id={movie} className="movie-article-card">
      <div className="movie-card-top">
        <button id={movie} className="remove-movie-btn" onClick={() => removeMovie(movie)}>X</button>
      </div>
      <p className="movie-name">{movie}</p>
    </article>
  })

  useEffect(() => {
    // findMovie();
  })

  const findMovie = () => {
    const filterMovies = movies.filter((movie) => {
      return movie === searchPhrase;
    })
    setSearchedMovie(filterMovies);

  }

  return (
    <section className="movie-list-container">
      <div className="movie-list-container-top">
        <h1 className="movie-list-component-title">Movie List</h1>
        <input 
          className='search-field-input'
          name='search' 
          placeholder="Search for Title..." 
          type='text'
          value={searchPhrase}
          aria-label='move title'
          onChange={(event) => setSearchPhrase(event.target.value)}
          />
      </div>
      <div className="movie-list-div">
        {listMovies}
      </div>
    </section>
  )
}

export default MovieList;