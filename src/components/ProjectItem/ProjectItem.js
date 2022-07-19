import React, {useState} from "react";
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'


function ProjectItem(){
    const [showProjectDetails, setShowProjectDetails] = useState('Breath of the Wild Cooking App')
    const [isShown, setIsShown] = useState('Breath of the Wild Cooking App');
    const [projects, setProjects] = useState([
       {
            title: 'Breath of the Wild Cooking App',
            image: botw,
            description: 'A cooking mini-game simulating an online shop with a cart and checkout. Buy ingredients and cook them!',
            link: 'https://obscure-scrubland-39099.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/botw-recipe-app', 
            backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
            stage: 'Development',
            num: 1,   
        }, 
        {
            title: 'Nintendo-Land',
            image: nintendo,
            description: 'A board game where you race to the finish against three computer opponents.',
            link: 'https://frozen-eyrie-81829.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/Nintendo-Land', 
            backend: 'https://github.com/dylantoporek/Board-Game-Backend',
            stage: 'Development',
            num: 2,    
        },
        {
            title: 'Endurance Lactate Analyzer',
            image: lactate,
            description: 'A conceptual fitness app for althetes to track and measure their blood lactate levels while training.',
            link: 'https://serene-spire-65012.herokuapp.com/',
            frontend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-client', 
            backend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-API',
            stage: 'Development',
            num: 3,
        },
        {
            title: 'Pokemon Minigame App',
            image: poke,
            description: 'A collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
            link: 'https://tranquil-scrubland-82540.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/pokemon-mini-game-project', 
            backend: 'https://github.com/dylantoporek/pokemon-minigame-backend',
            stage: 'Development',
            num: 4,
        },
        
    ])

    function handleProjectClick(e){
        if (showProjectDetails !== e.target.innerText){
        let wasSelected = document.getElementById(`${showProjectDetails}`)
        wasSelected.style.backgroundColor = 'aliceblue'
        wasSelected.style.color = 'black'
        e.target.style.backgroundColor = '#4B88A2'
        e.target.style.color = 'white'
        let details = document.getElementById('project-details-container')
        details.className = 'animate__animated animate__fadeOut animate__fast'

        let animationDirectionCheck = (wasSelected.value - e.target.value)
        
        setTimeout(()=>{
         setShowProjectDetails(e.target.innerText)
         let newDetails = document.getElementById('project-details-container')
         if (animationDirectionCheck < 0){
             newDetails.className = 'animate__animated animate__bounceInUp'
         } else {
             newDetails.className = 'animate__animated animate__bounceInDown'
         }
        }, 350)
        
     } else {
        return null
     }
    }

    function handleProjectHover(e){
        setIsShown(e.target.value)
        if(showProjectDetails === e.target.innerText){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = 'lightblue'
        }
    }

    function handleProjectLeave(e){
        if(showProjectDetails === e.target.innerText){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = '#FFF9FB'
        }
    }
    const targetedProject = projects.find((project) => {
        return project.title === showProjectDetails
    })

    const projectButtonDisplay = projects.map((project)=>{
        return <button 
            className='project-button'
            key={project.title}
            id={project.title} 
            value={project.num}
            onClick={handleProjectClick}
            onMouseEnter={handleProjectHover}
            onMouseLeave={handleProjectLeave}
            style={{
                backgroundColor: showProjectDetails === project.title ? '#4B88A2' : '#FFF9FB',
                color: showProjectDetails === project.title ? 'white' : 'black', 
            }}>
                {project.title}
            </button> 
    })

    const projectDisplay = <div id='project-details-container'>
            <div id='project-details-item' key={targetedProject.title}>
                <h3>{targetedProject.title}</h3>
                <p>{targetedProject.description}</p>
                <div id='project-links-container'>
                    <a className="project-link" href={targetedProject.link}>Demo</a>
                    <p>|</p>
                    <a className="project-link" href={targetedProject.frontend}>Frontend Repo</a>
                    <p>|</p>
                    <a className="project-link" href={targetedProject.backend}>Backend Repo</a>
                </div>
                <div>
                    Stage: {targetedProject.stage}
                </div>  
            </div>
            <div id='project-image-container'>
            <img className='project-image' src={targetedProject.image}/>
            </div>
            
        </div>

const animatedDisplay =
<div id='button-nav-animated'
    style={{
    position: 'absolute',
    left: '-107px',
    width: '5px',
    height: '70%',
    borderRadius: '10px',
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",   
}}> 
    <div className="scroll-section" style={{
        backgroundColor:'#061A40',
        top: 
        showProjectDetails === 'Breath of the Wild Cooking App' ? -55 : null ||
        showProjectDetails === 'Nintendo-Land' ? 12 : null ||
        showProjectDetails === 'Endurance Lactate Analyzer' ? 78 : null ||
        showProjectDetails === 'Pokemon Minigame App' ? 142 : null
    }}></div>              
</div>

    return (
    <div id='projects-container'>
        {animatedDisplay}
        <div id='project-buttons'>
            {projectButtonDisplay}
         </div>
            
        <div id='project-details'>
          {projectDisplay}
        </div>
    </div>
      );
}

export default ProjectItem