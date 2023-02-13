import React from 'react'
import logo from '../img/logo2.png'

const Navbar = () => {
  return (

    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">

      <h1 className="w-3/12">
        <a href="">
          <img className='h-14' src={logo} alt="" />
        </a>
      </h1>


      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">
            <a href="/">Accueil</a>
          </li>
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
            <a href="/About">About</a>
          </li>
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
            <a href="/movies">Movies</a>
          </li>
          <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
            <a href="/Reservations">Reservations</a>
          </li>
        </ul>
      </nav>


      <div className="w-3/12 flex justify-end gap-5">
        <a className='border-b-2 rounded h-8 w-16 flex justify-center items-center  hover:bg-orange-400 hover:border-b-0 duration-200 ' href="/login">
          LOGIN
        </a>
        <a href="/register" className='border-b-2 rounded h-8 w-16 flex justify-center items-center  hover:bg-black hover:text-white hover:border-b-0 duration-200'>
         REGISTER
        </a>
      </div>
    </header>
  );
}

export default Navbar
