import React from "react";

function PageNav(){

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
        <p className="page-nav" id='About' onClick={findMySection}>About</p>
        <p className="page-nav" id='Experience' onClick={findMySection}>Experience</p>
        <p className="page-nav" id='Projects' onClick={findMySection}>Projects</p>
    </div>
    return (
        <div>
            {pageNavHelper}
        </div>
    )
}

export default PageNav