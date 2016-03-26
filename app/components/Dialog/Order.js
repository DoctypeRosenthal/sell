import React from 'react'

import Row from '../Row'
import InputField from '../InputField'
import HoverBox from '../HoverBox'
import { AddBtn } from '../Buttons'

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
	const netto = product.label.netto || product.netto
	return (
		<Row>
			<div className="quantity">{product.quantity}</div>
			<div className="name">{product.group.nr}-{product.nr} {product.group.name} {product.type} ({product.label.name})</div>
			<div className="netto">{product.netto} €</div>
			<div className="netto">{product.totalNetto} €</div>
			<div className="brutto">{product.totalBrutto} €</div>
		</Row>
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
				<InputField className="grid-col-8" type="image" value={company.logo} height="97" />
				<div className="grid-col-4 textright">
					<div className="grid-col-7">Kundennr.</div>
					<div className="grid-col-5">{bill.customer.nr}</div>
					<br />
					<div className="grid-col-7">Rechnungsdatum</div>
					<InputField className="grid-col-5" value={bill.created} />
					<br />
					<div className="grid-col-7">Lieferdatum</div>
					<InputField className="grid-col-5" value={order.created} />
					<br /><br />
					Bitte bei Zahlung angeben.
				</div>
			</Row>
			<Row>
				<div className="grid-col-6">
					<div className="bill__sender" >
						<InputField value={company.name + ' · ' + company.street + ' · ' + company.zip + ' ' + company.city} />
					</div>					
					<div className="bill__recipient">
						{bill.customer.gender}<br />
						{bill.customer.forename} {bill.customer.surname}<br />
						{bill.customer.street}<br />
						{bill.customer.zip} {bill.customer.city}<br />
					</div>
				</div>
			</Row>
			<Row><br /></Row>
			<h2>Rechnung {bill.nr}</h2>
			<Row className="bill__articles">
				<Row className="bill__article-sorters">
					<div className="quantity">Menge</div>								
					<div className="name">Artikel</div>
					<div className="netto">Einzelnetto</div>
					<div className="netto">Gesamtnetto</div>
					<div className="brutto">Gesamtbrutto</div>
				</Row>
				{ 
					order.products.map(product => <ProductRow data={product} />) 
				}
				<Row className="textcenter">
					<AddBtn type="medium" title="Artikel hinzufügen" />
				</Row>
				<Row>
					<div className="grid-col-5">
						<Row>
							<div className="grid-col-7">Brutto</div>
							<div className="grid-col-5">{order.brutto} €</div>
						</Row>
						<Row>
							<div className="grid-col-7">Daraus {order.taxRate}% USt.</div>
							<div className="grid-col-5">{order.tax} €</div>
						</Row>
						<Row>
							<div className="grid-col-7">Versandkosten</div>
							<div className="grid-col-5">{order.shippingCosts} €</div>
						</Row>
						<Row className="sum">
							<div className="grid-col-7">Summe</div>
							<div className="grid-col-5">{order.total} €</div>
						</Row>
					</div>
				</Row>
			</Row>
			<Row>
				<InputField type="multi-line" value={billMeta.greetings} />
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