import React from 'react'

import HoverBox from '../components/HoverBox'

export default class Options extends React.Component {
	render() {
		return (
			<main>
				<HoverBox className="grid-col-3">
					<h2>Firma</h2>
				</HoverBox>
				<HoverBox className="grid-col-3">
					<h2>Bankdaten und Zahlungsmodalitäten</h2>
				</HoverBox>
				<HoverBox className="grid-col-3">
					<h2>Allgemeines</h2>
				</HoverBox>
				<HoverBox className="grid-col-3">
					<h2>persönliche Einstellungen</h2>
				</HoverBox>
			</main>
		)
	}
}