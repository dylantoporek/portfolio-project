import React, {useState} from "react";
import '../../App.scss';
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
import { Flex, Stack, Link } from "@chakra-ui/react";

function Contact(){
const [isHovered, setIsHovered] = useState('')
const contactMethods = ['github', 'linkedin', 'medium']


const openInNewTab = string => {
  if (string === 'github'){
    let url = "https://github.com/dylantoporek"
    window.open(url, '_blank', 'noopener,noreferrer');
  } else if (string === 'linkedin'){
    let url = "https://www.linkedin.com/in/dylan-toporek-bb3491106/"
    window.open(url, '_blank', 'noopener,noreferrer');
  } else if (string === 'medium'){
    let url = "https://medium.com/@dylantoporek"
    window.open(url, '_blank', 'noopener,noreferrer');
  }

};
    function handleHover(e){
      setIsHovered(e.target.id)
    }

    function handleLeave(){
      setTimeout(() => {
        setIsHovered('')
      }, 100)
      
    }

    function iconPicker(string){
      if (string === 'github'){
        return faGithub
      } else if (string === 'linkedin'){
        return faLinkedin
      } else if (string === 'medium'){
        return faMedium
      }
    }

  return (
    <Stack flexDir={'horizontal'} gap={10} justifyContent={'flex-end'}>
        {contactMethods.map((method) => {
          return (
            <Flex
              p={1}
              zIndex={1}
              onMouseOver={handleHover} 
              onMouseLeave={handleLeave}>
              <FontAwesomeIcon
              onClick={() =>  openInNewTab(method)}  
              id={method}
              icon={iconPicker(method)} 
              color={isHovered === method ? 'white' : "#4B88A2"} 
              style={{
              position: 'relative',
              width: '25px',
              height: '25px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }}/>
            </Flex>
          )
        })}
    </Stack>
  )
}

export default Contact