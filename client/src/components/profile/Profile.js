import React, { useState, useEffect, useRef, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate} from 'react-router-dom'
import './profile.css';
import {AuthContext }from '../../context/AuthContext.js'
import { SearchContext} from '../../context/SearchContext.js'
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Profile() {

  
 

  return (
    <Navbar >
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbarProfile">
      <ul className="navbar-navProfile">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-itemProfile">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { loading, error, dispatch } = useContext(AuthContext);
 const { user } = useContext(AuthContext);
 const navigate = useNavigate()
  const {}= useContext(SearchContext)
  
   useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])
console.log(dropdownRef.current?.firstChild.offsetHeight)
  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height)
    setMenuHeight(height);
  } 
  
  function DropdownItem(props) {
      
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu  && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
   const handleLogout = (e) => {
    e.preventDefault();
		localStorage.removeItem("user");
  
    dispatch({ type: "LOGOUT"});
      navigate("/")
	}


  return (
    <div className="dropdown" style={{ height: menuHeight+30 }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faCircleUser}/>}>{user.firstName}</DropdownItem>
          <DropdownItem 
            leftIcon='💪'
            /* rightIcon={<ChevronIcon />} */
            goToMenu="settings">
           My Classes 
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
           /*  rightIcon={<ChevronIcon />} */
            goToMenu="animals">
          Settings
          </DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faRightFromBracket}/>}>
          <button style={{background:'transparent', border:'none'}} onClick={handleLogout}>Log Out</button>
           </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Classes</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Group Workout</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Personal Training</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HIIT Workout</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Spinning</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Yoga</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Butterfly</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Profile;
