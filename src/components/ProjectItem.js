import React, {useState} from "react";
import botw from '../images/botw.png'
import nintendo from '../images/nintendo.png'
import lactate from '../images/lactate_1.png'
import poke from '../images/poke.png'


function ProjectItem(){
    const [projects, setProjects] = useState([
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
            title: 'Nintendo-Land',
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

    const projectDisplay = projects.map((project)=>{
        return (
            <div className="project-item" key={project.title}>
                <h3>{project.title}</h3>
                <img className='project-image' src={project.image}/>
                <p>{project.description}</p>
                <div id='project-links-container'>
                    <a className="project-link" href={project.link}>Demo</a>
                    <p>|</p>
                    <a className="project-link" href={project.frontend}>Frontend Repo</a>
                    <p>|</p>
                    <a className="project-link" href={project.backend}>Backend Repo</a>
                </div>
                <div>
                    Stage: {project.stage}
                </div>
            </div>
        )
    })

    return (
        <div id='projects-container'>
          {projectDisplay}
        </div>
      );
}

export default ProjectItem