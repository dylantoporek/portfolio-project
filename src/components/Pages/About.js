import React, {useEffect} from "react";


function About({changePage}){

    useEffect(()=>{
        changePage(window.location.href)
    }, [])
    return (
        
      <div>
        Hi From About
      </div>

      );
}

export default About