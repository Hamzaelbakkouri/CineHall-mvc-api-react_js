import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert2";


const ListMovies = (props) => {

  const [movies, setmovies] = useState('');
  const [loading, setLoading] = useState(true);


  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    const dayOfWeek = date;
    // console.log(date);

    if (dayOfWeek === 0) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry, we're closed on Sundays. Please select a different date.",
      });
      return;
    }

    setSelectedDate(date);
  };

  useEffect(() => {
    const datas = new FormData();
    datas.append('date', selectedDate);
    axios.post('http://localhost/CineHall/movies/getmovies', datas)
      .then(response => {
        setLoading(false);
        setmovies(response.data);
        console.log(movies);
      })
      .catch(err => {
        console.log(err);
      })
  }, [selectedDate]);

  if (loading) {
    return (
      <div role="status" className='w-full h-screen flex justify-center items-center'>
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  else
    return (
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Select A Date:</h2>
          {/* <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            excludeDayOfWeek={[0]}
            className="bg-white border rounded-md p-2 shadow-md"
          /> */}

          <div class="relative max-w-sm">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <input datepicker type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
          </div>

        </div>
        {/* <div className='flex justify-center'>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500' name="" id="" value={Dt} onChange={(e) => setDt(e.target.value)}>
            <option>Chose A Day</option>
            <option value={"2023-02-14"}>2023-02-14</option>
            <option value={"2023-02-16"}>2023-02-16</option>
            <option value={"2023-02-17"}>2023-02-17</option>
            <option value={"2023-02-18"}>2023-02-18</option>
          </select>
        </div> */}
        <div className='w-full flex flex-wrap justify-center mt-20'>
          {movies.map(movie =>
            <div className="gap-4 mb-20 flex justify-center px-2">
              <div className="max-w-sm overflow-hidden rounded-xl  shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                <img src={movie.image} alt="plant" className="h-auto w-full" />
                <div className="p-5">
                  <p className="text-medium mb-5 text-white">{movie.nom_film}</p>
                  <p className="text-medium mb-5 text-white">{movie.nom_salle}</p>
                  <button onClick={
                    () => props.onData(movie.id_f)} className="w-full rounded-md bg-indigo-600  py-2 text-white hover:bg-indigo-500 hover:shadow-md duration-75">book</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default ListMovies
