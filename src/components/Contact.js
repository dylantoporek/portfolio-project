import React, {useState} from "react";
import '../../src/App.scss';
import githubImg from '../images/GithubLogo.png'
import mediumImg from '../images/mediumLogo.png'
import linkedinImg from '../images/linkedinLogo.webp'
import gitHub from '../images/github-brands.svg'
import medium from '../images/medium-brands.svg'
import linkedin from '../images/linkedin-in-brands.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'

function Contact(){
    

    function handleHover(e){
      console.log(e.target.id)
      e.target.style.color = 'yellow'
    }

    function handleLeave(e){
      console.log(e.target.id)
      e.target.style.color = "#FFF9FB"
      
    }
  return (
    <div className="nav-bar">
        <div>
          <a
            href="https://www.linkedin.com/in/dylan-toporek-bb3491106/"
          >
            <FontAwesomeIcon id='linkedin' onMouseEnter={handleHover} onMouseLeave={handleLeave}  icon={faLinkedin} color="#FFF9FB" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/dylantoporek"
          >
            <FontAwesomeIcon id='github' onMouseEnter={handleHover} onMouseLeave={handleLeave} icon={faGithub} color="#FFF9FB" /> 
          </a>
        </div>
        <div>
          <a
            href="https://medium.com/@dylantoporek"
          >
            <FontAwesomeIcon id='medium' onMouseEnter={handleHover} onMouseLeave={handleLeave}  icon={faMedium} color="#FFF9FB" /> 
          </a>
        </div>
    </div>
  )
}

export default Contact