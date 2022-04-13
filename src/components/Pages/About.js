import React, {useEffect} from "react";
import Contact from "../Contact";

function About({changePage}){

    useEffect(()=>{
        changePage(window.location.href)
    }, [])
    return (
        <div id='about-container'>
            <div id='about-me'>
              I was born and raised in New York City, in Manhattan. Attended Umass Amherst, graduating with a Major in economics and a minor in philosophy. 
            </div>

            <div id='about-work'>
            Before learning about software enginnering, I taught math to middle and high school students. I transitioned into this field as I always found developing software to be interesting, I never had the tools to actually turn that interest into a reality though, until now! During the pandemic, many people deciced that it could be a perfect time for a career change, me among them. Flatiron School's software engineering program suited my needs perfectly, and after 5 months of hard work, I feel ready to begin my journey as a developer. 
            </div>

            <div id='about-hobbies'>
              Some of my favortie things to do are playing games, enjoy the outdoors, and spend time with my dog Lily! Some of my all-time favorites games are Chess, Halo, Settlers of Catan, Red Dead Redemption, The Elder Scrolls series, and The Legend of Zelda Series!
            </div>

          
            <div id='contact-bar'>
                <Contact/>
            </div>
        </div>


      );
}

export default About