import React from 'react';

function Link( { label, path } ) {

	return(
		<a className="nav-element" href="#">{ label }</a>
	);
}

export default Link;