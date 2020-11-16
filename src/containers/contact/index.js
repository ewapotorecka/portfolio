import React from 'react';
import Link from '../../components/link';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faStrava, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const strava = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faStrava } size="3x" color="white"/>,
	name: 'strava',
	to: 'https://www.strava.com/athletes/53139432'
};
const linkedIn = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faLinkedin } size="3x" color="white"/>,
	name: 'linkedIn',
	to: 'https://www.linkedin.com/in/ewa-potor%C4%99cka-70b241137/'
};
const github = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faGithub } size="3x" color="white"/>,
	name: 'github',
	to: 'https://github.com/ewapotorecka/'
};
const mail = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faAt } size="3x" color="white"/>,
	name: 'mail',
	to: 'mailto:ewa.potorecka@gmail.com'
};



function Contact() {
	return(
		<div className="section">
			<div className="contact-container">
				<Link data={ strava } color="#790c5a" className="icon-link"/>
				<Link data={ linkedIn } color="#790c5a" className="icon-link"/>
			</div>
			<div className="contact-container">
				<Link data={ github } color="#790c5a" className="icon-link"/>
				<Link data={ mail } color="#790c5a" className="icon-link"/>
			</div>
		</div>
	);
}

export default Contact;