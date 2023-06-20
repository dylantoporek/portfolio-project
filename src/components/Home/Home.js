import React, {useState, useEffect} from "react";
import InteractiveResume from "../InteractiveResume/InteracticeResume";
import {useNavigate} from 'react-router-dom'
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'
import pO from '../../images/promise_object.gif'
import Skills from '../../components/Skills/Skills'
import '../Home/index.scss'
import Landing from '../Landing/Landing'
import About from "../About/About";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Flex, Stack, Heading } from "@chakra-ui/react";


function Home({}){
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
            title: 'Endurance Lactate Analyzer',
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

    // useEffect(()=>{
    //     changePage(window.location.href)
    // }, [])

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

    // #home-container{
    //     position: relative;
    //     display: flex;
    //     flex-direction: column;
    //     width: fit-content;
    //     height: fit-content;
    //     top: 0%;
    //     background-color: #FFF9FB;
    // }

    return (

        <Stack 
            id='home-container'
            position={'relative'}
            flexDirection={'column'}
            width={'fit-content'}
            height={'fit-content'}
            top={'0%'}
            backgroundColor={'#FFF9FB'}>
            
            <Landing/>
            <About/>
            <InteractiveResume/>
            <ProjectItem />

            
            {/* <div id='home-skills'>
            <h3>Skills</h3>
                <Skills/>
            </div> */}
            
        </Stack>
      );
}

export default Home