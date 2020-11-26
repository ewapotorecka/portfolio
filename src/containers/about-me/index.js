import React from 'react';
import AboutElement from '../../components/aboutElement';
import './AboutMe.css';
import Running from '../../images/run.png';
import Climbing from '../../images/climbing.png';
import Poodle from '../../images/poodle.png';
import runningText from '../../text/running';
import poodleText from '../../text/poodle';
import climbingText from '../../text/climbing';

function AboutMe() {
	return(
		<div className="section about">
			<div className="header-container">
				<h1>ABOUT ME</h1>
			</div>
				<AboutElement data={ climbingText } img={ Climbing }/>
				<AboutElement data={ runningText } img={ Running }/>
				<AboutElement data={ poodleText } img={ Poodle }/>
		</div>
	);
}

export default AboutMe;