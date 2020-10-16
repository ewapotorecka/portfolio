import React from 'react';
import Link from '../link';

function Nav() {

	return(
		<div className="nav-bar">
			<Link label="Skills" reference="skills"/>
			<Link label="Projects" reference="projects" />
			<Link label="About me" reference="about-me" />
			<Link label="Contact" reference="contact"  />
		</div>
	);
}

export default Nav;