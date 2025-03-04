import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <WhatsAppIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <p> &copy; 2025 SrilankanFood.com</p>

        </div>
      
    </div>
  )
}

export default Footer
