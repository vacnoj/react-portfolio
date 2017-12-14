import React from 'react';

const Header = props => {
   return (
      <nav>
         <div className="nav-wrapper">
            <ul className="nav nav-tabs">
            <li onClick={ () => { props.handlePageChange("Home"); } }
               className={props.currenetPage === "Home" ? "active" : ""}>
               <a>Home</a>
            </li>
            <li onClick={ () => { props.handlePageChange("Projects"); } }
               className={props.currenetPage === "Projects" ? "active" : ""}>
               <a>Projects</a>
            </li>
            <li onClick={ () => { props.handlePageChange("Contact"); } }
               className={props.currenetPage === "Contact" ? "active" : ""}>
               <a>Contact Me</a>
            </li>
         </ul>
         </div>
      </nav>
   );
}


export default Header;