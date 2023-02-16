import React from 'react'
import ListMovies from '../components/ListMovies';


const Movies = () => {

  function handle(data) {
    console.log(data);
  }
  return (
    <div>
      <ListMovies onData={handle} />
    </div>
  )
}

export default Movies
