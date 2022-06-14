import React, { useState } from 'react'
import Typed from "react-typed"

// Components
import Register from './Register'

export default function Header() {
    const [register, setRegister] = useState(false)

    const openRegisterCard = () => {
        setRegister(!register);
    }

    return (
        <div className="header-wraper">
            <video src="/videos/home3.mp4" autoPlay loop muted />
            <h1>Welcome in our Fitness World</h1>
            <Typed
                className="typed-text"
                strings={["Dedicate.", "Motivate.", "Make Your First Step!."]}
                typedSpeed={20}
                backSpeed={80}
                loop
            />
            <button
                className="btn-main-offer"
                onClick={openRegisterCard}
            >Register</button>

            {register ? <Register /> : undefined}
        </div>
    )
}
