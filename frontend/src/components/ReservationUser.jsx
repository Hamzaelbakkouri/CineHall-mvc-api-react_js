import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'


const ReservationUser = () => {
  // e.preventDefault();
  const [data, setData] = useState([]);

  const cookie = new Cookies();

  const user = cookie.get('jwt_authorisation');

  useEffect(() => {
    const daa = new FormData();
    daa.append('token', user)
    axios.post('http://localhost/CineHall/Reservations/mesreservations', daa)
      .then(res => {
        setData(res.data)
      });
    console.log(data);
  }, [])

  const click = (prop) => {

    // console.log(prop);
    const dt = new FormData();
    dt.append('id_res', prop)
    axios.post('http://localhost/CineHall/Reservations/delete_res', dt)
      .then(res => {
        // alert(res.data)
      })
    // window.location.href='/reserveUser'
  }

  return (
    <div>
      {data.map(dat =>
        <div className='w-full flex justify-center mt-10 mb-10 flex-wrap'>
          <div className="card w-3/6 md:card-side bg-base-100 shadow-xl">
            <figure><img src={dat.image} className='' alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title">{dat.nom_film}</h2>
              <h2>{dat.salle}</h2>
              <h2>{dat.date_res}</h2>
              <h2>{dat.num_place}</h2>
              <div className="card-actions justify-center">
              </div>
              <button onClick={()=>click(dat.id_res)} className="btn btn-primary">Delete Reservation</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReservationUser
