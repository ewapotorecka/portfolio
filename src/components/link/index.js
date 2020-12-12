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
		<a href={ props.to } target="_blanc" className="link" onMouseEnter={ props.onMouseEnter } onMouseLeave={ props.onMouseLeave }>{ linkImg }</a>
	);
}

export default Link;