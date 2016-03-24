import React from 'react'

import Row from '../Row'
import InputField from '../InputField'
import HoverBox from '../HoverBox'
import { AddBtn } from '../Buttons'

const Label = props => {
	return 	<Row>
				<InputField className="grid-col-6" placeholder="Name" />
				<InputField className="grid-col-3" placeholder="Preis" />
				<InputField className="grid-col-3" placeholder="Menge" />
			</Row>
}

export default function CustomerDialog(props) {
	const customer = props.data
	return (
		<HoverBox>
			<Row>
				<div className="grid-col-6">
					<h2>Veröffentlichung</h2>
					<Row>
						<InputField placeholder="Titel" />
					</Row>
					<Row>
						<InputField placeholder="Bild" />
					</Row>
					<Row>
						<InputField placeholder="Künstler/Interpret" />
					</Row>
					<Row>
						<InputField placeholder="Nummer" />
					</Row>
					<Row>
						<InputField type="multiline" placeholder="Beschreibung" />
					</Row>

				</div>
				<div className="grid-col-6">
					<h2>Produkte</h2>
					<Row>
						<Row className="bold">
							<InputField placeholder="Medium" />
						</Row>
						<Row>
							<InputField placeholder="Produktnummer" />
						</Row>
						<Row>
							<InputField placeholder="ISRC" />
						</Row>
						<Row>
							<InputField placeholder="Stückzahl" />
						</Row>
						<Row>
							<InputField placeholder="sonstige Mitwirkende" />
						</Row>
						<Row>
							<InputField placeholder="Preis" />
						</Row>
						<Row>
							<h4>Labels <AddBtn type="small" /></h4>
							<Label />
						</Row>
					</Row>
				</div>
			</Row>
		</HoverBox>
	)
}