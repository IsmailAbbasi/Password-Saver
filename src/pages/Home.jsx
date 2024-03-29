// // import React, { useState } from "react";

// // function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className={`sidebar ${isOpen ? "open" : ""}`}>
// //       <div className="toggle-btn" onClick={toggleSidebar}>
// //         <i className="fas fa-bars"></i>
// //       </div>
// //       <ul className="sidebar-menu">
// //         <li>Home</li>
// //         <li>About</li>
// //         <li>Services</li>
// //         <li>Contact</li>
// //       </ul>
/* <ul className="submenu">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul> */
// //       <button className="cta-button">Upgrade Now</button>
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <div className="app">
// //       <Sidebar />
// //       <div className="main-content">
// //         {/* Your main content here */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

import {Link,NavLink} from 'react-router-dom'
// import LogoS from '../../assets/images/i1.png'
// import LogoSubtitle from '../../assets/images/ismaillogo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

    
    <div className='nav-bar'>
        {/* <Link className='logo' to='/'> */}
        {/* <img src={LogoS} alt="logo"/> */}
        {/* <img className="sub-logo" src={LogoSubtitle} alt="ismail"/> */}
            {/* </Link> */}
            <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/> Home
            </NavLink>
            <NavLink exact="true" activeclassname="active" className ="about-link" to="/Password ">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/> Passwords
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Notes">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> Notes
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/PersonalInfo">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> Personal Info
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Trash">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> Trash
            </NavLink>
            

            </nav>
            <ul>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mohd-ismail-abbasi-bba550228/">
            <FontAwesomeIcon icon = {faLinkedin} colors="#4d4d4e" />
                    </a>
                </li>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IsmailAbbasi">
            <FontAwesomeIcon icon = {faGithub} colors="#4d4d4e" />
                    </a>
                </li>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/ismailisonmoon/">
            <FontAwesomeIcon icon = {faInstagram} colors="#4d4d4e" />
                    </a>
                </li>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/ismailisonmoon">
            <FontAwesomeIcon icon = {faTwitter} colors="#4d4d4e" />
                    </a>
                </li>
            
            </ul>
    </div>
   

)
export default Sidebar;


