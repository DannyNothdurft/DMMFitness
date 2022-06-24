import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../images/logo.png";

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
  const { loading, error, dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
   console.log(user)
   const navigate = useNavigate()
   const handleLogout = (e) => {
    e.preventDefault();
		localStorage.removeItem("user");
  
    dispatch({ type: "LOGOUT"});
      navigate("/")
	}
   
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container d-flex flex-row-reverse">

         
      {user ? (<><div className="signed" style={{color: 'orange',border :' solid orange'}}>Logged as <br/>{' '}{user.firstName}</div> <button onClick={handleLogout}>Log Out</button></>) : ( <button className="logIn" onClick={openRegisterCard} >
          <FontAwesomeIcon icon={faCircleUser} style={{ color: 'white', fontSize: '2rem' }} />
            Sign Up
        </button>)}

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
            <li className="nav-item active">
              <Link to='/shop' target='_blank'>Shop </Link>
            </li>
            <li className="nav-item active">
              <Link to='/locations'>Find Studio</Link>
            </li>

          </ul>
        </div> <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
         <div className="navbar-brand"><img className="logo" src={logo} alt="logo" /></div>
         </Link>
        
      </div>

    </nav>

  )
}
