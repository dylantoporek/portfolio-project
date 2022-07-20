import React, {useState} from "react";
import '../../App.scss';
import '../Contact/index.scss'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'

function Contact(){
const [isHovered, setIsHovered] = useState(null)


const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
    function handleHover(e){
      // console.log(e.target.id)
      // setIsHovered(e.target.id)
      // e.target.setAttribute('class','animate__animated animate__pulse')
    }

    function handleLeave(e){
      // console.log(e.target)
      // setIsHovered('')
      // e.target.setAttribute('class', null)
    }
  return (
    <div className="contact-bar">
        <div>
          <a id='linkedin'
            onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={()=> openInNewTab("https://www.linkedin.com/in/dylan-toporek-bb3491106/")}>
            <FontAwesomeIcon icon={faLinkedin} color="#FFF9FB" style={{
              transition: "all .5s ease",
              WebkitTransition: "all .5s ease",
              MozTransition: "all .5s ease",
            }}/>
          </a>
        </div>

        <div>
          <a id='github'
            onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={()=> openInNewTab("https://github.com/dylantoporek")}>
            <FontAwesomeIcon icon={faGithub} color="#FFF9FB" style={{
              transition: "all .5s ease",
              WebkitTransition: "all .5s ease",
              MozTransition: "all .5s ease",
            }}/>
            </a> 
        </div>
        <div>
          <a id='medium'
            onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={()=> openInNewTab("https://medium.com/@dylantoporek")}>
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