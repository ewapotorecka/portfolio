import React from 'react';
import Link from '../../components/link';
import './Projects.css';
import PigGame from '../../images/pigGame.png';

const pigGame = {
	type: 'image',
	src: PigGame,
	name: "pig-game",
	to: "https://ewapotorecka.github.io/blocks/"
}

function Projects() {
	return(
		<div className="section">
			<div className="project-container left">
				<div className="link-container">
					<Link  data={ pigGame } className="project-link"/>
				</div>
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
			</div>
			<div className="project-container right">
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
			</div>
		</div>
	);
}

export default Projects;