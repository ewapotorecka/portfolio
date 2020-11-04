import React from 'react';
import './NavLink.css';



function NavLink( { label, reference } ) {
	return(
		<a href={ '#' + reference } className="nav-link" >{ label }</a>
	);
}

export default NavLink;