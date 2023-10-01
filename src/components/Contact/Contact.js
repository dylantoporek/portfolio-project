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
import {HamburgerIcon} from '@chakra-ui/icons'
import { motion } from "framer-motion"

function Contact({toggleNavbar, setToggleNavbar}){
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
    <Stack flexDir={'horizontal'} gap={5} minH={'80px'} w={'100%'}>
        <Flex gap={5} alignSelf={'center'} mr={'2'}>
        {contactMethods.map((method) => {
          return (
            <motion.div 
            key={method}
            whileHover={{scale: 1.1 }}
            style={{
              cursor: 'pointer',
              h: '100%',
              marginLeft: '20px'

            }}>
              <FontAwesomeIcon
              onMouseOver={() => setIsHovered(method)}
              onMouseOut={() => setIsHovered('')}
              onClick={() =>  openInNewTab(method)}  
              id={method}
              icon={iconPicker(method)} 
              color={isHovered === method ? 'white' : "#4B88A2"} 
              style={{
              position: 'relative',
              width: '20px',
              height: '20px',
              transition: "all .3s ease",
              WebkitTransition: "all .3s ease",
              MozTransition: "all .3s ease",
            }}/>
            </motion.div>
          )
        })}
        </Flex>
          
    </Stack>
  )
}

export default Contact