import React from "react";
import Contact from "../Contact";

function Home(){
    return (
        <div id='home-container'>
            <div id='home-page-img'>
                Img placeholder
            </div>

            <div id='home-about'>
                About snippit placeholder... for more information:
                <a href="/about">To About</a>
            </div>

            <div id='home-projects'>
                Project snippit placeholder... for more information follow this link:
                <a href="/portfolio">To Portfolio</a>
            </div>

            <div id='home-blogs'>
                <p>Blog snippit placeholder....To check out the blogs I have written please follow this link:</p>
                <a href='https://medium.com/@dylantoporek'>https://medium.com/@dylantoporek</a>
            </div>

            <div id='contact-bar'>
                <Contact/>
            </div>
            
        </div>
      );
}

export default Home