import React from "react";

const DotCircle = ({ className = "", style = {}, ...rest }) => (
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
		<path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.663 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.663 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm0-296c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm0 128c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48z" />
	</svg>
);

export default DotCircle;