import React from 'react'

import Row from '../components/Row'
import InputField from '../components/InputField'
import { SaveBtn } from '../components/Buttons'

export class Dialog extends React.Component {
	render() {
		console.log('hey')
		return (
			<div className="dialog__layer">
				<div className="dialog__center">
					<div className="dialog__window">
						<Row>
							<h2 className="dialog__header">{props.title}<div className="dialog__x ico-close"></div></h2>
						</Row>
						{props.children}
						<Row className="h1">
							<SaveBtn type="big" />
						</Row>
					</div>
				</div>
			</div>
		)
	}
}


export class CustomerDialog extends React.Component {

	render() {
		let customer = this.props.data || {}
		return (
			<Dialog title="Neuer Kunde">
				<Row><InputField placeholder="Namenszusatz" value={customer.prefix}/></Row>
				<Row>
					<InputField className="grid-col-2" placeholder="Anrede" value={customer.gender}/>
					<InputField className="grid-col-5" placeholder="Vorname" value={customer.forename}/>
					<InputField className="grid-col-5" placeholder="Nachname" value={customer.surname}/>
				</Row>
				<Row>
					<InputField className="grid-col-5" placeholder="Straße" value={customer.street}/>
					<InputField className="grid-col-2" placeholder="PLZ" value={customer.zip}/>
					<InputField className="grid-col-5" placeholder="Stadt" value={customer.city}/>
				</Row>
				<Row>
					<InputField className="grid-col-7" placeholder="eMail" value={customer.email}/>
					<InputField className="grid-col-5" placeholder="Website" value={customer.website}/>
				</Row>
				<Row><InputField className="multi-line" placeholder="Anmerkungen" value={customer.note}/></Row>
			</Dialog>
		)
	}

}