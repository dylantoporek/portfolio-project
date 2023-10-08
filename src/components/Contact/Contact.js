import React, {useState} from "react";
import '../../App.scss';
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
import { Flex, Stack, Link, useMediaQuery } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import { motion } from "framer-motion"

function Contact({toggleNavbar, setToggleNavbar}){
const [isHovered, setIsHovered] = useState('')
const contactMethods = ['github', 'linkedin', 'medium']
const [isMobile] = useMediaQuery("(max-width: 768px)", {
  ssr: true,
  fallback: false,
})

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

    function iconPicker(string){
      if (string === 'github'){
        return faGithub
      } else if (string === 'linkedin'){
        return faLinkedin
      } else if (string === 'medium'){
        return faMedium
      }
    }

    function link(string){
      if (string === 'github'){
        return "https://github.com/dylantoporek"
      } else if (string === 'linkedin'){
        return "https://www.linkedin.com/in/dylan-toporek-bb3491106/"
      } else if (string === 'medium'){
        return  "https://medium.com/@dylantoporek"
      }
    }

  return (
    <Stack gap={5} minH={'40px'} w={'100%'} flexDir={'row'} justifyContent={'space-between'}>
        <Flex  gap={5} alignSelf={'flex-start'}>
        {contactMethods.map((method) => {
          return (
            <motion.div 
            key={method}
            whileHover={{scale: 1.1 }}
            style={{
              cursor: 'pointer',
              h: '100%',
              marginLeft: isMobile ? '10px':'20px',
              marginTop: isMobile ? '10px':'5px',
              justifyItems:'center',

            }}>
              <Link href={link(method)} isExternal>
                <FontAwesomeIcon
                onMouseOver={() => setIsHovered(method)}
                onMouseOut={() => setIsHovered('')}
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
              </Link>
              
            </motion.div>
          )
        })}
       
         
        </Flex>
        <Flex gap={1} justifySelf={'flex-end'} mr={10} mt={5}>
          <a target="_blank" href="https://icons8.com/icon/102439/ghost">Ghost</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </Flex>
    </Stack>
  )
}

export default Contact