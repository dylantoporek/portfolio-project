import React, {useState, useEffect} from "react";
import Contact from "../Contact";
import InteractiveResume from "../InteracticeResume";
import {useNavigate} from 'react-router-dom'
import photo from '../../images/photo.jpeg'
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'
import pO from '../../images/promise_object.gif'
import Skills from '../Skills'

function Home({changePage}){
    const navigate = useNavigate()
    const [featuredProjects, setFeaturedProjects] = useState([
        {
             title: 'Breath of the Wild Cooking App',
             image: botw,
             description: 'A cooking mini-game simulating an online shop with a cart and checkout. Buy ingredients and cook them!',
             link: 'https://obscure-scrubland-39099.herokuapp.com/',
             frontend: 'https://github.com/dylantoporek/botw-recipe-app', 
             backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
             stage: 'Development',   
         }, 
         {
             title: 'Nintendo Land',
             image: nintendo,
             description: 'A board game where you race to the finish against three computer opponents.',
             link: 'https://frozen-eyrie-81829.herokuapp.com/',
             frontend: 'https://github.com/dylantoporek/Nintendo-Land', 
             backend: 'https://github.com/dylantoporek/Board-Game-Backend',
             stage: 'Development',    
         },
         {
            title: 'Enduracne Lactate Analyzer',
            image: lactate,
            description: 'A conceptual fitness app for althetes to track and measure their blood lactate levels while training.',
            link: 'https://serene-spire-65012.herokuapp.com/',
            frontend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-client', 
            backend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-API',
            stage: 'Development',  
        },
        {
            title: 'Pokemon Minigame App',
            image: poke,
            description: 'A collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
            link: 'https://tranquil-scrubland-82540.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/pokemon-mini-game-project', 
            backend: 'https://github.com/dylantoporek/pokemon-minigame-backend',
            stage: 'Development',  
        },
    ])

    const [featuredBlogs, setfestureedBlogs] = useState([
        {
            title: 'Using Promise Objects to Control Data Flow',
            image: pO,
            link: 'https://medium.com/@dylantoporek/using-promise-objects-to-control-data-flow-cc5ecdd0a42b',
        }
    ])

    useEffect(()=>{
        changePage(window.location.href)
    }, [])

    const featuredProjectDisplay = featuredProjects.map((project)=>{
        return (
            <div id='home-featured-project-item' key={project.title}>
                <h4 id='home-project-title'>{project.title}</h4>
                <img id='featured-projects-image' src={project.image}/>
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

    const featuedBlogDisplay = featuredBlogs.map((blog)=>{
        return (
            <div id='home-featured-blog-item' key={blog.title}>
                <h4>{blog.title}</h4>
                <img id='featued projects-image'/>
                <a className='home-project-link' href={blog.link}>click here to read</a>
            </div>
        )
    })

    return (
        <div id='home-container'>
            
            <div id='home-intro'>
                <div id='home-page-img'>
                    <img id='self-photo' src={photo}/>
                </div>
                <div id='intro-text'>
                    <h2>Hi, my name is Dylan Toporek</h2>
                    <p>
                     I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                    </p> 
                </div>   
            </div>

            <div id='home-about'>
                <h3 className='section-title'>About me</h3>
                <div id='home-about-container'>
                    
                    <div id='home-about-text'>
                        <p className='about-text-blurb'>
                            I was born and raised in the Upper West Side of New York City. For my undergraduate studies, I attended UMass Amherst and graduated with a major in economics and a minor in philosophy. After graduation, I taught math to middle and high school students for a while before transitioning to software engineering.
                        </p>
                        
                        <p className='about-text-blurb'>
                        My interest in software engineering has always been there. Only recently, however, have I been able to pursue that interest. Flatiron School's software engineering program gave me the foundation I needed to begin my journey as a developer. During the course, I found satisfaction in learning how to build webpages from scratch, systematically resolving errors in my code, and being able utilize all aspects of creativity to shape my personal projects. 
                        </p>
                    
                        <p className='about-text-blurb'>
                        Outside of work-related activities, my hobbies include playing games (which may be evident in my portfolio!), trying out new cooking recipes, hiking, and spending time with my dog, Lily.
                        </p>
                    </div>
                </div>
                  
            </div>
            
            <div id='home-experience'>
                <h3 className='section-title'>Experience</h3>
                <InteractiveResume/>
            </div>

            <div id='home-projects'>
                <h3 className='section-title'>Projects</h3>
                <div id='project-text-container'>
                
                    Here are a few things I have made. To see more, 
                    <p className='portfolio-home-link' 
                    onClick={()=> navigate('portfolio')}>
                        click here:
                    </p>
                
                </div>
                
                <div id='home-featured-projects-container'>
                    {featuredProjectDisplay}
                </div>
                
            </div>

            {/* <div id='home-skills'>
            <h3>Skills</h3>
                <Skills/>
            </div> */}


            

            {/* <div id='home-blogs'>
                <p>As a tool to better learn to code, I chose to write a few blog posts about technical topics. If you want to read my blogs, 
                <a className='home-link' href='https://medium.com/@dylantoporek'>click here:</a>
                </p>
            </div> */}

            <div id='home-contact-bar'>
                <Contact/>
            </div>
            
        </div>
      );
}

export default Home