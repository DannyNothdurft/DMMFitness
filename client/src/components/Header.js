import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Typed from "react-typed"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'


import Chat from './Chat'
export default function Header() {
   const [chat, setChat] = useState(false)

  const openChatCard = () => {
    setChat(!chat);
  }

    return (
        <div style={{height:'91.700vh', overflow:'hidden'}} className="header-wraper">
            
            <video style={{position:'sticky'}} src="/videos/home3.mp4" autoPlay loop muted /> 
        
            <h1 style={{position:'absolute', bottom:'400px'}}>Welcome in our Fitness World</h1>
            <Typed style={{position:'absolute', bottom:'350px'}}
                className="typed-text"
                strings={["D-Dedicate.", "M-Motivate.", "M-Make Your First Step!."]}
                typedSpeed={20}
                backSpeed={85}
                loop
            />
            {chat ? < Chat
          chat={chat}
          setChat={setChat}
        /> : undefined}
         <Link style={{position: 'absolute', bottom: '250px'}}to='/classes'> <button 
                className="btn-main-offer"
            >Start Today</button></Link>  
 <button className="chatIcon" onClick={openChatCard} style={{backgroundColor: 'transparent', border:'none'}} >
          <FontAwesomeIcon icon={faCommentDots} style={{color:'white',fontSize:'3.5rem'}} />
     <p className="chatText" style= {{color:'white'}}> Chat With Us</p>
        </button>
           
        </div>
    )
}
