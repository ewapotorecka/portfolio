import React from 'react';
import './Link.css';

function Link( props ) {
	const element = props.data;
	let linkImg;

	if ( element.type === 'image' ) {
		linkImg = <img src={ props.data.src } alt={ props.data.name }/>;
	} else {
		linkImg = element.src;
	}

	return(
		<a href={ props.data.to } target="_blanc" className="link">{ linkImg }</a>
	);
}

export default Link;