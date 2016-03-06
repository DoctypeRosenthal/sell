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
						<InputField className="h2" placeholder="Firmenname" value={company.name}/>
						<InputField className="font-size-m" placeholder="Inhaber" value={company.owner}/>
						<InputField className="font-size-m" placeholder="Straße" value={company.street}/>
						<InputField className="font-size-m" placeholder="PLZ" value={company.zip}/>
						<InputField className="font-size-m" placeholder="Ort" value={company.city}/>
						<InputField className="font-size-m" placeholder="Telefon" value={company.telephone}/>
						<InputField className="font-size-m" placeholder="Fax" value={company.fax}/>
						<InputField className="font-size-m" placeholder="Handy" value={company.mobile}/>
						<InputField className="font-size-m" placeholder="eMail" value={company.email}/>
						<InputField className="font-size-m" placeholder="Website" value={company.website}/>
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