import React, { useState } from 'react'
import ListMovies from '../components/ListMovies';
import { Link } from 'react-router-dom';


const Movies = () => {
  const [idmovie, setidmovie] = useState();

  function handle(data) {
    setidmovie(data);
  }
  console.log(idmovie);
  return (
    <div>
      <div className='w-full flex justify-center mb-20'>
        <button className="w-4020 text-dark bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">logout</button>
      </div>
      <ListMovies onData={handle} />
      <Link to={'/Reservations'}>
        <button className='bg-orange-600'>go reserve</button>
      </Link>
    </div>
  )
}

export default Movies
