import React, { useState } from 'react'
import logo from '../img/logo2.png'
import Cookies from "universal-cookie"


const Navbar = () => {
  const Cooki = new Cookies();
  const cooki = Cooki.get('jwt_authorisation');
  const logout = () => {
    Cooki.remove('jwt_authorisation');
    Cooki.remove('name');
    window.location.href = '/';
  }

  if (!cooki) {
    return (
      <header className="header z-20 sticky top-0 bg-[#201D1E] shadow-md flex items-center justify-between px-8 py-02">

        <h1 className="w-3/12">
          <a href="/">
            <img className='h-14 sm:h-10' src={logo} alt="logo" />
          </a>
        </h1>

        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
              <a href="/movies">Movies</a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="w-3/12 flex justify-end gap-5">
            <a className='h-8 w-16 flex justify-center items-center  hover:bg-orange-400' href="/login">
              LOGIN
            </a>
            <a href="/register" className='h-8 w-20 flex justify-center items-center  hover:bg-orange-400'>
              REGISTER
            </a>
          </div>
        </div>
      </header>
    )
  }
  // console.log(cooki)
  return (

    <header className="header z-20 sticky top-0 bg-[201D1E] shadow-md flex items-center justify-between px-8 py-02">

      <h1 className="w-3/12">
        <a href="/">
          <img className='h-14 sm:h-10' src={logo} alt="" />
        </a>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">
            <a href="/">Home</a>
          </li>
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
            <a href="/movies">Movies</a>
          </li>
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
            <a href="/reserveUser">Your Reservations</a>
          </li>
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
            <button onClick={logout}>logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
