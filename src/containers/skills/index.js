import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faHtml5, faCss3, faGit, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';

function Skills() {
	return (
		<div className="section skills">
			<div className="skills-container technologies">
				<h2>Technologies</h2>
				<ul className="skills-list">
					<li><FontAwesomeIcon icon={ faJsSquare } color="#790c5a" className="tech-icon" />JS including ES6</li>
					<li><FontAwesomeIcon icon={ faHtml5 } color="#790c5a" className="tech-icon" />HTML5</li>
					<li><FontAwesomeIcon icon={ faCss3 } color="#790c5a" className="tech-icon" />CSS3</li>
					<li><FontAwesomeIcon icon={ faGit } color="#790c5a" className="tech-icon" />Git</li>
					<li><FontAwesomeIcon icon={ faReact } color="#790c5a" className="tech-icon" />React</li>
				</ul>
			</div>
			<div className="skills-container soft-skills">
				<h2>Soft skills</h2>
				<ul className="skills-list">
					<li><FontAwesomeIcon icon={ faStar } color="#790c5a"/> Problem solving</li>
					<li><FontAwesomeIcon icon={ faStar } color="#790c5a"/> Team player</li>
					<li><FontAwesomeIcon icon={ faStar } color="#790c5a"/> Willingness to learn</li>
					<li><FontAwesomeIcon icon={ faStar } color="#790c5a"/> Creativity</li>
					<li><FontAwesomeIcon icon={ faStar } color="#790c5a"/> Perseverance in solving complex problems</li>
					<li><FontAwesomeIcon icon={ faStar } color="#790c5a"/> Time management</li>
				</ul>
				<h3>Languages</h3>
				<ul className="skills-list">
					<li><FontAwesomeIcon icon={ faStar } color="#790c5a"/> English - advanced in speech and writing </li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;