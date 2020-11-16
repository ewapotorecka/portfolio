import React from 'react';
import Profile from '../../images/profile.jpg';
import './Welcome.css';

function Welcome() {
	return(
		<div className="section welcome">
			<div className="profile-img-container">
				<img src={Profile} alt="profile" className="profile-pic"></img>
			</div>
			<div className="welcome-text-container">
				<h2>Welcome!</h2>
				<p>My name is Ewa and I'm happy to show you some things about myself.</p>
				<p>Professionally I want to become a JavaScript Developer. I've been learning JavaScript since 2019.
					Right now I'm taking part in React intensive course ("Szkoła Reacta") and totally love this library!</p>
				<p>I'm a psychologist by profession.
					For more then 10 years I was working with children with autism and other difficulties and their families.
					During my career I've started to work in a kindergarten, where I was responsible for coordinating work of other therapist,
					working with parents and solving the conflicts.</p>
				<p>I would love to show you some more things about myself - feel free to check all the sections.</p>
				<p>I hope we'll get in touch.</p>
			</div>
		</div>
	);
}

export default Welcome;