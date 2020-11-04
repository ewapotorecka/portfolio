import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faGit, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'

function Skills() {
	return (
		<div className="section" id="skills">
			<div className="skills-container technologies">
				<h2>Technologies</h2>
				<ul className="skills-list">
					<li><FontAwesomeIcon icon={ faJsSquare } /> JS including ES6</li>
					<li><FontAwesomeIcon icon={ faHtml5 } /> HTML5</li>
					<li><FontAwesomeIcon icon={ faCss3 } /> CSS3</li>
					<li><FontAwesomeIcon icon={ faGit } /> Git</li>
					<li><FontAwesomeIcon icon={ faReact } /> React</li>
				</ul>
			</div>
			<div className="skills-container soft-skills">
				<h2>Soft skills</h2>
				<ul>
					<li>Problem solving</li>
					<li>Team player</li>
					<li>Willingness to learn</li>
					<li>Creativity</li>
					<li>Perseverance in solving complex problems</li>
					<li>Time management</li>
				</ul>
				<h3>Languages</h3>
				<ul>
					<li>English - advanced in speech and writing </li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;