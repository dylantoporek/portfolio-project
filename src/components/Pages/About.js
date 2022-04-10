import React from "react";
import Contact from "../Contact";

function About(){
    return (
        <div id='about-container'>
            <div id='about-me'>
              about paragraph...word and such etc...
            </div>

            <div id='about-work'>
                work experience paragraph...words go here...
            </div>

            <div id='about-hobbies'>
              hobbies paragraph...hopefully something well written here...
            </div>

          
            <div id='contact-bar'>
                <Contact/>
            </div>
        </div>


      );
}

export default About