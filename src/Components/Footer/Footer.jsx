import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import gmail from '../../assets/gmail-svgrepo-com.svg'


const Footer = () => {
  return (
    <footer className="footer">
        <p className='copyright'>&copy; 2026 Tijil Gupta. All rights reserved.</p>
        <p className="contact">Contact Me</p>
        <div className="icons">
        <FaLinkedin size={30} color='#0A66C2' style={{cursor : 'pointer'}} onClick={() => window.open('https://www.linkedin.com/in/tijil-gupta/', '_blank')} />
        <FaGithub size={30} color='#fff' style={{cursor : 'pointer'}} onClick={() => window.open('https://github.com/tijilgupta09', '_blank')} />
        <a href="mailto:tijilgupta09@gmail.com"><img src={gmail} alt="" width={40} style={{cursor:'pointer'}} /></a>
        </div>
    </footer>
  )
}


export default Footer
