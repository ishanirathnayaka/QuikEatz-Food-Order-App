import React from 'react'
import aboutImage from '../Assests/About.png';
import '../Styles/About.css';


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${aboutImage})`}}></div>
            <div className='aboutBottom'>


                <h1>About Us</h1>
                <p>Our restaurant is a place where you can enjoy the best of Sri Lankan cuisine. We offer a wide range of dishes, from traditional rice and curry to modern fusion dishes. Our chefs are experts in creating delicious and authentic Sri Lankan food, using only the freshest ingredients. Whether you are a fan of spicy curries or sweet desserts, we have something for everyone. So come and visit us today and experience the taste of Sri Lanka!</p>
        </div>
      
    </div>
  )
}

export default About


