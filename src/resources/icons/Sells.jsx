import React from "react";

const Sells = ({className = "", style = {}, ...rest }) => (
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
		<g>
			<path fill="currentColor" d="M471.5,413.5h-431c-11.4,0-20.7-9.3-20.7-20.7V119.2c0-11.4,9.3-20.7,20.7-20.7h431c11.4,0,20.7,9.3,20.7,20.7
				v273.5C492.2,404.1,482.9,413.5,471.5,413.5z"/>
			<path fill="#fff" d="M413.5,138L413.5,138H256H98.5l0,0c0,21.7-17.6,39.4-39.4,39.4v64.9v14.3v80.3c21.7,0,39.4,17.6,39.4,39.4H256
				h157.5c0-21.7,17.6-39.4,39.4-39.4v-80.3v-13.8v-65.4C431.1,177.3,413.5,159.7,413.5,138z"/>
			<circle fill="currentColor" cx="374.1" cy="257.1" r="40.5"/>
			<circle fill="currentColor" cx="137.9" cy="257.1" r="40.5"/>
		</g>
	</svg>
);

export default Sells;