import React, {useState} from "react";

function InteractiveResume(){
    const [showExperienceDetails, setShowExperienceDetials] = useState('Expedience')
    const experienceDetails = [
        {
            company: 'Expedience',
            jobTitle: 'Contractor',
            details: [
                'detail 1',
                'detail 2',
                'detail 3',
            ],
            dates: 'start mm/year - finish mm/year'
        },
        {
            company: 'Flatiron School Software Engineering Bootcamp',
            jobTitle: 'Student',
            details: [
                'detail 1',
                'detail 2',
                'detail 3',
            ],
            dates: 'start mm/year - finish mm/year'
        },
        {
            company: 'Private Tutor / Home School Teacher',
            jobTitle: 'Tutor / Teacher',
            details: [
                'detail 1',
                'detail 2',
                'detail 3',
            ],
            dates: 'start mm/year - finish mm/year'
        },
        {
            company: 'Mathnasiun',
            jobTitle: 'Instructor',
            details: [
                'detail 1',
                'detail 2',
                'detail 3',
            ],
            dates: 'start mm/year - finish mm/year'
        },
        {
            company: 'The Collegiate School',
            jobTitle: 'Teacher',
            details: [
                'detail 1',
                'detail 2',
                'detail 3',
            ],
            dates: 'start mm/year - finish mm/year'
        },
        {
            company: 'The Birch Wathen Lenox School',
            jobTitle: 'Contractor',
            details: [
                'detail 1',
                'detail 2',
                'detail 3',
            ],
            dates: 'start mm/year - finish mm/year'
        }, 
    ]

    function handleResumeClick(e){
        setShowExperienceDetials(e.target.value)
        console.log(showExperienceDetails)
    }
    
    return (
        <div id='resume-container'>
                <h4>Experience:</h4>
                
                <div id='work-container'>
                <div id='home-experience-container'>
                    <button value='Expedience' onClick={handleResumeClick}>Contractor at Expedience Software</button>
                    <button value='Flatiron' onClick={handleResumeClick}>Flatiron School Software Engineering Bootcamp</button>
                    <button value='Teacher' onClick={handleResumeClick}>Math Teacher</button>
                </div>

                <div id='work-details'>
                    {showExperienceDetails }
                </div> 

                </div>
                

                
                Check out my full resume here:
                <a href=''>To Resume</a>
            </div>
    )
}

export default InteractiveResume