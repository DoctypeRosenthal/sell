import React from 'react'

import Row from '../components/Row'
import InputField from '../components/InputField'
import { SaveBtn } from '../components/Buttons'
import HoverBox from '../components/HoverBox'

const Dialog = props => {
	return (
		<div className="dialog__layer">
			<div className="dialog__scroll">
				<div className="dialog__center">
					<div className="dialog__window">
						<Row>
							<div className="dialog__header">{props.title}<SaveBtn type="big" /><div className="dialog__x ico-close"></div></div>
						</Row>
						<Row className="dialog__children">
							{props.children}
						</Row>
					</div>
				</div>
			</div>
		</div>
	)
}


export class CustomerDialog extends React.Component {
	render() {
		const customer = this.props.data
		return (
			<Dialog title="Neuer Kunde">
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
			</Dialog>
		)
	}
}


const OrderHeader = props => {
	const order = props.data
	return (
		<div>
			<h4>Lieferadresse</h4>
			<ul className="address-block__to">
				<li>{order.customer.prefix}</li>
				<li>{order.customer.forename} {order.customer.surname}</li>
				<li>{order.customer.street}</li>
				<li>{order.customer.zip} {order.customer.city}</li>
			</ul>
			<h4>Status</h4>
			begonnen - bearbeitet - versandt - bezahlt - abgeschlossen
		</div>
	)
}


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
		<HoverBox className="bill">
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
		</HoverBox>
	)
}

export class OrderDialog extends React.Component {
	render() {
		const order = this.props.data.order
		return (
			<Dialog title={ order.nr !== null ? 'Bestellung ' + order.nr + ' bearbeiten' : 'Neue Bestellung' }>
				<Row>
					<OrderHeader data={order} />
				</Row>
				<Row>
					<Bill data={this.props.data} />
				</Row>
			</Dialog>
		)
	}
}
