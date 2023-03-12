import React from 'react'

const ReservationUser = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  )
}

export default ReservationUser
