import React, {useState, useEffect} from "react";
import '../PageNav/index.scss'

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
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }
            if(e.target.id === 'Experience'){
                const section = document.querySelector( '#home-experience' );
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }
            if(e.target.id === 'Projects'){
                const section = document.querySelector( '#home-projects' );
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }
    }


    // <div className='pag-nav-deco-undo'></div>
    const pageNavHelper = <div id='page-nav-container'>
        <div>
            <a className="page-nav" id='About' onClick={findMySection}>About</a>
            {selectedNav === 'About' && animation !== false ? <div id="About-deco" className='pag-nav-decoration'></div> : null}
            {selectedNav !== 'About' ? <div id='About-deco' className='pag-nav-deco-undo'></div> : null}
        </div>

        <div>
            <a className="page-nav" id='Experience' onClick={findMySection}>Experience</a>
            {selectedNav === 'Experience' && animation !== false ? <div id="Experience-deco" className='pag-nav-decoration'></div> : null}
            {selectedNav !== 'Experience' ? <div id='Experience-deco' className='pag-nav-deco-undo'></div> : null}
        </div>

        <div>
            <a className="page-nav" id='Projects' onClick={findMySection}>Projects</a>
            {selectedNav === 'Projects' && animation !== false ? <div id="Projects-deco" className='pag-nav-decoration'></div> : null}
            {selectedNav !== 'Projects'  ? <div id='Projects-deco' className='pag-nav-deco-undo'></div> : null}
        </div>
        <div>
        <a className="page-nav" id='resume-link' 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={()=> openInNewTab('https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing')}>
            Resume
        </a>
        {selectedNav !== 'Resume' ? <div id='Resume-deco' className='pag-nav-deco-undo'></div> : null}
        </div>
        
    </div>
    return (
        <div>
            {pageNavHelper}
        </div>
    )
}

export default PageNav