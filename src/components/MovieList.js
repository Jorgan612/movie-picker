import { useState } from  'react';

const MovieList = ({movies, removeMovie}) => {
  const [searchPhrase, setSearchPhrase] = useState();
  const listMovies = movies.map((movie) => {
    return <article key ={movie} id={movie} className="movie-article-card">
      <div className="movie-card-top">
        <button id={movie} className="remove-movie-btn" onClick={() => removeMovie(movie)}>X</button>
      </div>
      <p className="movie-name">{movie}</p>
    </article>
  })

  const findMovie = () => {
    
  }

  return (
    <section className="movie-list-container">
      <div className="movie-list-container-top">
        <h1 className="movie-list-component-title">Movie List</h1>
        <input 
          name='search' 
          placeholder="Search for Title..." 
          type='text' 
          aria-label='move title'
          onChange={findMovie()}/>
      </div>
      <div className="movie-list-div">
        {listMovies}
      </div>
    </section>
  )
}

export default MovieList;