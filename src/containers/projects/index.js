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
			<Link  data={ pigGame } className="project-link"/>
			{/* <Link /> */}
		</div>
	);
}

export default Projects;