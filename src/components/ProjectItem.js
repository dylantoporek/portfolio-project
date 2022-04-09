import React, {useState} from "react";

function ProjectItem(){
    const [projects, setProjects] = useState([
       {
            title: 'Breath of the Wild Cooking App',
            gif: 'some gif',
            description: 'A cooking mini-game simulating an online shop with a cart and checkout. Buy ingredients and cook them!',
            link: 'https://obscure-scrubland-39099.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/botw-recipe-app', 
            backend: 'https://github.com/dylantoporek/botw-recipe-app-backend'   
        }, 
        {
            title: 'Nintendo-Land',
            gif: 'some gif',
            description: 'A board game where you race to the finish against three computer opponents.',
            link: 'https://frozen-eyrie-81829.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/Nintendo-Land', 
            backend: 'https://github.com/dylantoporek/Board-Game-Backend'    
        } 
    ])

    const projectDisplay = projects.map((project)=>{
        return (
            <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                    <a href={project.link}>Demo</a>
                    <a href={project.frontend}>Frontend Repo</a>
                    <a href={project.backend}>Backend Repo</a>
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