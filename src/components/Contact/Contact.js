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


const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
    function handleHover(e){
      setIsHovered(e.target.id)
    }

    function handleLeave(){
      setIsHovered('')
    }

  return (
    <Stack flexDir={'horizontal'} gap={10} justifyContent={'flex-end'}>
        <Flex 
          onMouseOver={handleHover} 
          onMouseOut={handleLeave}> 
          <Link
            onClick={()=> openInNewTab("https://www.linkedin.com/in/dylan-toporek-bb3491106/")}>
            <FontAwesomeIcon   id='linkedin' icon={faLinkedin} color={isHovered === 'linkedin' ? 'white' : "#4B88A2"} style={{
              position: 'relative',
              width: '30px',
              height: '30px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }}/>
          </Link>
        </Flex>
        <Flex
          onMouseOver={handleHover}
          onMouseOut={handleLeave}>
          <Link
            onClick={()=> openInNewTab("https://github.com/dylantoporek")}>
            <FontAwesomeIcon id='github' icon={faGithub} color={isHovered === 'github' ? 'white' : "#4B88A2"} style={{
              position: 'relative',
              width: isHovered === 'github' ? '30px':'30px',
              height: '30px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }}/>
            </Link> 
        </Flex>

        <Flex
          onMouseOver={handleHover} 
          onMouseOut={handleLeave} >
          <Link
            onClick={()=> openInNewTab("https://medium.com/@dylantoporek")}>
            <FontAwesomeIcon id='medium' icon={faMedium} color={isHovered === 'medium' ? 'white' : "#4B88A2"} style={{
              position: 'relative',
              width: isHovered === 'medium' ? '30px':'30px',
              height: '30px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }} /> 
          </Link>
        </Flex>
    </Stack>
  )
}

export default Contact