import React, {useState} from "react";
import { $CombinedState } from "redux";

function InteractiveResume(){
    const [showExperienceDetails, setShowExperienceDetials] = useState('Expedience Software')
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
            dates: '04/2022 -  Present'
        },
        {
            company: 'Flatiron School Software Engineering Bootcamp',
            jobTitle: 'Student',
            details: [
                'Full-Stack web application development, created with React and Ruby on Rails',
                "Studied Object-Oreinted-Programming, REST API's, and PostgreSQL databases",
                'Utilized Heroku and Netlify to deploy and test projects'
            ],
            dates: '09/2021 - 03/2022'
        },
        {
            company: 'Private Tutor / Home School Teacher',
            jobTitle: 'Tutor / Teacher',
            details: [
                'Offered academic support in various subjects',
                'Facilitated contact with school teachers and administration to ensure seamless schooling experience',
            ],
            dates: '09/2017 - Present'
        },
        {
            company: 'Mathnasium',
            jobTitle: 'Instructor',
            details: [
                'Math instructor at after school mathematics instruction company',
                'Responsible for teaching a range of subjects, from addition to trigonometry',
                'Offer mentorship and motivation to students from a wide range of backgrounds',
            ],
            dates: '09/2016 - Present'
        },
        {
            company: 'The Collegiate School',
            jobTitle: 'Part-Time Teacher',
            details: [
                'Math teacher of two 7th grade classes',
                'Prepared all course work, classroom activities, and assessments',
            ],
            dates: '01/2020 - 06/2020'
        },
        {
            company: 'The Birch Wathen Lenox School',
            jobTitle: 'Assistant Teacher',
            details: [
                'Assistant math teacher / permanent substitute',
                'Assisted with four sections by crafting lessons, maintaining classroom order, and grading assignments',
            ],
            dates: '01/2017 - 06/2017'
        }, 
    ]

    function handleResumeClick(e){
        if (showExperienceDetails !== e.target.value){
           let wasSelected = document.getElementById(`${showExperienceDetails}`)
           wasSelected.style.backgroundColor = 'aliceblue'
           e.target.style.backgroundColor = 'lightgreen'
           setShowExperienceDetials(e.target.value)
        } else {
           return null
        }
    }

    function handleResumeHover(e){
        setIsShown(e.target.value)
        if(showExperienceDetails === e.target.value){
            e.target.style.backgroundColor = 'lightgreen'
        }
        else {
            e.target.style.backgroundColor = 'lightblue'
        }
        

    }

    function handleResumeLeave(e){
        if(showExperienceDetails === e.target.value){
            e.target.style.backgroundColor = 'lightgreen'
        }
        else {
            e.target.style.backgroundColor = 'aliceblue'
        }
    }

   
    

    const workButtonsDisplay = experienceDetails.map((experience)=>{ 
            return <button 
            className='work-button'
            key={experience.company}
            id={experience.company} 
            value={experience.company}
            onClick={handleResumeClick}
            onMouseEnter={handleResumeHover}
            onMouseLeave={handleResumeLeave}
            style={{backgroundColor: showExperienceDetails === experience.company ? 'lightgreen' : 'aliceblue' 
            }}>
                {experience.company}
            </button>   
    })



    const targetedExperience = experienceDetails.find((experience) => {
        return experience.company === showExperienceDetails
    })

    const workDetailsDisplay = <div id='work-details-container'>
        <h3 id='work-title'>{targetedExperience.jobTitle}</h3>
        {targetedExperience.details[0] ? <li className='work-details'>{targetedExperience.details[0]}</li> : null}
        {targetedExperience.details[1] ? <li className='work-details'>{targetedExperience.details[1]}</li> : null}
        {targetedExperience.details[2] ? <li className='work-details'>{targetedExperience.details[2]}</li> : null}
        <p id='work-dates'>{targetedExperience.dates}</p>
    </div>

    return (
        <div id='resume-container'>
                <h3>Experience:</h3>
                <p>
                    To check out my full resume, <a className="home-link" href='https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing'>click here:</a>
                </p>
                
                
                
                <div id='work-container'>
                <div id='home-experience-container'>
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