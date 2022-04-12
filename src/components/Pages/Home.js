import React, {useEffect} from "react";
import Contact from "../Contact";

function Home({changePage}){

    useEffect(()=>{
        changePage(window.location.href)
    }, [])
    return (
        <div id='home-container'>
            <div id='home-page-img'>
                Img placeholder
            </div>

            <div id='home-about'>
               Hi, my name is Dylan Toporek. I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails. For more information:
                <a className='home-link' href="/about">To About</a>
                
            </div>

            <div id='home-projects'>
                Project snippit placeholder... for more information follow this link:
                <a className='home-link' href="/portfolio">To Portfolio</a>
            </div>

            <div id='home-blogs'>
                <p>Blog snippit placeholder....for more information follow this link:</p>
                <a className='home-link' href='https://medium.com/@dylantoporek'>Medium</a>
            </div>

            <div id='contact-bar'>
                <Contact/>
            </div>
            
        </div>
      );
}

export default Home