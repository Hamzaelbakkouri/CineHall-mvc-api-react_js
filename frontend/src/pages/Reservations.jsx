import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie"
import { MdOutlineChairAlt } from "react-icons/md";
// import { Link } from 'react-router-dom';
import axios from 'axios';


const Reservations = () => {
  const [idmovie, setidmovie] = useState();


  function handle(data) {
    setidmovie(data);
  }
  useEffect(() => {
    console.log(idmovie);
  })
  const Cookie = new Cookies();

  const Get = Cookie.get("jwt_authorisation");
  if (!Get) {
    window.location.href = '/';
  }

  const [seat, setSeat] = useState();
  const [user, setUser] = useState();
  const [film, setFilm] = useState();

  useEffect(() => {
    const data = new FormData();
    data.append('id_f', 2 )

    axios.post('http://localhost/CineHall/Reservations/placeReservedByFilm', data)
      .then(res => {
        setFilm(res.num_place);
        console.log(film);
      })

  })

  let test = [2, 3, 7, 40, 50, 33, 34, 36, 20, 44];

  const id = (id) => {
    setSeat(id);
  }
  useEffect(() => {
    console.log(seat);
  }, [seat]);

  return (
    <div className='h-full w-full'
      style={{
        backgroundImage: "url(" + "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>

      <form className=''>
        <div className='w-full flex justify-center mb-10'>
          <button onClick={'/'} className='mt-5 text-white border-black rounded w-28 h-10 bg-orange-600'>Reserve</button>
        </div>
        <div className='w-full flex justify-center '>
          <div className='w-64 cursor-pointer flex flex-wrap justify-center mb-10'>

            {[...Array(50)].map((x, i) => {
              {
                for (let j = 0; j < test.length; j++) {
                  if (i === test[j] - 1) {
                    return <div>
                      <MdOutlineChairAlt className='w-14 h-10 border rounded bg-gray-600 events-none opacity-50 cursor-not-allowed' key={i} />
                    </div>
                  } else if (j === test.length - 1) {
                    return <div>
                      <MdOutlineChairAlt className='w-14 h-10 border rounded hover:bg-orange-600' onClick={() => {
                        id(i + 1)
                      }} key={i} />
                    </div>
                  }
                }
              }
            }
            )}

          </div>
        </div>
      </form>
    </div >
  )


  // return (
  //   <div className='w-64 cursor-pointer flex flex-wrap'>
  //     {testdata.map((x, i) =>
  //       <MdOutlineChairAlt className='w-11 h-10 border rounded hover:bg-red-600' onClick={() => {
  //         id(i + 1)

  //       }} key={i} />
  //     )}
  //   </div>

  // )
}

export default Reservations
