import React from 'react'
import Typed from "react-typed"

export default function Header() {
    return (
        <div className="header-wraper">
            <video src="/videos/home3.mp4" autoPlay loop muted/>
                <h1>Welcome in our Fitness World</h1>
                <Typed 
                className="typed-text"
                strings={["Dedicate.", "Motivate.", "Make Your First Step!."]}
                typedSpeed={20}
                backSpeed={80}
                loop
                />
                <a href="" className="btn-main-offer"> Register</a>
         
        </div>
    )
}
