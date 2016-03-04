import React from 'react'

import HoverBox from '../components/HoverBox'
import InputField from '../components/InputField'

import mockupData from '../mockup'

export default class Options extends React.Component {
	render() {
		let company = mockupData.options.company
		return (
			<main>
				<div className="row">
					<HoverBox className="grid-col-4">
						<h2>Firma</h2>
						<InputField className="h2 grid-col-12" placeholder="Firmenname" text={company.name}/>
					</HoverBox>
					<HoverBox className="grid-col-4">
						<h2>Bankdaten und Zahlungsmodalitäten</h2>
					</HoverBox>
					<HoverBox className="grid-col-4">
						<h2>Allgemeines</h2>
					</HoverBox>
				</div>
				<div className="row">
				<HoverBox className="grid-col-4">
					<h2>persönliche Einstellungen</h2>
				</HoverBox>
				</div>
			</main>
		)
	}
}