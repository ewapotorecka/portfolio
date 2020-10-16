import React from 'react';
import Skills from '../../pages/skills';
import Projects from '../../pages/projects';
import AboutMe from '../../pages/about-me';
import Contact from '../../pages/contact';
import Welcome from '../../pages/welcome';

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