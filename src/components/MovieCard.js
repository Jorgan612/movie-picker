const MovieCard = ({movie, removeMovie}) => {
  console.log('m~~~~~~~~~~-', movie)
  return (
    <article key={movie} id={movie} className="movie-article-card">
      <div className="movie-card-top">
        <button id={movie} className="remove-movie-btn" onClick={() => removeMovie(movie)}>X</button>
      </div>
      <p className="movie-name">{movie}</p>
    </article>
  )
}

export default MovieCard;
