import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import '../styles/register.scss';


// images
import Logo from '../images/logo.png';

// REACT FONTAWESOME IMPORTS 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Register({ register, setRegister }) {

    const closeRegisterCard = () => {
        setRegister(!register);
    }

    const navigate = useNavigate();
 
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState("");
    
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
  


    const handleSubmit = async (e) => {
		e.preventDefault();
      
   
        
		try {
			const url = "http://localhost:4000/api/auth/register";
			const { data: res } = await axios.post(url, data);
			console.log(data);
            closeRegisterCard();
            alert("You are successfuly register! Log In");
			navigate("/login");
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    
    
	};
   
 
    
    return (

        <div style={{zIndex:'1000'}} className='overlay'>
            <div className='register-card' style={{backgroundColor:'grey'}}>
                <button onClick={closeRegisterCard} className='close-button'>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <img className='logo' src={Logo} alt="DMM-Fitness" />

                <form onSubmit={handleSubmit}>
                    <input
                        required
                        type="text"
                        placeholder='First Name'
                        name='firstName'
                        onChange={handleChange}
                        value={data.firstName}
                    />
                    <input
                        required
                        type="text"
                        placeholder='Last Name'
                        value={data.lastName}
                        name='lastName'
                        onChange={handleChange}
                    />
                    <input

                        type="tel"
                        placeholder='Mobile Number'
                        name='phone'
                        value={data.phone}
                        onChange={handleChange}
                    />
                    <input
                         required
                        type="text"
                        placeholder='E-Mail'
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="password"
                        placeholder='Password'
                        value={data.password}
                        name='password'
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="password"
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={handleChange}
                    />
                    {error && <div>{error}</div>}
                    <button className='submit-button' type='submit'>Create User</button>
                    <span>already have an account ? <Link style={{fontSize: '1.4rem', marginLeft:'8px'}} onClick={closeRegisterCard} to="/login">Login</Link> </span>
                </form>
            </div>
           
        </div>
    )
}

export default Register