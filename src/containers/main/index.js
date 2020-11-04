import React from 'react';
import Skills from '../skills';
import Projects from '../projects';
import AboutMe from '../about-me';
import Contact from '../contact';
import Welcome from '../welcome';
import './Main.css';

function Main() {
	return(
		<div>
			<div id="welcome">
				<Welcome />
			</div>
			<div  id="skills">
				<Skills />
			</div>
			<div  id="projects">
				<Projects />
			</div>
			<div  id="about-me">
				<AboutMe />
			</div>
			<div id="contact">
				<Contact />
			</div>
		</div>
	);
}

export default Main;