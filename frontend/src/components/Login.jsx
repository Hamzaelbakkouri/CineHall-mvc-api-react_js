import axios from 'axios';
import React, { useState } from 'react'
import Cookies from "universal-cookie"
import jwt from "jwt-decode"



const Login = () => {
  const [token, setToken] = useState('');
  const [istrue, setIstrue] = useState('');

  const cookies = new Cookies();

  const [user, setUser] = useState();

  const logout = () => {
    setUser(null);
    cookies.remove("jwt_authorisation");
  };

  const login = () => {
    const decoded = jwt(token);

    setUser(decoded);

    //set cookies 
    cookies.set("jwt_authorisation", user, {
      expires: new Date(decoded.exp * 1000)
    });
  };

  const handleSub = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('token', token)

    axios.post('http://localhost/CineHall/Users/login', data)
      .then(res => {
        setIstrue(res.data.isTrue);
      });
    
  }
  
  



  return (
    <div>
      <section className="bg-gray-50 white mt-5 ">

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 white:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
                login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSub}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Enter a token</label>
                  <input type="text" onChange={(e) => setToken(e.target.value)} value={token} name="fullname" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********************" required />
                </div>
                
                <button onClick={() =>
                  {if (istrue) {
                  login();
                  }}
                  } type="submit" className="w-full text-dark bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">submit you token</button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
