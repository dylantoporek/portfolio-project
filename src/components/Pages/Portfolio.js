import React, {useEffect} from "react";
import ProjectItem from "../ProjectItem";
import Contact from "../Contact";

function Portfolio({changePage}){

    useEffect(()=>{
        changePage(window.location.href)
    }, [])
    
    return (
        <div id='portfolio-container'>
          <ProjectItem/>
            <div id='contact-bar'>
                <Contact/>
            </div>
        </div>
      );
}

export default Portfolio