import { useState } from 'react';

const MovieAdder = ({addMovie}) => {

  const [newMovie, setNewMovie] = useState('')

  // const clearInput = () => {
  //   setNewMovie('')
  // }

  return (
    <section className="movie-adder-section">
      <h4>Start by adding movies you like, love, or haven't seen yet!</h4>
      <div className="add-movie-input-div">
        <input 
          type='text' 
          name='title' 
          placeholder='Movie Title' 
          onChange={(event) => setNewMovie(event.target.value)} 
        />
        <button className="add-movie-btn" onClick={addMovie(newMovie)}>+</button>
      </div>
    </section>
  )
}

export default MovieAdder;