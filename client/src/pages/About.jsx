import React, { useState } from 'react'
import Typed from "react-typed"
import '../styles/About.css'



export default function About() {
   const [darkMode, setDarkMode] = useState(false);

    return (
        <div style={{height: '100vh'}}className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
      <h1 style={{ color: darkMode ? "orange" : "#272727" }}> DMM.Fitness </h1>
        <Typed className="typed-text"
                style={{color: darkMode ? "#DCDCDC" : "#2F4F4F"}}
                strings={["D-Dedicate.", "M-Motivate.", "M-Make Your First Step!."]}
                typedSpeed={20}
                backSpeed={85}
                loop
            />
            <p> 
        DMM is a boutique fitness studios all around Europe, that offers group fitness classes in Sixty, our original concept HIIT class, Cycle and Yoga. In addition to group classes, we have an always open "Sweat Lab" that allows you to conduct individual training, on your own, or with a personal training. DMM is NOT your average gym.

        DMM  was born from a desire to be THE BEST PROJECT-SITE EVER for our Final Project. DMM is owned and operated from a small team of passionate individuals Danny, Marija and Magdelena. Regardless of  your age or physical fitness level, DMM is an all-inclusive group  fitness studio that offers a variety of group and individual level  programming to meet your needs.

        Everything at DMM is month to month, and we don't use contracts.  Our approach ensures we continue to deliver a high-quality experience  for you day after day. We want you to enjoy DMM as much as we enjoy  having you in our studio.​ </p>
      </div>
    </div>
    )
}
