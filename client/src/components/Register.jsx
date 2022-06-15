import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import '../styles/register.scss';
import { registerRoute } from "../utils/APIRoutes";

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
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const handleValidation = () => {
        const { password, confirmPassword, firstname, lastname, email } = values;
        if (password !== confirmPassword) {
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false;
        } else if (firstname.length < 3 || lastname.length < 3) {
            toast.error(
                "Username should be greater than 3 characters.",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { email, firstname, lastname, phone, password } = values;
            const { data } = await axios.post(registerRoute, {
                firstname,
                lastname,
                phone,
                email,
                password,
            });

            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY,
                    JSON.stringify(data.user)
                );
                closeRegisterCard();
                navigate("/");
            }
        }
    };

    return (

        <div className='overlay'>
            <div className='register-card'>
                <button onClick={closeRegisterCard} className='close-button'>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <img className='logo' src={Logo} alt="DMM-Fitness" />

                <form onSubmit={(event) => handleSubmit(event)}>
                    <input
                        type="text"
                        placeholder='firstname'
                        name='firstname'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="text"
                        placeholder='lastname'
                        name='lastname'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="tel"
                        placeholder='phone'
                        name='phone'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="email"
                        placeholder='E-Mail'
                        name='email'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        onChange={(e) => handleChange(e)}
                    />
                    <button className='submit-button' type='submit'>Create User</button>
                    <span>already have an account ? <Link to="/login">Login</Link> </span>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Register