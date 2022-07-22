import React, {useState, useEffect} from "react";
import '../PageNav/index.scss'

function PageNav(){
    const [selectedNav, setSelectedNav] = useState(null)
    
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };



    function findMySection(e){
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

    const pageNavHelper = <div id='page-nav-container'>
        <div>
            <a className="page-nav" id='About' onClick={findMySection}>About</a>
            {selectedNav === 'About' ? <div className='pag-nav-decoration'></div> : null}
        </div>

        <div>
            <a className="page-nav" id='Experience' onClick={findMySection}>Experience</a>
            {selectedNav === 'Experience' ? <div className='pag-nav-decoration'></div> : null}
        </div>

        <div>
            <a className="page-nav" id='Projects' onClick={findMySection}>Projects</a>
            {selectedNav === 'Projects' ? <div className='pag-nav-decoration'></div> : null}
        </div>
        
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