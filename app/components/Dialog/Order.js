import React from 'react'

import Row from '../Row'
import InputField from '../InputField'
import HoverBox from '../HoverBox'

const OrderDialog = props => {
	const order = props.data
	return (
		<div>
			<Row>
				<h4>Lieferadresse</h4>
				<ul className="address-block__to">
					<li>{order.customer.prefix}</li>
					<li>{order.customer.forename} {order.customer.surname}</li>
					<li>{order.customer.street}</li>
					<li>{order.customer.zip} {order.customer.city}</li>
				</ul>
				<h4>Status</h4>
				begonnen - bearbeitet - versandt - bezahlt - abgeschlossen
			</Row>
			<Row>
				<Bill data={this.props.data} />
			</Row>
		</div>
	)
}

export default OrderDialog


const ProductRow = props => {
	const product = props.product
	const productPrice = product.label.price || product.netto
	return (
		<tr>
			<td className="quantity">{product.quantity}</td>
			<td className="name">{product.group.nr}-{product.nr} {product.group.name} {product.type} ({product.label.name})</td>
			<td className="netto">{productPrice} €</td>
			<td className="discount">{product.discount}%</td>
			<td className="tax">{product.taxPrice} € ({product.tax}%)</td>
			<th className="total">{product.total} €</th>
		</tr>
	)
}

const Bill = props => {
	const company = props.data.company
	const billMeta = props.data.billMeta
	const order = props.data.order
	const bill = order.bill
	return (
		<HoverBox>
			<div className="bill">
				<Row>
					<div className="grid-col-6">
						<div className="bill__logo">
							<img src="" />
						</div>
						<div className="bill__from">
							{company.name} · {company.owner} · {company.street} · {company.zip + company.city}
						</div>
						<ul className="bill__to">
							<li>{bill.customer.prefix}</li>
							<li>{bill.customer.forename} {bill.customer.surname}</li>
							<li>{bill.customer.street}</li>
							<li>{bill.customer.zip} {bill.customer.city}</li>
						</ul>
					</div>
					<div className="bill__info grid-col-6">
						<h3>Rechnung</h3>
						<table>
							<tbody>
								<tr>
									<td>Nr.</td><td>{bill.nr}</td>
								</tr>
								<tr>
									<td>Kundennr.</td><td>{bill.customer.nr}</td>
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
							{ order.products.map(product => <ProductRow product={product} />) }
							<tr>
								<th colSpan="5">Summe der Bestellung</th><th>{order.total} €</th>
							</tr>
						</tbody>
					</table>
				</Row>
				<Row>
					{ billMeta.greetings }
				</Row>
				<Row className="bill__company-infos">
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
						<li>{company.taxOffice}</li>
						<li>{company.taxNr}</li>
					</ul>
				</Row>
			</div>
		</HoverBox>
	)
}