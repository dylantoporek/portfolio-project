import React from "react";
import ProjectItem from "../ProjectItem";
import Contact from "../Contact";

function Portfolio(){
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