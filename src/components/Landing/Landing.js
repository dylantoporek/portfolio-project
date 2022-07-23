import React from "react";
import mountains from '../../images/mountains1.png'
import '../Landing/index.scss'

function Landing({}){
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight

    
    return (
        <div id='landing-container'> 
            <div id='intro-text'>
                <h2>Hi, my name is</h2>
                <h1>Dylan Toporek</h1>
                <p>
                    I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                </p> 
            </div>
        </div>
    )
}

export default Landing