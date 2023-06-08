import React from "react";

const Conciliation = ({className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 512 512"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<path fill="currentColor" d="M312.4,421.3H133c-23.8,0-43.1-16.5-43.1-36.9L47.4,234.6c0-20.4,19.3-36.9,43.1-36.9h265v186.7
			C355.5,404.8,336.2,421.3,312.4,421.3z"/>
		<path fill="currentColor" d="M295.7,256h-53.1c-12,0-21.8-9.8-21.8-21.8v-159c0-12,9.8-21.8,21.8-21.8l68.8,21.8c3.4,0,6.1,2.7,6.1,6.1v153
			C317.5,246.2,307.7,256,295.7,256z"/>
		<path fill="currentColor" d="M416.3,403.8L416.3,403.8c-26.7,0-48.3-21.6-48.3-48.3V255.4c0-26.7,21.6-48.3,48.3-48.3h0
			c26.7,0,48.3,21.6,48.3,48.3v100.1C464.6,382.2,443,403.8,416.3,403.8z"/>
		<path fill="currentColor" d="M355.5,197.7c0,0-38,6.6-38-55.6s-29.8,93-29.8,93l33.9,32.8L355.5,197.7z"/>
	</svg>
);

export default Conciliation;