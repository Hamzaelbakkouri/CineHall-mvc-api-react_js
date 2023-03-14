import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie"
import { MdOutlineChairAlt } from "react-icons/md";
import axios from 'axios';
import Swal, { withReactContent } from 'sweetalert2';
// import { Link } from 'react-router-dom';


const Reservations = () => {
  const Cookie = new Cookies();
  const Get = Cookie.get("jwt_authorisation");
  if (!Get) {
    window.location.href = '/';
  }

  const [seats, setSeat] = useState();
  const [info, setInfo] = useState();
  const [chairs, setChairs] = useState([]);


  const id_f = Cookie.get('idFilm');
  // setFilm(id_f);
  const token = Cookie.get('jwt_authorisation');
  // setUser(token);
  useEffect(() => {
    const data = new FormData();
    data.append('id_f', id_f)
    axios.post('http://localhost/CineHall/Reservations/placeReservedByFilm', data)
      .then(res => {
        setChairs(res.data);
      })
  }, [])

  // useEffect(() => {  
  const reserver = (e) => {
    e.preventDefault();
    if (seats) {
      const data = new FormData();
      data.append('token', token)
      data.append('id_f', id_f)
      data.append('num_place', seats)
      axios.post('http://localhost/CineHall/Reservations/reserver', data)
        .then(res => {
          setSeat();
          setInfo(res.data);
          console.log(info);
        }).then(() => {

          const da = new FormData();
          da.append('id_f', id_f)
          axios.post('http://localhost/CineHall/Reservations/placeReservedByFilm', da)
            .then(res => {
              setChairs(res.data);
            })
        })
    } else {
      alert('wa khaawi');
    }
  }
  // },[])
  const id = (id) => {
    setSeat(id);
  }

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
          <button onClick={reserver} className='mt-5 text-white border-black rounded w-28 h-10 bg-orange-600'>Reserve</button>
        </div>
        <div className='w-full flex justify-center '>
          <div className='w-64 cursor-pointer flex flex-wrap justify-center mb-10'>

            {

              [...Array(50)].map((i, x) => {
                if (chairs.includes(x + 1)) {
                  return <div key={x + 1}>
                    <MdOutlineChairAlt className='w-14 h-10 border rounded bg-gray-600 events-none opacity-50 cursor-not-allowed' />
                  </div>
                } else {
                  return <div key={x + 1}>
                    <MdOutlineChairAlt className='w-14 h-10 border rounded hover:bg-orange-600' onClick={() => { id(x + 1) }} />
                  </div>
                }

              }
              )

            }

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
