import React from "react";

const User = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 400 400"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<g>
			<circle fill="currentColor" cx="200" cy="127.7" r="52.1"/>
			<path fill="currentColor" d="M293.7,285.6c0,51.8-187.5,51.8-187.5,0s42-93.7,93.7-93.7S293.7,233.8,293.7,285.6z"/>
		</g>
	</svg>
);

export default User;