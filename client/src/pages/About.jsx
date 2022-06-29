import React, { useState } from 'react'
import Typed from "react-typed"
import '../styles/About.css'
import GlassCard from "../components/GlassCard.js"
import GlassCardMarija from "../components/GlassCardMarija.js"
import GlassCardDanny from "../components/GlassCardDanny.js"
import Mail from "../components/mailList/MailList"
import Footer from "../components/footer/Footer"
export default function About() {
   const [darkMode, setDarkMode] = useState(false);

    return (
        <div style={{height:'91.600vh'}} className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow", fontSize:'40px' }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey", fontSize:'40px' }}>☽</span>
      </div >
      <div>
      <h1 className='aboutTitle' style={{ color: darkMode ? "orange" : "#272727" }}> DMM.Fitness </h1>
        <Typed className="typ-text"
                style={{color: darkMode ? "#DCDCDC" : "#2F4F4F"}}
                strings={["D-Dedicate.", "M-Motivate.", "M-Make Your First Step!."]}
                typedSpeed={20}
                backSpeed={85}
                loop
            />
            <div className="content"> 
        <span className="log-about"> DMM.Fitness   </span> is a boutique fitness studios all around Europe, that offers group fitness classes in Sixty, our original concept HIIT class, Cycle and Yoga. <br/> In addition to group classes, we have an always open "Sweat Lab" that allows you to conduct individual training, on your own, or with a personal training. <br/> <span className="log-about">DMM.Fitness </span>is NOT your average gym. <br/>

        <span className="log-about"> DMM.Fitness </span> was born from a desire to be THE BEST PROJECT-SITE EVER for our Final Project. <br/> <span className="log-about">DMM.Fitness </span> is owned and operated from a small team of passionate individuals Danny, Marija and Magdelena. <br/> Regardless of  your age or physical fitness level, DMM is an all-inclusive group  fitness studio that offers a variety of group and individual level  programming to meet your needs.<br/>

        Everything at <span className="log-about"> DMM.Fitness </span> is month to month, and we don't use contracts.<br/>  Our approach ensures we continue to deliver a high-quality experience  for you day after day.<br/> We want you to enjoy <span className="log-about">DMM.Fitness </span> as much as we enjoy  having you in our studio.​ </div>
       <div className="glassCard" style={{color: darkMode ? "#DCDCDC" : "black"}}>
        <video className="video-card" src="../videos/smoke.mp4" autoPlay loop muted />
        <GlassCardDanny className={darkMode ? "dark-mode" : "light-mode"}/>
         <GlassCard/>
          <GlassCardMarija/>
         
         
         

          </div>
      
      </div>
     
    </div>
    )
}
