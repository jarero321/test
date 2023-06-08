import React from "react";

const DotRol = ({ className = "", style = {}, ...rest }) => (
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
			<g>
				<path fill="currentColor" d="M200,328.8C129,328.8,71.2,271,71.2,200S129,71.2,200,71.2S328.8,129,328.8,200S271,328.8,200,328.8z
						M200,92.2c-59.4,0-107.8,48.4-107.8,107.8S140.6,307.8,200,307.8S307.8,259.4,307.8,200S259.4,92.2,200,92.2z"/>
			</g>
			<g>
				<circle fill="currentColor" cx="200" cy="200" r="71.2"/>
			</g>
		</g>
	</svg>
);

export default DotRol;