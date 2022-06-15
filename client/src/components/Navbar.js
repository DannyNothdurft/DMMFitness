import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"

//Components
import Register from './Register'
// REACT FONTAWESOME IMPORTS 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

  const [register, setRegister] = useState(false)

  const openRegisterCard = () => {
    setRegister(!register);
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container d-flex flex-row-reverse">


        <button className="logIn" onClick={openRegisterCard} >
          <FontAwesomeIcon icon={faCircleUser} style={{ color: 'white', fontSize: '2rem' }} />
          Log In
        </button>

        {register ? < Register
          register={register}
          setRegister={setRegister}
        /> : undefined}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <li className="nav-item active">
              <Link to='/'>Home </Link>
            </li>
            <li className="nav-item">
              <Link to='/aboutus'>Who Are We? </Link>
            </li>
            <li className="nav-item">
              <Link to='/classes'>Classes </Link>
            </li>
            <li className="nav-item">
              <Link to='/pricing'>Pricing </Link>
            </li>
            <li className="nav-item active">
              <Link to='/shop' target='_blank'>Shop </Link>
            </li>
            <li className="nav-item active">
              <Link to='/findstudio'>Find Studio</Link>
            </li>

          </ul>
        </div>
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
      </div>

    </nav>

  )
}
