import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListMovies = () => {

  const [movies, setmovies] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    axios.get('http://localhost/CineHall/api/getmovie')
      .then(response => {
        setmovies(response.data);
        setLoading(false);
        console.log(movies);
      })
      .catch(err => {
        console.log(err);
      })

  }, []);

  if (loading) {
    return (<p>loading ...</p>)
  }
  else
    return (
      <div className='w-full flex flex-wrap justify-center mt-20'>
        {movies.map(movie =>
          <div className="gap-4 mb-20 flex justify-center bg-white px-2">
            <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img src={movie.image} alt="plant" className="h-auto w-full" />
              <div className="p-5">
                <p className="text-medium mb-5 text-gray-700">{movie.description}</p>
                <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">book</button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default ListMovies
