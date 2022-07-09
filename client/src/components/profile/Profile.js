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
import { faBars, faCircleUser, faRightFromBracket, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  const {user } = useContext(AuthContext)
  const [open, setOpen] = useState(true);
    useEffect(() => {
     
     setOpen(!open);
    }, [user.booking.length])
  

 
  
  return (
    <Navbar >
    <NavItem icon={<PlusIcon />}/>
    {user.booking.length>0? <NavItem icon={<BellIcon />} notification={open? <FontAwesomeIcon className='notify' style={{color: 'red'}} onClick={()=>setOpen(!open)} icon={faCheckCircle}/> :undefined} ><p style={{position: 'absolute', color:'black', backgroundColor:'white', bottom:'-60px',right: '55px',padding: '10px 10px'}}className="notification">Successfully booked class!</p></NavItem>:<NavItem icon={<BellIcon />}><p style={{position: 'absolute', color:'black', backgroundColor:'white', bottom:'-60px',right: '55px',padding: '10px 10px'}}>No classes booked</p></NavItem>}
         
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  
  );
}

function Navbar(props) {
  return (
    <>
    <nav className="navbarProfile">
      <ul className="navbar-navProfile">{props.children}</ul>
    </nav>
   
    </>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
 const handleClick = (e) => {
  e.preventDefault();
  setOpen(!open)
 }
  return (
    <li className="nav-itemProfile">
      <a href="#" className="icon-button" onClick={handleClick}>
        {props.icon}
        {props.notification}
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
 
  
   useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

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
        <span className="icon-notification">{props.notification}</span>
      </a>
    );
  };
   const handleLogout = (e) => {
    e.preventDefault();
		localStorage.removeItem("user");
  
    dispatch({ type: "LOGOUT"});
      navigate("/")
	}
    const bookGroupWorkout = () => {
    for(let i=0;i<user.booking.length;i++){
      const result= user.booking[i].filter(classes =>classes==="Group Workout")
     if(result.length>0)return true;
    }
   } 
    const bookPersonal = () => {
    for(let i=0;i<user.booking.length;i++){
    const result= user.booking[i].filter(classes =>classes==="Personal Training")
    if(result.length>0)return true;
    }
   } 
   const bookHiit = () => {
    for(let i=0;i<user.booking.length;i++){
      const result= user.booking[i].filter(classes =>classes==="HIIT Workout")
      if(result.length>0)return true;
    }
     }
   const bookSpinning = () => {
    for(let i=0;i<user.booking.length;i++){
    const result= user.booking[i].filter(classes =>classes==="Spinning")
    if(result.length>0)return true;
    }
   }
   const bookYoga = () => {
    for(let i=0;i<user.booking.length;i++){
    const result= user.booking[i].filter(classes =>classes==="Yoga")
    if(result.length>0)return true;
    }
   }
   console.log("user",user)
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
          
           {bookGroupWorkout()? <DropdownItem leftIcon={<BoltIcon />} rightIcon={<FontAwesomeIcon icon={faCheckCircle}/>} >Group Workout</DropdownItem> :<DropdownItem leftIcon={<BoltIcon />} >Group Workout</DropdownItem>} 
          {bookPersonal()? <DropdownItem leftIcon={<BoltIcon />} rightIcon={<FontAwesomeIcon icon={faCheckCircle}/>}>Personal Training</DropdownItem> :<DropdownItem leftIcon={<BoltIcon />}>Personal Training</DropdownItem>} 
         {bookHiit()?<DropdownItem leftIcon={<BoltIcon />} rightIcon={<FontAwesomeIcon icon={faCheckCircle}/>}>HIIT Workout</DropdownItem>:<DropdownItem leftIcon={<BoltIcon />}>HIIT Workout</DropdownItem>}
          {bookSpinning()?<DropdownItem leftIcon={<BoltIcon />} rightIcon={<FontAwesomeIcon icon={faCheckCircle}/>}>Spinning</DropdownItem>:<DropdownItem leftIcon={<BoltIcon />}>Spinning</DropdownItem>}
         {bookYoga()?<DropdownItem leftIcon={<BoltIcon />} rightIcon={<FontAwesomeIcon icon={faCheckCircle}/>}>Yoga</DropdownItem>:<DropdownItem leftIcon={<BoltIcon />}>Yoga</DropdownItem>}
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
            <h2>Settings</h2>
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
