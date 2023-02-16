import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('nom', fullname)
    data.append('email', email)

    setPending(true);

    axios.post('http://localhost/CineHall/Users/register', data)
      .then(() => {
        alert('new user added');
      });
  }

  return (
    <section className="bg-gray-50 white mt-5 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 white:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
              Create account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handlesubmit} >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Your Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={fullname} name="fullname" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Your email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
              </div>
              {!pending && <button type="submit" className="w-full text-dark bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>}
              {pending && <button type="submit" className="w-full text-dark bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">pending .....</button>}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
              {/* <p>{name}</p>
              <p>{email}</p>
              <p>{password}</p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
