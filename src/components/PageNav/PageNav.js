import React from "react";
import '../PageNav/index.scss'
function PageNav(){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    function findMySection(e){
        console.log(e.target.id)
        if(e.target.id === 'About'){
            const section = document.querySelector( '#home-container' );
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
    const pageNavHelper = <div id='page-nav-container'>
        <a className="page-nav" id='About' onClick={findMySection}>About</a>
        <a className="page-nav" id='Experience' onClick={findMySection}>Experience</a>
        <a className="page-nav" id='Projects' onClick={findMySection}>Projects</a>
        <a className="page-nav" id='resume-link' 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={()=> openInNewTab('https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing')}>
            Resume
        </a>
    </div>
    return (
        <div>
            {pageNavHelper}
        </div>
    )
}

export default PageNav