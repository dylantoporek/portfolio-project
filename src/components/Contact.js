import React from "react";
import githubImg from '../images/GithubLogo.png'
import mediumImg from '../images/mediumLogo.png'
import linkedinImg from '../images/linkedinLogo.webp'
import gitHub from '../images/github-brands.svg'
import medium from '../images/medium-brands.svg'
import linkedin from '../images/linkedin-in-brands.svg'

function Contact(){
    return (
        <div id='contact-container'>
            <a className="contact-item" href='https://github.com/dylantoporek'>
                <img className='logo-link' src={gitHub}></img>
            </a>
            <a className="contact-item" href='https://medium.com/@dylantoporek'>
                <img className='logo-link' src={medium}></img>
            </a>
            <a className="contact-item" href='https://www.linkedin.com/in/dylan-toporek-bb3491106/'>
                <img className='logo-link' src={linkedin}></img>
            </a>


        </div>
    )
}

export default Contact