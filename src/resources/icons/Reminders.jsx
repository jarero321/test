import React from "react";

const Reminders = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 21.92 22.18"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		
		<path fill="currentColor" d="M11.54,10.58a5,5,0,0,1,.34,2.06c0,1,0,2,0,3v.22c.23,0,.44,0,.65,0A1.76,1.76,0,0,1,14,17.75a1.73,1.73,0,0,1-1.6,1.64c-.75,0-1.49,0-2.24,0H9.83v.32a2.51,2.51,0,0,1-1.75,2.4.74.74,0,0,1-.26,0c-.49,0-1,0-1.49,0a1.61,1.61,0,0,1-1-.31A2.49,2.49,0,0,1,4.17,19.7v-.28H3.93c-.77,0-1.54,0-2.31,0a1.6,1.6,0,0,1-1.44-1,1.67,1.67,0,0,1,.17-1.78,1.73,1.73,0,0,1,1.38-.73h.39V12.32a4.59,4.59,0,0,1,3.53-4.5c.14,0,.18-.09.18-.24,0-.64,0-1.27,0-1.91a1.06,1.06,0,0,1,1-1.1A1.07,1.07,0,0,1,8,5a1.36,1.36,0,0,1,.19.62c0,.63,0,1.26,0,1.9v.19a5,5,0,0,1,2.64,1.58,1.34,1.34,0,0,0,.11-.14l1.56-2.3a.29.29,0,0,0,0-.3A4.85,4.85,0,1,1,17.64,9.7,4.83,4.83,0,0,1,14.56,9a.19.19,0,0,0-.24,0L11.6,10.54Zm-.41.22L10,11.44c-.13.08-.27.16-.39,0s0-.25,0-.37c.27-.39.53-.79.81-1.18a.21.21,0,0,0,0-.31A4.47,4.47,0,0,0,9.05,8.54a4.79,4.79,0,0,0-3-.35,4.1,4.1,0,0,0-3.52,4.19V16c0,.25-.07.32-.32.33H1.7a1.21,1.21,0,0,0-1.11.75,1.27,1.27,0,0,0,.15,1.38A1.37,1.37,0,0,0,1.92,19H12.35a1.31,1.31,0,0,0,.22-2.57,3.29,3.29,0,0,0-.77-.05c-.31,0-.37-.06-.37-.38V12.18A4,4,0,0,0,11.13,10.8Zm-.62-.17.22-.11,3.44-1.95a.41.41,0,0,1,.5,0,4.27,4.27,0,0,0,3.26.62A4.42,4.42,0,1,0,13,6.59.4.4,0,0,1,13,7c-.77,1.14-1.55,2.28-2.32,3.43Zm-5.88,8.8a2.09,2.09,0,0,0,.55,1.73,1.6,1.6,0,0,0,1.33.57c.41,0,.83,0,1.24,0a1,1,0,0,0,.31,0,2,2,0,0,0,1.28-1.5,6,6,0,0,0,.06-.74ZM7.73,7.69c0-.65,0-1.28,0-1.91S7.49,5,6.89,5a.62.62,0,0,0-.62.67V7.52a1,1,0,0,0,0,.17Z "/>
		<path fill="currentColor" d="M11.5,17.74v.43h-9v-.43Z "/>
		<path fill="currentColor" d="M3.66,14.19a12.56,12.56,0,0,1,.2-3.07A3.09,3.09,0,0,1,5.73,8.93H5.8L6,9.31l-.29.15a2.65,2.65,0,0,0-1.44,2,15.17,15.17,0,0,0-.13,2.42v.26Z "/>
		<path fill="currentColor" d="M17.18,5.9a1,1,0,1,1,1-1A1,1,0,0,1,17.18,5.9Zm.53-1a.52.52,0,0,0-.52-.53.53.53,0,0,0-.54.51.52.52,0,0,0,.53.54A.52.52,0,0,0,17.71,4.93Z "/>
		<path fill="currentColor" d="M15.54,4.92a1,1,0,0,1-1,1,1,1,0,1,1,0-1.95A1,1,0,0,1,15.54,4.92Zm-.45,0a.5.5,0,0,0-.51-.53.53.53,0,1,0,0,1A.5.5,0,0,0,15.09,4.93Z "/>
		<path fill="currentColor" d="M20.74,4.93a1,1,0,0,1-1,1,1,1,0,1,1,1-1Zm-.45,0a.51.51,0,0,0-.51-.53.54.54,0,0,0-.55.53.52.52,0,0,0,.53.52A.51.51,0,0,0,20.29,4.93Z "/>
	</svg>
);

export default Reminders;