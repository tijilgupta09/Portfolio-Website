import React from 'react'
import'./Projects.css'
import Ytss from '../../assets/Youtube-clone-ss.jpg' 
import Netss from '../../assets/Netflix-clone-ss.jpg'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projects-heading">
        <h2>Projects</h2>
      </div>
      <div className="projects-card-container">
        <div className='project-card' onClick={() => window.open('https://tijil-youtube-clone.vercel.app/' , '_blank')} >
          <img src={Ytss} alt="" width={700} className='project-img' />
          <div className="project-caption">
            <h4>Youtube Clone</h4>
            <p>A responsive YouTube Clone built with React, Vite, and the YouTube Data API v3</p>
          </div>
        </div>
        <div className='project-card' onClick={() => window.open('https://tijil-netflix-clone.vercel.app/' , '_blank')} >
          <img src={Netss} alt="" width={700} className='project-img' />
          <div className="project-caption">
            <h4>Netflix Clone</h4>
            <p>Netflix clone with Firebase and TMDB API</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
