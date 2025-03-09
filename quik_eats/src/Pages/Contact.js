import React from 'react'
import '../Styles/Contact.css';
import ContactImage from '../Assests/contact.jpg';

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${ContactImage})` }}
>
            
        </div>
        <div className='rightSide'>
            <h1> Contact Us </h1>
            <form>
                <label htmlFor='name'>Full Name </label>
                <input type='text' id='name' name='name' placeholder='Enter your full name' />
                <label htmlFor='email'>Email </label>
                <input type='email' id='email' name='email' placeholder='Enter your email' />
                <label htmlFor='message'> Message </label>
                <textarea id='message' name='message' placeholder='Enter your message' rows= '7'></textarea>
                <button type='submit'> Send Message </button>
                

            </form>
        </div>
      
    </div>
  )
}

export default Contact
