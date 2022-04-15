import React, {useState, useEffect} from "react";
import Contact from "../Contact";
import InteractiveResume from "../InteracticeResume";
import {useNavigate} from 'react-router-dom'

function Home({changePage}){
    const navigate = useNavigate()
    const [featuredProjects, setFeaturedProjects] = useState([
        {
             title: 'Breath of the Wild Cooking App',
             gif: 'TBD',
             description: 'A cooking mini-game simulating an online shop with a cart and checkout. Buy ingredients and cook them!',
             link: 'https://obscure-scrubland-39099.herokuapp.com/',
             frontend: 'https://github.com/dylantoporek/botw-recipe-app', 
             backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
             stage: 'Development',   
         }, 
         {
             title: 'Nintendo-Land',
             gif: 'TBD',
             description: 'A board game where you race to the finish against three computer opponents.',
             link: 'https://frozen-eyrie-81829.herokuapp.com/',
             frontend: 'https://github.com/dylantoporek/Nintendo-Land', 
             backend: 'https://github.com/dylantoporek/Board-Game-Backend',
             stage: 'Development',    
         }
    ])

    useEffect(()=>{
        changePage(window.location.href)
    }, [])

    const featuredProjectDisplay = featuredProjects.map((project)=>{
        return (
            <div id='home-featured-project-item' key={project.title}>
                <h4>{project.title}</h4>
                <div id='project-links-container'>
                    <a className="home-project-link" href={project.link}>Demo</a>
                    <p className="home-project-link">|</p>
                    <a className="home-project-link" href={project.frontend}>Frontend Repo</a>
                    <p className="home-project-link">|</p>
                    <a className="home-project-link" href={project.backend}>Backend Repo</a>
                </div>
                <div>
                    Stage: {project.stage}
                </div>
            </div>
        )
    })

    return (
        <div id='home-container'>
            

            <div id='home-intro'>
               <h4>Hi, my name is </h4>
               <h1>Dylan Toporek.</h1>
                <p>
                    I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                </p>    
            </div>

            <div id='home-about'>
                <h4>About me:</h4>
                <div id='home-about-container'>
                    <div id='home-page-img'>
                        Img placeholder
                    </div>
                    <div id='home-about-text'>
                        I was born and raised in New York City, on the upper west side of Manhattan. Later, I attended Umass Amherst, graduating with a Major in economics and a minor in philosophy. Before learning about software enginnering, I taught math to middle and high school students. I transitioned into this field as I always found developing software to be interesting, I never had the tools to actually turn that interest into a reality though, until now! During the pandemic, many people deciced that it could be a perfect time for a career change, me among them. Flatiron School's software engineering program suited my needs perfectly, and after 5 months of hard work, I feel ready to begin my journey as a developer. Some of my favortie things to do are playing games, enjoy the outdoors, and spend time with my dog Lily! My passion for games has inspiried many of my projects thus far, and has allowed me to learn a couple programming languages in a fun and creative way.
                    </div>
                </div>
                  
            </div>
            

            <div id='home-experience'>
                <InteractiveResume/>
            </div>

            <div id='home-projects'>
                <h4>Here are a few things I have made. To see more follow this link:</h4>
                <a className='home-link' onClick={()=> navigate('/portfolio')}>To Portfolio</a>
                <div id='home-featured-projects-container'>
                    {featuredProjectDisplay}
                </div>
                
            </div>

            <div id='home-blogs'>
                <p>As a tool to better learn to code, I chose to write a few blog posts about technical topics. If you want to read my blogs follow this link:</p>
                <a className='home-link' href='https://medium.com/@dylantoporek'>Medium</a>
            </div>

            <div id='home-contact-bar'>
                <Contact/>
            </div>
            
        </div>
      );
}

export default Home