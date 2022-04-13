import React, {useState} from "react";

function ProjectItem(){
    const [projects, setProjects] = useState([
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
        },
        {
            title: 'Pokelympics',
            gif: 'TBD',
            description: 'A collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
            link: 'TBD',
            frontend: 'TBD', 
            backend: 'TBD',
            stage: 'Development',  
        },
        {
            title: 'Enduracne Lactate Analyzer',
            gif: 'TBD',
            description: 'A conceptual fitness app for althetes to track and measure their blood lactate levels while training.',
            link: 'TBD',
            frontend: 'TBD', 
            backend: 'TBD',
            stage: 'Development',  
        }
    ])

    const projectDisplay = projects.map((project)=>{
        return (
            <div className="project-item" key={project.title}>
                <h3>{project.title}</h3>
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