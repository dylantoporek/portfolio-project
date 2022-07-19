import React, {useEffect} from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import Contact from "../Contact/Contact";
import '../Portfolio/index.scss'

function Portfolio({changePage}){

    // useEffect(()=>{
    //     changePage(window.location.href)
    //     window.scrollTo(0, 0)
    // }, [])
    
    return (
        <div id='portfolio-container'>
          <ProjectItem/>
        </div>
      );
}

export default Portfolio