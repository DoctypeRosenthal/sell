import React from 'react'

import Row from '../Row'
import InputField from '../InputField'
import HoverBox from '../HoverBox'

export default function CustomerDialog(props) {
	const customer = props.data
	return (
		<HoverBox>
			<Row>
				<div className="grid-col-6">
					Bla
				</div>
				<div className="grid-col-6">
					Blubb
				</div>
			</Row>
		</HoverBox>
	)
}