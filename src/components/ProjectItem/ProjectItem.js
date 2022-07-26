import React, {useState} from "react";
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'
import '../ProjectItem/index.scss'


function ProjectItem(){
    const [showProjectDetails, setShowProjectDetails] = useState('Breath of the Wild Cooking App')
    const [isShown, setIsShown] = useState('Breath of the Wild Cooking App');
    const [projects, setProjects] = useState([
       {
            title: 'Breath of the Wild Cooking App',
            image: botw,
            description: 'A cooking mini-game simulating an online shop with a cart and checkout. Buy ingredients and cook them!',
            goal: "The last project to make for the bootcamp was my capstone, an all encompassing app to show off all that I had learned. I wanted to make an e-commerce app, with a twist. I decided on this cooking app because it allowed me to merge e-commerce and gaming.",
            issue: 'After seeding my database with all of the potential recipe combinations allowed in the game, I quickly realized that certain dishes were not registering properly. The structure of the database was not matching the structure I had created in my front end application.',
            solution: 'After testing the reason for this, it was about the order in which it was checking the database for a match. By algorithmically reordering each combination from the front end before sending the request to check the database, I was able to get all the recipes to register properly.',
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
            goal: "This would be my first full stack application built during my bootcamp. I wanted to make an original(ish) board game. Something simple enough where the logic would be easy to code, but something visually engaging at the same time.",
            issue: 'A major issue I ran into while building this project was the way the pieces moved around the board. At first, they would teleport around, which was not pleasant to look at. I tried to achieve a ‘life-like’ kind of movement to the piece, similar to someone picking up their piece and tapping it on each space of the board as they move.',
            solution: 'Using promise objects, and smooth transitions, I was able to make the pieces move in a much more pleasant way for users when playing the game.',
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
            goal: "This project was my first opportunity to work in a group during my bootcamp. As a group, we competed in the Flatiron sport innovation hack-a-thon. Our team consisted of three engineers, one data scientist, and one designer. We had one goal, to win!",
            issue: 'This project came together extremely smoothly given it was our first time working in a group. One issue we did have was finding the time to meet to discuss how to move forward solving certain layout issues, or small bugs.',
            solution: 'We each took the initiative to make sure each component we built was as close to the design mockup as possible to avoid any variations from component to component. We also made sure to test each feature thoroughly before deployment.',
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
            goal: "I began this project with the hopes of refining my newly acquired knowledge of Javascript and React. In addition, I wanted to bring some life to the games with animations.",
            issue: 'While creating the track minigame, I wanted to utilize a number indicating the speed of each pokemon to influence the animation speed which moved them across the screen. This was inhibiting the user experience while playing this minigame.',
            solution: 'Using a callback function within the animation itself, I was able to utilize any stat on a given pokemon that would directly change the duration of the animation. Fast pokemon now darted across the track, while slower ones took much longer to reach the finish.',
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
        let details = document.getElementById('project-details-item')
        details.className = 'animate__animated animate__fadeOut animate__fast'

        let animationDirectionCheck = (wasSelected.value - e.target.value)
        
        setTimeout(()=>{
         setShowProjectDetails(e.target.innerText)
         let newDetails = document.getElementById('project-details-item')
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

    const projectDisplay = <div id='project-details-item' key={targetedProject.title}>
        <div id='wriiten-info'>
        <h3>{targetedProject.title}</h3>
                <div id='more-info'>
                    <p>{targetedProject.description}</p>
                    <p>Goal: {targetedProject.goal}</p>
                    <p>Issue: {targetedProject.issue}</p>
                    <p>Solution: {targetedProject.solution}</p>
                </div>
        </div>
        <div id='other-info'>
                <div id='project-image-container'>
                    <img className='project-image' src={targetedProject.image}/>
                </div>
                
                <div id='project-links-container'>
                    <a className="project-link" href={targetedProject.link}>Demo</a>
                    <p>|</p>
                    <a className="project-link" href={targetedProject.frontend}>Frontend Repo</a>
                    <p>|</p>
                    <a className="project-link" href={targetedProject.backend}>Backend Repo</a>
                </div>
                <div className="stage">
                    Stage: {targetedProject.stage}
                </div> 
            </div> 
    </div>

const animatedDisplay =
<div id='button-nav-animated'
    style={{
    position: 'absolute',
    left: '0px',
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
        showProjectDetails === 'Breath of the Wild Cooking App' ? -83 : null ||
        showProjectDetails === 'Nintendo-Land' ? -18 : null ||
        showProjectDetails === 'Endurance Lactate Analyzer' ? 47 : null ||
        showProjectDetails === 'Pokemon Minigame App' ? 112 : null
    }}></div>              
</div>

    return (
        <div id='portfolio-container'>
            <h3 className='section-title' id='project-title'>Projects</h3>
            
            <div id='projects-container'>
                {animatedDisplay}
                <div id='project-buttons'>
                    {projectButtonDisplay}
                </div>
            
                <div id='project-details'>
                    {projectDisplay}
                </div>
            </div>
        </div>
    );
}

export default ProjectItem