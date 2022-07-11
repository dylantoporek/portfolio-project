import React from "react";
import githubImg from '../images/GithubLogo.png'
import mediumImg from '../images/mediumLogo.png'
import linkedinImg from '../images/linkedinLogo.webp'

function Contact(){
    return (
        <div id='contact-container'>
            <a className="contact-item" href='https://github.com/dylantoporek'>
                <img className='logo-link' src={githubImg}></img>
            </a>
            <a className="contact-item" href='https://medium.com/@dylantoporek'>
                <img className='logo-link' src={mediumImg}></img>
            </a>
            <a className="contact-item" href='https://www.linkedin.com/in/dylan-toporek-bb3491106/'>
                <img className='logo-link' src={linkedinImg}></img>
            </a>


        </div>
    )
}

export default Contact