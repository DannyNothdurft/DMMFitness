import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
 
  return (
    <div className="navbar1">
      <div className="navContainer1">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
         
        </Link>
        {user ? user.username : (
          <div className="navItems1">
            <button className="navButton1">Register</button>
            <button className="navButton1">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;