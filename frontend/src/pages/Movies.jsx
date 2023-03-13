import React, { useEffect, useState } from 'react'
import ListMovies from '../components/ListMovies';
import Cookies from 'universal-cookie';

const Movies = () => {
  const [idmovie, setidmovie] = useState();
  const cooki = new Cookies();
  function handle(data) {
    setidmovie(data);
    window.location.href = '/reservations'
  }
  useEffect(() => {
    cooki.set('idFilm', idmovie);
  })
  return (
    <div>
      <ListMovies onData={handle} />
    </div>
  )
}

export default Movies
