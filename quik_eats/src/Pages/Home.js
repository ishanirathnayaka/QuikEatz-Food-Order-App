import React from 'react'
import banner from '../Assests/banner.png';
import {Link} from 'react-router-dom';
import '../Styles/Home.css';


function Home() {
  return (
    <div className='home' style = {{backgroundImage: `url(${banner})`}}>
        <div className='homeContainer'>
            <h1> WELCOME TO OUR QUIKEATS </h1>
            <p> Srilankan Food At A Click. </p>
            <Link to='/menu'>
                <button> Order Now </button>
            </Link>

        </div>
      
    </div>
  )
}

export default Home
