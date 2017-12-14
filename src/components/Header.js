import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
   return (
      <nav>
         <div className="nav-wrapper">
            <ul className="nav nav-tabs">
               <li className={window.location.pathname === "/" ? "active" : ""}>
                  <Link to="/">Home</Link>
               </li>
               <li className={window.location.pathname === "/Projects" ? "active" : ""}>
                  <Link to="/Projects">Projects</Link>
               </li>
               <li className={window.location.pathname === "/Contact" ? "active" : ""}>
                  <Link to="/Contact">Contact Me</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}


export default Header;