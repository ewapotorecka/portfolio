import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function AboutElement( { data, img } ) {
	const button = {
		more: <div>SHOW MORE <FontAwesomeIcon icon={ faChevronDown } color="#790c5a" className="more-icon" /></div>,
		less: <div>SHOW LESS <FontAwesomeIcon icon={ faChevronUp } color="#790c5a" className="more-icon" /></div>
	}
	const [ content, setContent ] = useState( '' );
	const [ buttonContent, setButtonContent ] = useState( button.more );


	const handleClick = () => {
	
		if ( content === data.extended ) {
			setContent( '' );
			setButtonContent( button.more );
		} else {
			setContent( data.extended );
			setButtonContent( button.less )
		}

	};

	return (
		<div className="about-container">
			<div className={ `img-container ${ data.title.toLowerCase().split(' ')[0] } ` }>
				<img src={ img } alt={ data.title } className="abut-pic"></img>
			</div>
			<div className="text-container">
				<h2>{ data.title }</h2>
				<p>
					{ data.short }
				</p>
				<p>
					{ content }
				</p>
				<button onClick={ handleClick }>
					{ buttonContent }
				</button>
			</div>
		</div>
	);
};

export default AboutElement;