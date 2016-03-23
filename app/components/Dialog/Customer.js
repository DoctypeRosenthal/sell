import React from 'react'

import Row from '../Row'
import InputField from '../InputField'
import HoverBox from '../HoverBox'

export default function CustomerDialog(props) {
	const customer = props.data
	return (
		<HoverBox>
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
		</HoverBox>
	)
}