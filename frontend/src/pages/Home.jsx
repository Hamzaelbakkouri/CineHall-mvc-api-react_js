import React from 'react';
import cinema from '../img/cinema2.jpg'



const Home = () => {


  return (
    <div
      className='h-screen'
      style={{
        backgroundImage: "url(" + "https://images.pexels.com/photos/7991141/pexels-photo-7991141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
      }
    >
      <h1 className='text-white flex justify-center text-xl'>Welcome To Our Cinema</h1>
      {/* <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=3000" alt="Drink" />
        </div>
      </div> */}
    </div>
  )
}

export default Home
