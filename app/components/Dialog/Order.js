import React from 'react'

import Row from '../Row'
import InputField from '../InputField'
import HoverBox from '../HoverBox'

export default function OrderDialog(props) {
	const order = props.data.order
	return (
		<div className="order">
			<Row>
				<div className="grid-col-6">
					<h4>Lieferadresse</h4>
					<Row><InputField placeholder="Nameszusatz" value={order.customer.prefix} /></Row>
					<Row>
						<InputField placeholder="Vorname" value={order.customer.forename} className="grid-col-6" />
						<InputField placeholder="Nachname" value={order.customer.surname} className="grid-col-6"  />
					</Row>
					<Row>
						<InputField placeholder="Straße" value={order.customer.street} />
					</Row>
					<Row>
						<InputField placeholder="Nameszusatz" value={order.customer.zip} className="grid-col-6"  />
						<InputField placeholder="Nameszusatz" value={order.customer.city} className="grid-col-6"  />
					</Row>
				</div>
			<Row>
			</Row>
				<h4>Status</h4>
				begonnen - bearbeitet - versandt - bezahlt - abgeschlossen
			</Row>
			<Row>
				<Bill data={props.data} />
			</Row>
		</div>
	)
}

const ProductRow = props => {
	const product = props.data
	const productPrice = product.label.price || product.netto
	return (
		<tr>
			<td className="quantity">{product.quantity}</td>
			<td className="name">{product.group.nr}-{product.nr} {product.group.name} {product.type} ({product.label.name})</td>
			<td className="netto">{productPrice} €</td>
			<td className="discount">{product.discount}%</td>
			<td className="tax">{product.taxPrice} € ({product.tax}%)</td>
			<td className="brutto">{product.brutto} €</td>
			<td className="total">{product.total} €</td>
		</tr>
	)
}

const Bill = props => {
	const company = props.data.company
	const billMeta = props.data.billMeta
	const order = props.data.order
	const bill = order.bill
	const parser = new DOMParser()

	return (
		<HoverBox className="bill">
			<Row>
				<div className="bill__logo grid-col-8">
					<img src={ require("../../pics/" + company.logo) } />
				</div>
				<div className="bill__info grid-col-4">
					<table>
						<tbody>
							<tr><td>Rechnungsnr.</td><td>{bill.nr}</td></tr>
							<tr><td>Kundennr.</td><td>{bill.customer.nr}</td></tr>
							<tr><td>Rechnungsdatum</td><td>{bill.created}</td></tr>
							<tr><td>Lieferdatum</td><td>{order.created}</td></tr>
						</tbody>
					</table>
					Bitte bei Zahlung angeben.
				</div>
			</Row>
			<Row>
				<div className="grid-col-6">
					<div className="bill__from">
						{company.name} · {company.street} · {company.zip} {company.city}
					</div>
					<ul className="bill__to">
						<li>{bill.customer.gender}</li>
						<li>{bill.customer.forename} {bill.customer.surname}</li>
						<li>{bill.customer.street}</li>
						<li>{bill.customer.zip} {bill.customer.city}</li>
					</ul>
				</div>
			</Row>
			<Row>
				<h2>Rechnung</h2>
				{ billMeta.introText }
			</Row>
			<Row>
				<table className="bill__articles grid-col-12">
					<tbody>
						<tr>
							<th className="quantity">Menge</th>								
							<th className="name">Artikel</th>
							<th className="netto">Netto</th>
							<th className="discount">Rabatt</th>
							<th className="tax">MwSt.</th>
							<th className="brutto">brutto</th>
							<th className="total">gesamt</th>
						</tr>
						{ order.products.map(product => <ProductRow data={product} />) }
						<tr>
							<td colSpan="6" className="sum">Summe</td><td className="total">{order.total} €</td>
						</tr>
					</tbody>
				</table>
			</Row>
			<Row>
				{ billMeta.greetings }
			</Row>
			<Row className="bill__company-infos">
				<div className="grid-col-4">
					<ul>
						<li>{company.name}</li>
						<li>{company.owner}</li>
						<li>{company.street}</li>
						<li>{company.zip + company.city}</li>
						<li>{company.phone}</li>
						<li>{company.email}</li>
						<li>{company.website}</li>
					</ul>
				</div>
				<div className="grid-col-4">
					<ul>
						<li>{company.bank}</li>
						<li>{company.iban}</li>
						<li>{company.bic}</li>
					</ul>
				</div>
				<div className="grid-col-4">
					<ul>
						<li>{company.taxOffice}</li>
						<li>{company.taxNr}</li>
					</ul>
				</div>
			</Row>
		</HoverBox>
	)
}