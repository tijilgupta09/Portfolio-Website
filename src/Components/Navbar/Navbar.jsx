import React, { useState } from 'react'
import './Navbar.css'
import github_icon from '../../assets/github-svgrepo-com (1).svg'
import { IoIosMenu } from 'react-icons/io'

const Navbar = ({smoothscroll , refs}) => {

  const [isMenuOpen , setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  const menuClick = (ref) => {
    smoothscroll(ref);
    setIsMenuOpen(false);
  }

  return (
    <div className="navbar-full">
    <div className='navbar'>
        <div className="navbar-left">
            <h3>Tijil Gupta</h3>
        </div>
        <div className="navbar-middle">
            <a onClick={() => smoothscroll(refs.heroRef)} >Home</a>
            <a onClick={() => smoothscroll(refs.aboutRef)} >About</a>
            <a onClick={() => smoothscroll(refs.projectRef)} >Projects</a>
        </div>
        <div className="navbar-right">
            <img src={github_icon} width={40} style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/tijilgupta09', '_blank')} />
            <div className='menu-icon' onClick={toggleMenu}>
              {isMenuOpen?<IoIosMenu size={30} color='white'/>: <IoIosMenu size={30} color='white'/>}
            </div>
        </div> 
    </div>
      <div className={`navbar-overlay ${isMenuOpen ? 'open' : ''}`}>
          <a onClick={()=>{menuClick(refs.heroRef)}}>Home</a>
          <a onClick={()=>{menuClick(refs.aboutRef)}}>About</a>
          <a onClick={()=>{menuClick(refs.projectRef)}}>Projects</a>
      </div>
    </div>
  )
}



export default Navbar
