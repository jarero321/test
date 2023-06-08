import React from "react";

const Periods = ({ className = "", style = {}, ...rest }) => (
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
		<rect x="234.5" y="71.4" fill="none" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" width="42.5" height="42.5"/>
		<rect x="361.7" y="128" transform="matrix(0.7071 0.7071 -0.7071 0.7071 217.7131 -227.0495)" width="42.5" height="42.5" fill="none" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" />
		<circle fill="#fff" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" cx="256" cy="277.8" r="175.7"/>
		<polyline fill="#fff" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" points="255.7,209.2 255.7,276.7 340.4,276.7 "/>
		<line fill="none" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" x1="90.4" y1="276.7" x2="139.1" y2="276.7"/>
		<line fill="none" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" x1="372.2" y1="276.7" x2="420.9" y2="276.7"/>
		<line fill="none" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" x1="255.5" y1="442.8" x2="255.5" y2="394.2"/>
		<line fill="none" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" x1="255.5" y1="162" x2="255.5" y2="113.4"/>
		<rect x="210" y="58.5" fill="#fff" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10" width="90.8" height="25.7"/>
	</svg>
);

export default Periods;