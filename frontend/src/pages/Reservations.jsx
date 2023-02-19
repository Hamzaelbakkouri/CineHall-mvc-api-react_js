import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { MdOutlineChairAlt } from "react-icons/md";



const Reservations = () => {
  const [seat, setSeat] = useState();

  let test = [2, 3, 7, 40,50,33,34,36,20];

  const id = (id) => {
    setSeat(id);
  }
  useEffect(() => {
    console.log(seat);
  }, [seat]);

  return (
    <div>
      <form action="" className='mt-7'>
        <div className='flex flex-col items-center mb-5'>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">chose a movie</label>
          <input type="text" name="fullname" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">your seat</label>
          <input type="text" name="fullname" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-64 cursor-pointer flex flex-wrap justify-center'>

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
    </div>
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
