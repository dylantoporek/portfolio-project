import React, {useEffect} from "react";
import resume from '../../resume/Resume.pdf'

function About({changePage}){

    useEffect(()=>{
        changePage(window.location.href)
    }, [])
    return (
        
      <div>
        <img src={resume}/>
      </div>

      );
}

export default About