import React from "react";

const ArrowLeft = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 448 512"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" />
	</svg>
);

export default ArrowLeft;