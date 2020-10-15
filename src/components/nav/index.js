import React from 'react';
import Link from '../link';

function Nav() {
	return(
		<div className="nav-bar">
			<Link label="Skills" />
			<Link label="Projects" />
			<Link label="About me" />
			<Link label="Contact" />
		</div>
	);
}

export default Nav;