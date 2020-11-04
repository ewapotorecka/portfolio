import React from 'react';
import Profile from '../../images/profile.jpg';
import './Welcome.css';

function Welcome() {
	return(
		<div className="section welcome">
			<div className="img-container">
				<img src={Profile} alt="profile" className="profile-pic"></img>
			</div>
			<div className="welcome-container">
				<h2>Welcome!</h2>
				<p>My name is Ewa and I'm happy to show you some things about myself.</p>
				<p>Professionally I want to become a JavaScript Developer. </p>
				<p>You can check my skills or just skip to the projects section.</p>
				<p>I would love to show you some more things about myself - check the about me section.</p>
				<p>I hope we'll get in touch.</p>
			</div>
		</div>
	);
}

export default Welcome;