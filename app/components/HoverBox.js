import React from 'react'

import { getClassName } from '../utils'

export default function HoverBox(props) {
	return (
		<div className={'hover-box ' + getClassName(props)}>{ props.children }</div>
	)
}
