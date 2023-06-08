import React from "react";

const Graphics = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 17.12 16.47"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<path fill="currentColor" d="M7.93,15.84H9.2V9.14c0-.22.05-.28.27-.27.78,0,1.55,0,2.33,0h.25v7h1.28V4.45h2.85v11.4h.94v.62H0A4.51,4.51,0,0,1,0,16s.1-.09.15-.09H1v-7H3.8v7H5.07V6.35H7.93Zm7.6,0V5.08H14V15.84Zm-9.81,0H7.28V7H5.72Zm5.68,0V9.53H9.85v6.31ZM1.6,9.52v6.32H3.16V9.52Z"/>
		<path fill="currentColor" d="M9.67,4.48a1.47,1.47,0,0,1,1.7-.16L13.49,2.2a4.75,4.75,0,0,1-.16-.82A1.41,1.41,0,0,1,14.25.09,1.43,1.43,0,0,1,15.8.46,1.38,1.38,0,0,1,16,2.06a1.4,1.4,0,0,1-1.89.64.2.2,0,0,0-.26,0q-.94,1-1.92,1.92a.2.2,0,0,0,0,.28,1.39,1.39,0,0,1-.36,1.7,1.45,1.45,0,0,1-1.75.07A1.41,1.41,0,0,1,9.25,5.2a.22.22,0,0,0-.1-.3c-.52-.34-1-.69-1.53-1.05a.2.2,0,0,0-.28,0,1.37,1.37,0,0,1-1.67,0,.2.2,0,0,0-.28,0c-.5.35-1,.71-1.53,1.05a.22.22,0,0,0-.1.29,1.42,1.42,0,0,1-1,1.73A1.44,1.44,0,0,1,1,5.9,1.46,1.46,0,0,1,2,4.17a1.48,1.48,0,0,1,1.36.32c.58-.4,1.17-.8,1.74-1.22,0,0,0-.14,0-.21A1.43,1.43,0,0,1,7.34,1.54a1.39,1.39,0,0,1,.54,1.51A.23.23,0,0,0,8,3.34L9.61,4.45ZM2.37,6.34a.81.81,0,0,0,.81-.78.8.8,0,0,0-.77-.8.78.78,0,0,0-.82.78A.81.81,0,0,0,2.37,6.34ZM6.49,3.48a.79.79,0,1,0,0-1.58.81.81,0,0,0-.8.78A.8.8,0,0,0,6.49,3.48Zm4.93,2.06a.78.78,0,0,0-.79-.78.8.8,0,0,0-.8.78.82.82,0,0,0,.81.8A.8.8,0,0,0,11.42,5.54ZM14.75.64a.78.78,0,0,0-.79.78.79.79,0,0,0,.78.79.8.8,0,0,0,.81-.79A.8.8,0,0,0,14.75.64Z" />
	</svg>
);

export default Graphics;