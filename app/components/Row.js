import React from 'react'

import { getClassName } from '../utils'

export default function Row(props) {
	return (
		<div className={ 'row ' + getClassName(props) }>{props.children}</div>
	)
}