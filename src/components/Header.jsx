import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
   <React.Fragment>
    <nav>
        <h1>TechWorld </h1>
        <main>
            <HashLink  to={"/#Home"}>Home</HashLink>
            <HashLink to={"/contact"}>Contacts</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
   </React.Fragment>
  )
}

export default Header;

