import React from "react";

const Camera = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 192 512"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		
	</svg>
);

export default Camera;