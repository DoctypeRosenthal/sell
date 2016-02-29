import React from 'react'

const HoverBox = (props) => {
	let className = "hover-box " + props.className
	return (
		<div className={className}>{ props.children }</div>
	)
}

export default HoverBox
