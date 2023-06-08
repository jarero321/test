import React from "react";

const AngleLeft = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<polygon fill="#44DE89" points="70.2,3.1 2.7,3.1 2.7,76.3 23.2,76.3 23.2,23.6 70.2,23.6"/>
		<polygon fill="#44DE89" points="76.8,25.4 76.8,78.1 29.8,78.1 29.8,98.6 97.3,98.6 97.3,25.4"/>
	</svg>
);

export default AngleLeft;