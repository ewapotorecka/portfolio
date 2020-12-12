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
				<p>My name is Ewa and I'm happy to shortly present myself.</p>
				<p>Professionally I want to become a JavaScript Developer. I've been learning JavaScript since 2019.
					Right now I'm taking part in React intensive course ("Szkoła Reacta") and totally love this library!</p>
				<p>
					By profession I am a psychologist.
					For more than 10 years I worked with autistic children and their families, helping also with behavioral difficulties.
					I became responsible for coordinating the work of other therapists in the kindergarten that employed me,
					I also worked with parents and solved conflicts arising in this difficult environment.
				</p>
				<p>I would love to show you some more - feel free to check all the sections.</p>
				<p>I hope we'll get in touch.</p>
			</div>
		</div>
	);
}

export default Welcome;