import React, {useState} from "react";
import '../PageNav/index.scss'
import {Stack, Flex, Text, Link, color} from '@chakra-ui/react'

function PageNav({selectedNav, handleNavSelection, handleAnimation, animation}){

    const [navBarHovered, setNavBarHovered] = useState('')
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function findMySection(e){
        if (selectedNav){
            const wasSelected = document.getElementById(`${selectedNav}-deco`)
            wasSelected.className = 'pag-nav-deco-undo'
        }
        handleNavSelection(e.target.id)
        handleAnimation('on')
            if (e.target.id === 'About'){
                const section = document.querySelector( '#home-about' );
                section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
            if (e.target.id === 'Experience'){
                const section = document.querySelector( '#home-experience' );
                section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
            if (e.target.id === 'Projects'){
                const section = document.querySelector( '#home-projects' );
                section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
    }

    function handleHover(id) {
       setNavBarHovered(id)
    }
    
    return (
        <Stack 
         flexDirection={'row'} 
         alignItems={'center'} 
         fontWeight={400} 
         mr={'35px'}
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