import React, {useState} from "react";
import 'animate.css'
import './index.scss'

function InteractiveResume(){
    const [showExperienceDetails, setShowExperienceDetails] = useState('Expedience Software')
    const [isShown, setIsShown] = useState('Expedience Software');
    const experienceDetails = [
        {
            company: 'Expedience Software',
            jobTitle: 'Contractor',
            details: [
                'Assisted with updating RFP Inspection software',
                'React based development within Microsoft Office Addins',
                'Created custom explorations and reports with Google Analytics',
            ],
            dates: '04/2022 -  07/2022',
            num: 1,
        },
        {
            company: 'Flatiron School Software Engineering Bootcamp',
            jobTitle: 'Student',
            details: [
                'Full-Stack web application development, created with React and Ruby on Rails',
                "Studied Object-oriented programming, REST API's, and PostgreSQL databases",
                'Utilized Heroku and Netlify to deploy and test projects'
            ],
            dates: '09/2021 - 03/2022',
            num: 2,
        },
        {
            company: 'Private Tutor & Home School Teacher',
            jobTitle: 'Tutor / Teacher',
            details: [
                'Offered academic support in various subjects',
                'Facilitated contact with school teachers and administration to ensure seamless schooling experience',
            ],
            dates: '09/2017 - Present',
            num: 3,
        },
        {
            company: 'Mathnasium',
            jobTitle: 'Instructor',
            details: [
                'Math instructor at after school mathematics instruction company',
                'Responsible for teaching a range of subjects, from addition to trigonometry',
                'Offer mentorship and motivation to students from a wide range of backgrounds',
            ],
            dates: '09/2016 - Present',
            num: 4,
        },
        {
            company: 'The Collegiate School',
            jobTitle: 'Part-Time Teacher',
            details: [
                'Math teacher of two 7th grade classes',
                'Prepared all course work, classroom activities, and assessments',
            ],
            dates: '01/2020 - 06/2020',
            num: 5,
        },
        {
            company: 'The Birch Wathen Lenox School',
            jobTitle: 'Assistant Teacher',
            details: [
                'Assistant math teacher / permanent substitute',
                'Assisted with four sections by crafting lessons, maintaining classroom order, and grading assignments',
            ],
            dates: '01/2017 - 06/2017',
            num: 6,
        }, 
    ]

    function handleResumeClick(e){
        if (showExperienceDetails !== e.target.innerText){
           let wasSelected = document.getElementById(`${showExperienceDetails}`)
           wasSelected.style.backgroundColor = 'aliceblue'
           wasSelected.style.color = 'black'
           e.target.style.backgroundColor = '#4B88A2'
           e.target.style.color = 'white'
           let details = document.getElementById('work-details-container')
           details.className = 'animate__animated animate__fadeOut animate__fast'

           let animationDirectionCheck = (wasSelected.value - e.target.value)
           
           setTimeout(()=>{
            setShowExperienceDetails(e.target.innerText)
            let newDetails = document.getElementById('work-details-container')
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

    function handleResumeHover(e){
        setIsShown(e.target.value)
        if(showExperienceDetails === e.target.innerText){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = 'lightblue'
        }
        

    }

    function handleResumeLeave(e){
        if(showExperienceDetails === e.target.innerText){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = '#FFF9FB'
        }
    }

   
    

    const workButtonsDisplay = experienceDetails.map((experience)=>{ 
            return <button 
            className='work-button'
            key={experience.company}
            id={experience.company} 
            value={experience.num}
            onClick={handleResumeClick}
            onMouseEnter={handleResumeHover}
            onMouseLeave={handleResumeLeave}
            style={{
                backgroundColor: showExperienceDetails === experience.company ? '#4B88A2' : '#FFF9FB',
                color: showExperienceDetails === experience.company ? 'white' : 'black',
            }}>
                {experience.company}
            </button>   
    })



    const targetedExperience = experienceDetails.find((experience) => {
        return experience.company === showExperienceDetails
    })

    const workDetailsDisplay = <div id='work-details-container'>
        <h3 id='work-title'>{targetedExperience.jobTitle} @ {targetedExperience.company}</h3>
        <p id='work-dates'>{targetedExperience.dates}</p>
        {targetedExperience.details[0] ? <li className='work-details'>{targetedExperience.details[0]}</li> : null}
        {targetedExperience.details[1] ? <li className='work-details'>{targetedExperience.details[1]}</li> : null}
        {targetedExperience.details[2] ? <li className='work-details'>{targetedExperience.details[2]}</li> : null} 
    </div>

// className="animate__animated animate__fadeOutUp"
    const animatedDisplay =
    <div id='button-nav-animated'
        style={{
        position: 'absolute',
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
            showExperienceDetails === 'Expedience Software' ? -4 : null ||
            showExperienceDetails === 'Flatiron School Software Engineering Bootcamp' ? 61 : null ||
            showExperienceDetails === 'Private Tutor & Home School Teacher' ? 126 : null ||
            showExperienceDetails === 'Mathnasium' ? 191 : null ||
            showExperienceDetails === 'The Collegiate School' ? 256 : null ||
            showExperienceDetails === 'The Birch Wathen Lenox School' ? 321 : null
        }}></div>              
    </div>

    return (
        <div id='resume-container'>
            <h3 className='section-title' id='experience-title'>Experience</h3>
            <div id='work-container'>
                {animatedDisplay}
                        
                <div id='home-experience-buttons-container'>
                    {workButtonsDisplay}
                </div>

                <div id='work-details'>
                    {workDetailsDisplay}
                </div> 

            </div>
                     
            </div>
    )
}

export default InteractiveResume