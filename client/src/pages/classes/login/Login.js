import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";


=======
import Register from "../../../components/Register"

import "./login.css";

const Login = () => {
  const [register,setRegister] =useState(false)
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  const openRegisterCard = () => {
   
    setRegister(!register);
 
  }


  return (
    
    <div style={{height:'92vh'}} className="login">
      <div style={{border: "1px solid grey",padding: "60px 90px 300px 90px", boxShadow: "10px 13px 16px grey", borderRadius: "20px"}} className="lContainer">
        <hr/>
        <h1 style={{color:'black',marginBottom:'70px' }}>Login Account</h1>
        <input style={{backgroundColor:'transparent', border:"1px solid grey", outline: "none", padding: "20px 10px"}}
          type="text"
          placeholder="E-mail"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input style={{backgroundColor:'transparent', border:"1px solid grey", outline: "none", padding: "20px 10px"}}
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button style={{backgroundColor:'orange', color:'black', fontSize:'1.5rem'}} disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
        <p style={{marginTop:'40px', fontSize:'1.5rem'}}>Don't have an Account? <Link onClick={openRegisterCard} style={{fontSize:'1.3rem', color:'blue', textDecoration:'none'}} to=''> SIGN UP</Link></p>
        {register ? < Register
          register={register}
          setRegister={setRegister}
        /> : undefined}
      </div>
     
    </div>
  );
};

export default Login;