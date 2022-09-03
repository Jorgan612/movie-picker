import { useState, useEffect } from  'react';

const MovieList = ({movies, removeMovie}) => {
  const [allMovies, setAllMovies] = useState(movies);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);


  const listMovies = movies.map((movie) => {
    return <article key ={movie} id={movie} className="movie-article-card">
      <div className="movie-card-top">
        <button id={movie} className="remove-movie-btn" onClick={() => removeMovie(movie)}>X</button>
      </div>
      <p className="movie-name">{movie}</p>
    </article>
  })

  // useEffect(() => {
    // findMovie();
  // })

  const findMovie = (searchPhrase) => {
    setSearchPhrase(searchPhrase);
    const filterMovies = allMovies.filter((movie) => {
      return movie.toLowerCase() === searchPhrase.toLowerCase();
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
          onChange={(event) => findMovie(event.target.value)}
          />
      </div>
      <div className="movie-list-div">
        {searchedMovie.length > 0 ? findMovie : listMovies}
        {/* {listMovies} */}
      </div>
    </section>
  )
}

export default MovieList;