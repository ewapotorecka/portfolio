import React from 'react';
import Link from '../../components/link';
import './Projects.css';
import PigGame from '../../images/pigGame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const pigGame = {
	type: 'image',
	src: PigGame,
	name: "pig-game",
	to: "https://ewapotorecka.github.io/blocks/"
}
const code = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faGithub } size="1.5x" color='black'/>,
	name: 'code'
};
const demo = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faExternalLinkAlt } size="1.5x" color='black'/>,
	name: 'demo'
}

function Projects() {
	return(
		<div className="section projects">
			<div className="header-container">
				<h1>PROJECTS</h1>
			</div>
			<div className="project-container left">
				<div className="project-header-container">
					<h3>Hungry Pig game</h3>
					<div className="project-icons-container">
						<Link data={ code } to='https://github.com/ewapotorecka/blocks'/>
						<Link data={ demo } to='https://ewapotorecka.github.io/blocks/'/>
					</div>
				</div>
				<div className='project-content'>
					<div className="link-container">
						<img src={ PigGame} alt='pig game' className='project-img'/>
					</div>
					<div className="description">
						<p>Currently available only for desktop.</p>
						<p>A simple game, where your objective is to find the way to the tasty veggies.
							Move using arrows. Hungry Pig can push a block to clear the way.</p>
						<p>Technologies used:</p>
						<ul>
							<li>TypeScript</li>
							<li>Canvas API</li>
							<li>Webpack</li>
						</ul>
					</div>
				</div>
			</div>
			{/* <div className="project-container right">
				<div className="description">
					<h4>Hungry Pig game</h4>
					<p>Currently available only for desktop.</p>
					<p>A simple game, where your objective is to find the way to the tasty veggies.
						Move using arrows. Hungry Pig can push a block to clear the way.</p>
					<p>Technologies used:</p>
					<ul>
						<li>TypeScript</li>
						<li>Canvas API</li>
						<li>Webpack</li>
					</ul>
				</div>
				<div className="link-container">
					<Link  data={ pigGame } className="project-link"/>
				</div>
			</div> */}
		</div>
	);
}

export default Projects;