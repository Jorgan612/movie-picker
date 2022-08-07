const MovieAdder = () => {
  return (
    <section className="movie-adder-section">
      <h4>Start by adding movies you like, love, or haven't seen yet!</h4>
      <div className="add-movie-input-div">
        <input type='text' name='title' placeholder='Movie Title' required/>
        <button className="add-movie-btn">+</button>
      </div>
    </section>
  )
}

export default MovieAdder;