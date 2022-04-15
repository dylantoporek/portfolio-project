import React, {useState} from "react";

function InteractiveResume(){
    const [showExperienceDetails, setShowExperienceDetials] = useState('expedience')

    function handleResumeClick(e){
        setShowExperienceDetials(e.target.value)
        console.log(showExperienceDetails)
    }
    return (
        <div id='resume-container'>
                <h4>Experience:</h4>
                
                <div id='work-container'>
                <div id='home-experience-container'>
                    <button value='expedience' onClick={handleResumeClick}>Contractor at Expedience Software</button>
                    <button value='flatiron' onClick={handleResumeClick}>Flatiron School Software Engineering Bootcamp</button>
                    <button value='teacher' onClick={handleResumeClick}>Math Teacher</button>
                </div>

                <div id='work-details'>
                    {showExperienceDetails}
                </div> 

                </div>
                

                
                Check out my full resume here:
                <a href=''>To Resume</a>
            </div>
    )
}

export default InteractiveResume