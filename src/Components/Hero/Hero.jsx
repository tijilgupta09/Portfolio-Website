import React, { useRef } from 'react'
import './Hero.css'
import myImg from '../../assets/Me_Professional.jpeg'
import { onMouseMovement } from '../../Mousemovement.js'

const Hero = () => {

  return (
    <div className='hero-container'>
        
        <div className="hero-content">
        <h1>Tijil Gupta</h1>
        <p className="p1">B-tech 2nd Year</p>
        <p className="p2">"Software engineering is not merely the act of writing code; it is the art of translating complex problems into elegant, scalable solutions. It is about building digital architectures that bridge the gap between imagination and reality, creating tools that define the modern world."</p>
        </div>
        <img src={myImg} alt="My Picture" className='hero-image' />
    </div>
  )
}


export default Hero
