import React from 'react'

import Row from '../components/Row'
import InputField from '../components/InputField'
import { SaveBtn } from '../components/Buttons'

const Dialog = (props) => {
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


const ProductRow = product => {
	// returns the product price by subtractig the discount
	const discountPrice = (netto, discount) => netto - netto / 100 * discount
	// returns the monetary value of the tax
	const taxAmount = (netto, tax) => price / 100 * tax
	// returns the product's total price by adding the tax on top
	const taxPrice = (netto, tax) => price + price / 100 * tax
	return (
		<tr>
			<td className="quantity">{product.quantity}</td>
			<td className="name">{product.group.nr}-{product.nr} {product.group.name} {product.name} ({label.name})</td>
			<td className="netto">{product.netto}</td>
			<td className="discount">{product.discount} %</td>
			<td className="tax">{ taxAmount(discountPrice(product.netto, product.discount), product.tax) } ({product.tax} %)</td>
			<th className="total">{ taxPrice(discountPrice(product.netto, product.discount), product.tax) } €</th>
		</tr>
	)
}

export class OrderDialog extends React.Component {

	render() {
		let customer = this.props.data || {}
		return (
			<Dialog title="Neuer Kunde">
				<Row>
					<div className="address-block grid-col-6">
						<div className="address-block__logo">
							<img src={ require("../pics/" + company.logo) } />
						</div>
						<div className="address-block__from">
							{company.name} · {company.owner} · {company.street} · {company.zip + company.city}
						</div>
						<ul className="address-block__to">
							<li>{customer.prefix}</li>
							<li>{customer.forename} {customer.surname}</li>
							<li>{customer.street}</li>
							<li>{customer.zip} {customer.city}</li>
						</ul>
					</div>
					<div class="document-info grid-col-6">
						<h3>Rechnung</h3>
						<table>
							<tbody>
								<tr>
									<td>Nr.</td><td>{bill.nr}</td>
								</tr>
								<tr>
									<td>Kundennr.</td><td>{order.customerNr}</td>
								</tr>
								<tr>
									<td>Rechnungsdatum</td><td>{bill.created}</td>
								</tr>
								<tr>
									<td>Lieferdatum</td><td>{order.created}</td>
								</tr>
							</tbody>
						</table>
						Bitte bei Zahlung angeben.
					</div>
				</Row>
				<Row>
					{ billMeta.introText }
				</Row>
				<Row>
					<table className="grid-col-12">
						<tbody>
							<tr>
								<th className="quantity">Menge</th>								
								<th className="name">Artikel</th>
								<th className="netto">Netto</th>
								<th className="discount">Rabatt</th>
								<th className="tax">MwSt.</th>
								<th className="brutto">brutto</th>
							</tr>
							{ products.map(product => <ProductRow product={product} />) }
							<tr>
								<th colspan="3">Summe der Bestellung</th><th>17,00 €</th>
							</tr>
						</tbody>
					</table>
				</Row>
				<Row>
					{ billMeta.greetings }
				</Row>
				<Row className="company-infos">
					<ul className="grid-col-4">
						<li>{company.name}</li>
						<li>{company.owner}</li>
						<li>{company.street}</li>
						<li>{company.zip + company.city}</li>
						<li>{company.phone}</li>
						<li>{company.email}</li>
						<li>{company.website}</li>
					</ul>
					<ul className="grid-col-4">
						<li>{company.bank}</li>
						<li>{company.iban}</li>
						<li>{company.bic}</li>
					</ul>
					<ul className="grid-col-4">
						<li>{company.taxdiscountice}</li>
						<li>{company.taxNr}</li>
					</ul>
				</Row>
			</Dialog>
		)
	}
}
