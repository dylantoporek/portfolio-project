import React, {useState} from "react";
import '../PageNav/index.scss'
import {Stack, Flex, Text, Link, color,Button, useMediaQuery, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
useDisclosure} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import 'animate.css'

function PageNav({selectedNav, handleNavSelection, handleAnimation, animation}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [menuOpen, setMenuOpen] = useState(false)
    const [navBarHovered, setNavBarHovered] = useState('')
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function findMySection(e){
        handleNavSelection(e.target.id)
        handleAnimation('on')
            if (e.target.id === 'About'){
                const section = document.querySelector( '#home-about' );
                const title = document.querySelector( '#about-title')
               isMobile ? title.scrollIntoView( { behavior: 'smooth', block: 'start', inline: 'start' } ) : section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
            if (e.target.id === 'Experience'){
                const section = document.querySelector( '#home-experience' );
                const title = document.querySelector( '#experience-title')
                isMobile ? title.scrollIntoView( { behavior: 'smooth', block: 'start', inline: "nearest" } ) : section.scrollIntoView( { behavior: 'smooth', block: 'center' } );
            }
            if (e.target.id === 'Projects'){
                const section = document.querySelector( '#home-projects' );
                const title = document.querySelector( '#project-title')
                isMobile ? title.scrollIntoView( { behavior: 'smooth', block: 'start', inline: "nearest" } ) : section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
            // onClose()
    }

    function handleHover(id) {
       setNavBarHovered(id)
    }
    

    if (isMobile){
        return (
            <Stack w={'100%'}>
                <HamburgerIcon onClick={onOpen} boxSize={10}></HamburgerIcon>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                            <ModalContent transition={'ease all .2s'} position={'absolute'} top={9} right={0} w={'120px'}
                            id={menuOpen ? 'modal': 'nodal'}>
                                    <ModalCloseButton />
                                        <Flex transition={'ease all .2s'} backgroundColor={'white'}>
                                            <Flex  
                                            w={'100%'}
                                            flexDir={'column'}
                                            mt={10} 
                                            alignItems={'center'}>
                                                <Text 
                                                 id='About' 
                                                 className="page-nav" 
                                                 mb={5}
                                                 onClick={findMySection} >About</Text>
                                                <Text 
                                                 id='Experience' 
                                                 className="page-nav" 
                                                 mb={5}
                                                 onClick={(e) => findMySection(e)} >Experience</Text>
                                                <Text 
                                                 id="Projects" 
                                                 className="page-nav" 
                                                 mb={5}
                                                 onClick={findMySection}>Projects</Text>
                                                <Text 
                                                 id="Resume" 
                                                 className="page-nav" 
                                                 mb={5}
                                                 onClick={()=> {
                                                    openInNewTab(
                                                        'https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing'
                                                        )
                                                        onClose()
                                                 }}>Resume</Text>
                                            </Flex>
                                        </Flex>
                            </ModalContent>
                    </Modal>
            </Stack>
        )
    } else return (
        <Stack 
         flexDirection={'row'} 
         alignItems={'center'} 
         fontWeight={400} 
         mr={5}
         fontSize={'16px'}>
        <Flex ml={2}> 
            <Text
             onMouseLeave={() => setNavBarHovered('')}
             onMouseOver={(e) => handleHover(e.target.id)}
             color={selectedNav === 'About' || navBarHovered === 'About' ? 
            '#94E8B4' : 'white'}
             className="page-nav" 
             id='About' 
             onClick={findMySection} 
             cursor={'pointer'}>
                About
            </Text>
            {selectedNav === 'About' && animation !== false ? <Flex id="About-deco" className='pag-nav-decoration'></Flex> : null}
            {selectedNav !== 'About' ? <Flex id='About-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>

        <Flex ml={10}>
            <Text 
             onMouseLeave={() => setNavBarHovered('')}
             onMouseOver={(e) => handleHover(e.target.id)}
             color={selectedNav === 'Experience' || navBarHovered === 'Experience' ? '#94E8B4' : 'white'}
             className="page-nav" 
             id='Experience' 
             onClick={findMySection}
             cursor={'pointer'}>
                Experience
            </Text>
            {selectedNav === 'Experience' && animation !== false ? <Flex id="Experience-deco" className='pag-nav-decoration'></Flex> : null}
            {selectedNav !== 'Experience' ? <Flex id='Experience-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>

        <Flex ml={10}>
            <Text 
             onMouseLeave={() => setNavBarHovered('')}
             onMouseOver={(e) => handleHover(e.target.id)}
             color={selectedNav === 'Projects' || navBarHovered === 'Projects' ? '#94E8B4' : 'white'}
             className="page-nav" 
             id='Projects' 
             onClick={findMySection}
             cursor={'pointer'}>
                Projects
            </Text>
            {selectedNav === 'Projects' && animation !== false ? <Flex id="Projects-deco" className='pag-nav-decoration'></Flex> : null}
            {selectedNav !== 'Projects'  ? <Flex id='Projects-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>
        <Flex ml={10}>
            <Text 
             onMouseLeave={() => setNavBarHovered('')}
             onMouseOver={(e) => handleHover(e.target.id)}
             color={navBarHovered === 'resume-link' ? '#94E8B4' : 'white'}
             className="page-nav" 
             id='resume-link' 
             target="_blank" 
             rel="noopener noreferrer"
             cursor={'pointer'}
             onClick={()=> 
                openInNewTab(
                    'https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing'
                    )}>
                Resume
            </Text>
            {selectedNav !== 'Resume' ? <Flex id='Resume-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>  
    </Stack>
    )
}

export default PageNav