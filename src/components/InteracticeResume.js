import React, {useState} from "react";

function InteractiveResume(){
    const [showExperienceDetails, setShowExperienceDetials] = useState('Expedience Software')
    const experienceDetails = [
        {
            company: 'Expedience Software',
            jobTitle: 'Contractor',
            details: [
                'detail 1',
                'detail 2',
                'detail 3',
            ],
            dates: '04/2022 - finish mm/year'
        },
        {
            company: 'Flatiron School Software Engineering Bootcamp',
            jobTitle: 'Student',
            details: [
                'Full Stack Web Development, Ruby on Rails and JavaScript programming',
                'Experience with React for frontend development and Ruby on Rails for backend development',
            ],
            dates: '09/2021 - 03/2022'
        },
        {
            company: 'Private Tutor / Home School Teacher',
            jobTitle: 'Tutor / Teacher',
            details: [
                'Offered academic support in various subjects',
                'Facilitated contact with school teachers and administration to ensure seamless schooling experience',
                'Ensured maintenance of school work in students unable to attend due to illness',
            ],
            dates: '09/2017 - Present'
        },
        {
            company: 'Mathnasium',
            jobTitle: 'Instructor',
            details: [
                'Math instructor at busy after school mathematics instruction company',
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
                'Assistant math teacher / permanent substitute for maternity leave teacher',
                'Assisted with four sections by crafting lessons, maintaining classroom order, and graded assignments',
            ],
            dates: '01/2017 - 06/2017'
        }, 
    ]

    function handleResumeClick(e){
        setShowExperienceDetials(e.target.value)
    }

    const workButtonsDisplay = experienceDetails.map((experience)=>{
        return <button className='work-button' value={experience.company} onClick={handleResumeClick}>{experience.company}</button>
    })

    const targetedExperience = experienceDetails.find((experience) => {
        return experience.company === showExperienceDetails
    })

    const workDetailsDisplay = <div id='work-details-container'>
        <h4 id='work-title'>{targetedExperience.jobTitle}</h4>
        {targetedExperience.details[0] ? <li className='work-details'>{targetedExperience.details[0]}</li> : null}
        {targetedExperience.details[1] ? <li className='work-details'>{targetedExperience.details[1]}</li> : null}
        {targetedExperience.details[2] ? <li className='work-details'>{targetedExperience.details[2]}</li> : null}
        <p id='work-dates'>{targetedExperience.dates}</p>
    </div>

    return (
        <div id='resume-container'>
                <h2>Experience:</h2>
                Check out my full resume here:
                <a className="home-link" href='https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing'>To Resume</a>
                
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