import React, { useEffect, useState } from 'react'
import ListMovies from '../components/ListMovies';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Movies = () => {
  const [idmovie, setidmovie] = useState();

  function handle(data) {
    setidmovie(data);
  }
  useEffect(() => {
    console.log(idmovie);
  })
  // window.location.href = ''
  return (
    <div>
      <ListMovies onData={handle} />
    </div>
  )
}

export default Movies
