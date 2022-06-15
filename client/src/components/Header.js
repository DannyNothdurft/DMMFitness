import React from 'react'
import Typed from "react-typed"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
   
    return (
        <div className="header-wraper">
            
            <video src="/videos/home3.mp4" autoPlay loop muted /> 
        
            <h1>Welcome in our Fitness World</h1>
            <Typed
                className="typed-text"
                strings={["D-Dedicate.", "M-Motivate.", "M-Make Your First Step!."]}
                typedSpeed={20}
                backSpeed={85}
                loop
            />
            <button
                className="btn-main-offer"
            >Start Today</button>
 <button className="chatIcon" style={{backgroundColor: 'transparent', border:'none'}} >
          <FontAwesomeIcon icon={faCommentDots} style={{color:'white',fontSize:'3.5rem'}} />
     <p className="chatText" style= {{color:'white'}}> Chat With Us</p>
        </button>
           
        </div>
    )
}
