import React, {useEffect} from "react";
import ProjectItem from "../ProjectItem";
import Contact from "../Contact";

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