import React from 'react';
import Skills from '../../pages/skills';
import Projects from '../../pages/projects';
import AboutMe from '../../pages/about-me';
import Contact from '../../pages/contact';
import Welcome from '../../pages/welcome';

function Main() {
	return(
		<div>
			<div>
				<Welcome />
			</div>
			<div>
				<Skills />
			</div>
			<div>
				<Projects />
			</div>
			<div>
				<AboutMe />
			</div>
			<div>
				<Contact />
			</div>
		</div>
	);
}

export default Main;