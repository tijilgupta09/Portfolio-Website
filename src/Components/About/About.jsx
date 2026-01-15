import React from 'react'
import './About.css'
import { FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { DiJavascript1, DiMysql } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import { DiCss3 } from "react-icons/di"
import PyLogo from '../../assets/python-svgrepo-com.svg'
import CppLogo from '../../assets/cpp-svgrepo-com.svg'
import { onMouseMovement } from '../../Mousemovement.js'

const About = () => {


  return (
    <div className='full-page'>
      <div className="about-me">
        <h2>About Me</h2>
        <p>I am Tijil Gupta, a sophomore at Netaji Subhas University of Technology (NSUT), Delhi, pursuing my passion for building impactful digital experiences. As an aspiring Full-Stack Developer, I specialize in Web Development and have a strong foundation in Data Structures and Algorithms (DSA). I am a lifelong learner at heart, constantly seeking to master emerging technologies and solve complex technical challenges.</p>
      </div>
      <div className="skills">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-card-container">
            <div className="skills-card">
                <FaHtml5 size={30} color='#F97316' />
                <h4>HTML</h4>
            </div>
            <div className="skills-card">
                <DiCss3 size={30} color='#3B82F6' />
                <h4>CSS</h4>
            </div>
            <div className="skills-card">
                <DiJavascript1 size={30} color='#FACC15' />
                <h4>JavaScript</h4>
            </div>
            <div className="skills-card">
                <FaReact size={30} color='#22D3EE' />
                <h4>ReactJS</h4>
            </div>
            <div className="skills-card">
                <img src={PyLogo} width={30} alt="" />
                <h4>Python</h4>
            </div>
            <div className="skills-card">
                <img src={CppLogo} width={30} alt="" />
                <h4>C++</h4>
            </div>
            <div className="skills-card">
                <DiMysql size={30} color='#00758F' />
                <h4>MySQL</h4>
            </div>
            <div className="skills-card">
                <FaGitAlt size={30} color='#F05539' />
                <h4>Git</h4>
            </div>
            <div className="skills-card">
                <FaGithub size={30} color='#fff' />
                <h4>GitHub</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
