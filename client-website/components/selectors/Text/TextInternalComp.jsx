const TextInternalComp = ({
	fontSize,
	textAlign,
	fontWeight,
	color,
	shadow,
	text,
	margin,
}) =>
	<div
		style={{
			width: '100%',
			margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
			color: `rgba(${Object.values(color)})`,
			fontSize: `${fontSize}px`,
			textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
			fontWeight,
			textAlign,
		}}
	>{text}</div>

export default TextInternalComp;