import React, { useRef } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import { onMouseMovement } from './Mousemovement'
import './App.css'
import Projects from './Components/Projects/Projects'

const App = () => {

  const {elementRef , handleMouseMovement} = onMouseMovement();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const smoothscroll = (elemRef) => {
    window.scrollTo({
      top: elemRef.current.offsetTop - 65,
      behavior: 'smooth' ,
    }
    );
  }

  return (
    <div>
      
      <div className="main-area" ref={elementRef} onMouseMove={handleMouseMovement} style={{position : 'relative'}} >
        <Navbar smoothscroll = {smoothscroll} refs={{heroRef , aboutRef , projectRef}} />
        <div ref={heroRef}><Hero /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={projectRef}><Projects /></div>
        <Footer />
      </div>
      
    </div>
  )
}

export default App

