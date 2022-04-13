import React, {useState, useEffect} from "react";
import Contact from "../Contact";

function Home({changePage}){
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
            <div id='home-page-img'>
                Img placeholder
            </div>

            <div id='home-about'>
               Hi, my name is Dylan Toporek. I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails. For more information:
                <a className='home-link' href="/about">To About</a>
                
            </div>

            <div id='home-projects'>
                <p>Here are a few things I have made. To see more follow this link:</p>
                <a className='home-link' href="/portfolio">To Portfolio</a>
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