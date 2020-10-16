import React from 'react';

function Link( { label, reference } ) {
	return(
		<a className="nav-element" href={ '#' + reference } >{ label }</a>
	);
}

export default Link;