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
    <Stack 
      height={'30%'}
      className="contact-bar" 
      ml={'30px'} 
      alignItems={'center'}
      width={'60px'}
      position={'fixed'}
      bottom={10}
      zIndex={1}
      left={0}>
        <Flex mb={10} mt={1}> 
          <Link
            onMouseEnter={handleHover} 
            onMouseLeave={handleLeave} 
            onClick={()=> openInNewTab("https://www.linkedin.com/in/dylan-toporek-bb3491106/")}>
            <FontAwesomeIcon id='linkedin' icon={faLinkedin} color={isHovered === 'linkedin' ? '#061A40' : "#4B88A2"} style={{
              position: 'relative',
              top: isHovered === 'linkedin' ? '-5px' : '0px',
              width: '30px',
              height: '30px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }}/>
          </Link>
        </Flex>
        <Flex mb={10}>
          <Link
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave} 
            onClick={()=> openInNewTab("https://github.com/dylantoporek")}>
            <FontAwesomeIcon id='github' icon={faGithub} color={isHovered === 'github' ? '#061A40' : "#4B88A2"} style={{
              position: 'relative',
              top: isHovered === 'github' ? '-5px' : '0px',
              width: '30px',
              height: '30px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }}/>
            </Link> 
        </Flex>

        <Flex mb={10}>
          <Link
            onMouseEnter={handleHover} 
            onMouseLeave={handleLeave} 
            onClick={()=> openInNewTab("https://medium.com/@dylantoporek")}>
            <FontAwesomeIcon id='medium' icon={faMedium} color={isHovered === 'medium' ? '#061A40' : "#4B88A2"} style={{
              position: 'relative',
              top: isHovered === 'medium' ? '-5px' : '0px',
              width: '30px',
              height: '30px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }} /> 
          </Link>
        </Flex>
        <Flex maxW={'2px'} w={'1%'} minH={'100%'} backgroundColor={"#4B88A2"}></Flex>
    </Stack>
  )
}

export default Contact