import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faGit, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'

function Skills() {
	return (
		<div className="section" id="skills">
			<div className="skills-container technologies">
				<h2>Technologies</h2>
				<ul className="skills-list">
					<li><FontAwesomeIcon icon={ faJsSquare } size="2x" className="tech-icon" />JS including ES6</li>
					<li><FontAwesomeIcon icon={ faHtml5 } size="2x" className="tech-icon" />HTML5</li>
					<li><FontAwesomeIcon icon={ faCss3 } size="2x" className="tech-icon" />CSS3</li>
					<li><FontAwesomeIcon icon={ faGit } size="2x" className="tech-icon" />Git</li>
					<li><FontAwesomeIcon icon={ faReact } size="2x" className="tech-icon" />React</li>
				</ul>
			</div>
			<div className="skills-container soft-skills">
				<h2>Soft skills</h2>
				<ul className="skills-list">
					<li><FontAwesomeIcon icon={ faStar } /> Problem solving</li>
					<li><FontAwesomeIcon icon={ faStar } /> Team player</li>
					<li><FontAwesomeIcon icon={ faStar } /> Willingness to learn</li>
					<li><FontAwesomeIcon icon={ faStar } /> Creativity</li>
					<li><FontAwesomeIcon icon={ faStar } /> Perseverance in solving complex problems</li>
					<li><FontAwesomeIcon icon={ faStar } /> Time management</li>
				</ul>
				<h3>Languages</h3>
				<ul className="skills-list">
					<li><FontAwesomeIcon icon={ faStar } />English - advanced in speech and writing </li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;