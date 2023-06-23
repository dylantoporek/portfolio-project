import React from "react";
import '../PageNav/index.scss'
import {Stack, Flex, Text, Link} from '@chakra-ui/react'

function PageNav({selectedNav, handleNavSelection, handleAnimation, animation}){
    // const [selectedNav, setSelectedNav] = useState(null)
    
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };



    function findMySection(e){
        console.log(selectedNav, e.target.id)
        if(selectedNav){
            const wasSelected = document.getElementById(`${selectedNav}-deco`)
            console.log(wasSelected)
            wasSelected.className = 'pag-nav-deco-undo'
            console.log(wasSelected)
        }
        handleNavSelection(e.target.id)
        handleAnimation('on')
            if(e.target.id === 'About'){
                const section = document.querySelector( '#home-about' );
                section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
            if(e.target.id === 'Experience'){
                const section = document.querySelector( '#home-experience' );
                section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
            if(e.target.id === 'Projects'){
                const section = document.querySelector( '#home-projects' );
                section.scrollIntoView( { behavior: 'smooth', block: 'end' } );
            }
    }

    const pageNavHelper = <Stack flexDirection={'row'} alignItems={'center'}>
        <Flex fontSize={'18px'} ml={2}> 
            <Text className="page-nav" id='About' onClick={findMySection}>About</Text>
            {selectedNav === 'About' && animation !== false ? <Flex id="About-deco" className='pag-nav-decoration'></Flex> : null}
            {selectedNav !== 'About' ? <Flex id='About-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>

        <Flex fontSize={'18px'} ml={2}>
            <Text className="page-nav" id='Experience' onClick={findMySection}>Experience</Text>
            {selectedNav === 'Experience' && animation !== false ? <Flex id="Experience-deco" className='pag-nav-decoration'></Flex> : null}
            {selectedNav !== 'Experience' ? <Flex id='Experience-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>

        <Flex fontSize={'18px'} ml={2}>
            <Text className="page-nav" id='Projects' onClick={findMySection}>Projects</Text>
            {selectedNav === 'Projects' && animation !== false ? <Flex id="Projects-deco" className='pag-nav-decoration'></Flex> : null}
            {selectedNav !== 'Projects'  ? <Flex id='Projects-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>
        <Flex>
            <Link 
            ml={2}
            className="page-nav" id='resume-link' 
            target="_blank" 
            rel="noopener noreferrer"
            fontSize={'18px'}
            onClick={()=> 
                openInNewTab(
                    'https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing'
                    )}>
                Resume
            </Link>
            {selectedNav !== 'Resume' ? <Flex id='Resume-deco' className='pag-nav-deco-undo'></Flex> : null}
        </Flex>  
    </Stack>
    return (
        <Flex>
            {pageNavHelper}
        </Flex>
    )
}

export default PageNav