const MovieList = ({movies, removeMovie, closeMovieList}) => {
  const listMovies = movies.map((movie) => {
    return <article id={movie} className="movie-article-card">
      <div className="movie-card-top">
        <button id={movie} className="remove-movie-btn" onClick={() => removeMovie(movie)}>X</button>
      </div>
      <p className="movie-name">{movie}</p>
    </article>
  })

  return (
    <section className="movie-list-container">
      <div className="movie-list-container-top">
        <h1 className="movie-list-component-title">Movie List</h1>
        {/* <button className="close-movie-list-btn">Close List</button> */}
      </div>
      <div className="movie-list-div">
        {listMovies}
      </div>
    </section>
  )
}

export default MovieList;