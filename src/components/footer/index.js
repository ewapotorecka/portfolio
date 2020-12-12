import React, { useState } from 'react';
import Link from '../link';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faStrava, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
	const [ stravaColor, setStravaColor ] = useState( '#58003F' );
	const [ mailColor, setMailColor ]  = useState( '#58003F' );
	const [ linkedInColor, setLinkedInColor ]  = useState( '#58003F' );
	const [ githubColor, setGithubColor ]  = useState( '#58003F' );



	const strava = {
		type: 'icon',
		src: <FontAwesomeIcon icon={ faStrava } size="2x" color={ stravaColor } />,
		name: 'strava',
	};
	const github = {
		type: 'icon',
		src: <FontAwesomeIcon icon={ faGithub } size="2x" color={ githubColor } />,
		name: 'github'
	};
	const linkedIn = {
		type: 'icon',
		src: <FontAwesomeIcon icon={ faLinkedin } size="2x" color={ linkedInColor } />,
		name: 'linkedIn'
	};
	const mail = {
		type: 'icon',
		src: <FontAwesomeIcon icon={ faAt } size="2x" color={ mailColor } />,
		name: 'mail'
	};



	return (
		<div className="footer">
			<div>

			</div>
			<div className="contact-icons">
				{/* ikonki bliej siebie i nizej */}
				<div>
					<Link
						data={ strava }
						to='https://www.strava.com/athletes/53139432'
						className="icon-link"
						onMouseEnter={ () => setStravaColor( 'white' ) }
						onMouseLeave={ () => setStravaColor( '#58003F' ) }/>
				</div>
				<div>
					<Link
						data={ linkedIn }
						to='https://www.linkedin.com/in/ewa-potor%C4%99cka-70b241137/'
						className="icon-link"
						onMouseEnter={ () => setLinkedInColor( 'white' ) }
						onMouseLeave={ () => setLinkedInColor( '#58003F' ) }/>
				</div>
				<div>
					<Link
						data={ github }
						to='https://github.com/ewapotorecka/'
						className="icon-link"
						onMouseEnter={ () => setGithubColor( 'white' ) }
						onMouseLeave={ () => setGithubColor( '#58003F' ) }/>
				</div>
				<div>
					<Link
						data={ mail }
						to='mailto:ewa.potorecka@gmail.com'
						className="icon-link"
						onMouseEnter={ () => setMailColor( 'white' ) }
						onMouseLeave={ () => setMailColor( '#58003F' ) }/>
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