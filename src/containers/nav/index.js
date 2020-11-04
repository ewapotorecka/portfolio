import React from 'react';
import NavLink from '../../components/navLink';
import './Nav.css';


function Nav() {
	return(
		<nav className="nav">
			<NavLink label="Skills" reference="skills"/>
			<NavLink label="Projects" reference="projects" />
			<NavLink label="About me" reference="about-me" />
			<NavLink label="Contact" reference="contact"  />
		</nav>
	);
}

export default Nav;