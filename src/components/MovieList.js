const MovieList = ({movies}) => {
  const listMovies = movies.map((movie) => {
    return <article className="movie-article-card">{movie}</article>
  })

  return (
    <section>
      <h1 className="movie-list-component-title">Movie List</h1>
      <div className="movie-list-div">
        {listMovies}
      </div>
    </section>
  )
}

export default MovieList;