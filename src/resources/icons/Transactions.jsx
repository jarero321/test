import React from "react";

const Transactions = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 24.74 13.13"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<path fill="currentColor" d="M7.5,11H.5a.67.67,0,0,1-.2,0c-.1,0-.24-.07-.26-.13a.4.4,0,0,1,.08-.31c.24-.28.5-.54.77-.83L.24,9c-.31-.33-.31-.35,0-.68l.61-.66,0-.06L.21,6.88c-.28-.3-.28-.32,0-.63l.67-.72L.15,4.75c-.2-.21-.2-.3,0-.51l.74-.79c-.25-.26-.5-.52-.73-.79a.46.46,0,0,1-.1-.35c0-.07.2-.12.31-.12H7.5c0-.35,0-.68,0-1A1.28,1.28,0,0,1,8.78,0H23.43a1.32,1.32,0,0,1,1.31,1.24V11.71A1.29,1.29,0,0,1,24.05,13a1.34,1.34,0,0,1-.62.17H8.79A1.29,1.29,0,0,1,7.5,12C7.47,11.64,7.5,11.31,7.5,11Zm.42,0c0,.27,0,.5,0,.74a.94.94,0,0,0,1,1q7.16,0,14.32,0a1,1,0,0,0,1-1.06c0-3.38,0-6.76,0-10.14,0-.72-.32-1-1-1H9a1.51,1.51,0,0,0-.3,0A.79.79,0,0,0,8,1.07a10,10,0,0,0-.06,1.1H9c0-.49,0-.49.51-.49h1.66c.42,0,.46,0,.46.45V11.2a.24.24,0,0,1-.26.24H9.27c-.17,0-.27-.08-.26-.26V11H7.92ZM.78,2.65a.18.18,0,0,1,0,.06l.45.47c.21.23.22.3,0,.53l-.73.78c.26.27.5.54.75.79a.3.3,0,0,1,0,.49l-.74.79c.26.28.5.55.75.81a.28.28,0,0,1,0,.47l-.75.81.76.81a.28.28,0,0,1,0,.45c-.18.18-.34.36-.53.57h9.7V2.65Zm8.74-.51v0h1c.32,0,.38.06.38.38v8c0,.3-.08.38-.39.38h.62V2.14Z" />
		<path fill="currentColor" d="M20.38,11.84H18c-.36,0-.4,0-.4-.41V10c0-.34.06-.4.39-.4h4.89c.31,0,.38.06.38.36v1.53c0,.31-.06.37-.36.37Zm2.39-1.79H18v1.33h4.74Z" />
		<path fill="currentColor" d="M15.35,11.81h-.78c-.2,0-.29-.09-.29-.29,0-.49,0-1,0-1.48a.28.28,0,0,1,.32-.32h1.48c.22,0,.33.09.33.31,0,.5,0,1,0,1.48,0,.21-.1.3-.3.3Zm.59-1.62H14.75v1.16h1.19Z" />
		<path fill="currentColor" d="M15.34,8.92h-.75c-.21,0-.31-.08-.31-.3,0-.49,0-1,0-1.48,0-.2.09-.3.31-.3H16.1c.21,0,.31.09.3.3V8.62c0,.21-.09.3-.3.3ZM14.75,7.3V8.45h1.19V7.3Z" />
		<path fill="currentColor" d="M18.73,6.85h.76c.18,0,.28.08.28.27,0,.52,0,1,0,1.55,0,.18-.09.26-.27.26H17.92c-.19,0-.27-.11-.27-.29,0-.49,0-1,0-1.48,0-.22.1-.32.33-.31Zm.58,1.61V7.31H18.12V8.46Z" />
		<path fill="currentColor" d="M18.71,4h.76c.21,0,.31.08.31.3,0,.49,0,1,0,1.48,0,.21-.1.3-.31.3H18c-.21,0-.31-.09-.31-.3,0-.49,0-1,0-1.46,0-.23.1-.33.34-.32Zm.6.47H18.12V5.58h1.19Z" />
		<path fill="currentColor" d="M22.16,4h.77c.21,0,.3.09.3.29v1.5c0,.2-.1.29-.3.29H21.39c-.2,0-.29-.09-.29-.29,0-.5,0-1,0-1.48,0-.23.11-.32.33-.31Zm-.59.46V5.58h1.19V4.43Z" />
		<path fill="currentColor" d="M22.15,6.85H23a.24.24,0,0,1,.27.26V8.66a.24.24,0,0,1-.27.26H21.37a.23.23,0,0,1-.26-.26V7.13a.25.25,0,0,1,.29-.29Zm.62.46h-1.2V8.45h1.2Z" />
		<path fill="currentColor" d="M15.35,4h.77c.19,0,.28.09.28.27V5.77a.24.24,0,0,1-.28.28H14.56c-.18,0-.28-.08-.28-.27q0-.75,0-1.5c0-.22.1-.31.31-.3Zm.59.46H14.75V5.58h1.19Z" />
		<path fill="currentColor" d="M22.15,3.15H21.4c-.2,0-.3-.08-.3-.29,0-.5,0-1,0-1.5,0-.2.09-.3.29-.29h1.53a.25.25,0,0,1,.3.28V2.87a.26.26,0,0,1-.3.29Zm-.58-1.61V2.69h1.19V1.54Z" />
		<path fill="currentColor" d="M18.72,1.08h.76c.19,0,.29.08.3.28,0,.51,0,1,0,1.53a.23.23,0,0,1-.26.26H17.93c-.19,0-.28-.08-.28-.27,0-.5,0-1,0-1.51,0-.21.1-.3.31-.29Zm.6.46h-1.2V2.69h1.2Z" />
		<path fill="currentColor" d="M15.34,3.15h-.78c-.19,0-.28-.08-.28-.27,0-.5,0-1,0-1.51,0-.21.11-.3.32-.29h1.5c.22,0,.31.1.3.3V2.86a.25.25,0,0,1-.29.3Zm.6-.46V1.54H14.75V2.69Z" />
		<path fill="currentColor" d="M3.59,6.55c0-.84,0-1.68,0-2.51,0-.08,0-.17,0-.22s.13-.18.2-.18A.31.31,0,0,1,4,3.79.52.52,0,0,1,4,4c0,1.7,0,3.4,0,5.1,0,0,0,.13,0,.17s-.15.15-.22.23c-.08-.08-.18-.14-.22-.23a1,1,0,0,1,0-.3C3.58,8.19,3.59,7.37,3.59,6.55Z" />
		<path fill="currentColor" d="M6,6.57V9.13a.52.52,0,0,1,0,.22c0,.08-.12.17-.18.17a.3.3,0,0,1-.22-.14.61.61,0,0,1,0-.27v-5c0-.17,0-.42.21-.43s.23.26.23.43C6,4.9,6,5.74,6,6.57Z" />
		<path fill="currentColor" d="M7.44,6.57c0-.85,0-1.7,0-2.56a.54.54,0,0,1,0-.22c0-.07.12-.15.19-.15a.26.26,0,0,1,.21.13.59.59,0,0,1,0,.27V9.16c0,.17,0,.37-.22.37s-.23-.2-.23-.37Z" />
	</svg>
);

export default Transactions;