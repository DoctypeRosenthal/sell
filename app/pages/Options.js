import React from 'react'

import HoverBox from '../components/HoverBox'
import InputField from '../components/InputField'

import mockupData from '../mockup'

const Row = (props) => {
	return (
		<div className="row">{props.children}</div>
	)
}
export default class Options extends React.Component {
	render() {
		let company = mockupData.company
		let billMeta = mockupData.billMeta
		let dunning = mockupData.dunning
		let user = mockupData.user
		return (
			<main>
				<Row>
					<HoverBox className="grid-col-4">
						<h2>Firma</h2>
						<Row><InputField className="h2" placeholder="Firmenname" value={company.name}/></Row>
						<Row><InputField placeholder="Inhaber" value={company.owner}/></Row>
						<Row><InputField placeholder="Straße" value={company.street}/></Row>
						<Row>
							<InputField className="grid-col-6" placeholder="PLZ" value={company.zip}/>
							<InputField className="grid-col-6" placeholder="Ort" value={company.city}/>
						</Row>
						<Row><InputField placeholder="Telefon" value={company.telephone}/></Row>
						<Row><InputField placeholder="Fax" value={company.fax}/></Row>
						<Row><InputField placeholder="Handy" value={company.mobile}/></Row>
						<Row><InputField placeholder="eMail" value={company.email}/></Row>
						<Row><InputField placeholder="Website" value={company.website}/></Row>
						<Row>
							<h4>Bankdaten</h4>
							<Row><InputField placeholder="Bank" value={company.bank}/></Row>
							<Row><InputField placeholder="BIC" value={company.bic}/></Row>
							<Row><InputField placeholder="IBAN" value={company.iban}/></Row>
							<Row><InputField placeholder="Finanzamt" value={company.taxOffice}/></Row>
							<Row><InputField placeholder="Steuernummer" value={company.taxNr}/></Row>
						</Row>
					</HoverBox>
					<HoverBox className="grid-col-4">
						<h2>Zahlungsbedingungen</h2>
						<Row><InputField placeholder="Zahlungszeitraum" value={billMeta.termOfPayment}/></Row>
						<Row><InputField className="multi-line" placeholder="Zahlungstext" value={billMeta.introText} /></Row>
						<Row><InputField className="multi-line" placeholder="Grußtext" value={billMeta.greetings} /></Row>
						<Row>
							<h4>Zahlungserinnerung</h4>
							<Row><InputField placeholder="Zahlungszeitraum" value={dunning.firstTermOfPayment} /></Row>
							<Row><InputField className="multi-line" placeholder="Einleitung" value={dunning.firstIntro} /></Row>
							<Row><InputField className="multi-line" placeholder="Grußtext" value={dunning.firstGreetings} /></Row>
						</Row>
						<Row>
							<h4>Mahnung</h4>
							<Row><InputField placeholder="Zahlungszeitraum" value={dunning.secondTermOfPayment} /></Row>
							<Row><InputField className="multi-line" placeholder="Einleitung" value={dunning.secondIntro} /></Row>
							<Row><InputField className="multi-line" placeholder="Grußtext" value={dunning.secondGreetings} /></Row>
						</Row>
					</HoverBox>
					<HoverBox className="grid-col-4">
						<h2>Allgemeines</h2>
						<Row><InputField type="tag-container" className="multi-line" placeholder="Versandkosten"><em className="input-field__tag">1,45 €<i className="ico-close"></i></em></InputField></Row>
						<Row><InputField placeholder="Währung" value="€" /></Row>
						<Row><InputField type="tag-container" className="multi-line" placeholder="Steuersätze"><em className="input-field__tag">19%<i className="ico-close"></i></em><em className="input-field__tag">7%<i className="ico-close"></i></em></InputField></Row>
					</HoverBox>
				</Row>
				<Row>
					<HoverBox className="grid-col-4">
						<h2>persönliche Einstellungen</h2>
						<Row><InputField placeholder="Name" value={user.name} /></Row>
						<Row><InputField placeholder="Login" value={user.login} /></Row>
						<Row><InputField placeholder="Passwort" value={user.password} /></Row>
						<Row><InputField placeholder="eMail" value={user.email} /></Row>
					</HoverBox>
				</Row>
			</main>
		)
	}
}