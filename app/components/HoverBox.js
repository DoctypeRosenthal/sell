import React from 'react'

export default function HoverBox(props) {
	return (
		<div className={'hover-box ' + (props.className ? props.className : '')}>{ props.children }</div>
	)
}
