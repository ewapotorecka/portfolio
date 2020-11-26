import React from 'react';
import Link from '../link';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faStrava, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const strava = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faStrava } size="2x" color="#58003F" />,
	name: 'strava',
	to: 'https://www.strava.com/athletes/53139432'
};
const linkedIn = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faLinkedin } size="2x" color="#58003F" />,
	name: 'linkedIn',
	to: 'https://www.linkedin.com/in/ewa-potor%C4%99cka-70b241137/'
};
const github = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faGithub } size="2x" color="#58003F" />,
	name: 'github',
	to: 'https://github.com/ewapotorecka/'
};
const mail = {
	type: 'icon',
	src: <FontAwesomeIcon icon={ faAt } size="2x" color="#58003F" />,
	name: 'mail',
	to: 'mailto:ewa.potorecka@gmail.com'
};

function Footer() {
	return (
		<div className="footer">
			<div className="contact-info">
			
				
			</div>
			<div className="contact-icons">
				<div>
					<Link data={ strava }  className="icon-link"/>
				</div>
				<div>
					<Link data={ linkedIn } className="icon-link"/>
				</div>
				<div>
					<Link data={ github } className="icon-link"/>
				</div>
				<div>
					<Link data={ mail } className="icon-link"/>
				</div>
			</div>
			<div className="copy-rights">
			<span>ewa.potorecka@gmail.com</span>
			<span>© 2020 Ewa Potorecka</span>
			</div>
		</div>

	);
}

export default Footer;