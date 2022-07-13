import React, {useState} from "react";
import '../../src/App.scss';
import 'animate.css'
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
const [isHovered, setIsHovered] = useState(null)

    function handleHover(e){
      console.log(e.target.id)
      // setIsHovered(e.target.id)
      // e.target.setAttribute('class','animate__animated animate__pulse')
    }

    function handleLeave(e){
      console.log(e.target)
      // setIsHovered('')
      // e.target.setAttribute('class', null)
    }
  return (
    <div className="nav-bar">
        <div>
          <a
            href="https://www.linkedin.com/in/dylan-toporek-bb3491106/"
            onMouseEnter={handleHover} onMouseLeave={handleLeave}
            id='linkedin'
            
          >
            <FontAwesomeIcon icon={faLinkedin} color="#FFF9FB" style={{
              transition: "all .5s ease",
              WebkitTransition: "all .5s ease",
              MozTransition: "all .5s ease",
            }}/>
          </a>
        </div>

        <div>
          <a id='github'
            href="https://github.com/dylantoporek"
            onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <FontAwesomeIcon icon={faGithub} color="#FFF9FB" style={{
              transition: "all .5s ease",
              WebkitTransition: "all .5s ease",
              MozTransition: "all .5s ease",
            }}/>
            </a> 
        </div>
        <div>
          <a
            href="https://medium.com/@dylantoporek"
            onMouseEnter={handleHover} onMouseLeave={handleLeave}
            id='medium'
          >
            <FontAwesomeIcon icon={faMedium} color="#FFF9FB" style={{
              transition: "all .5s ease",
              WebkitTransition: "all .5s ease",
              MozTransition: "all .5s ease",
            }} /> 
          </a>
        </div>
    </div>
  )
}

export default Contact