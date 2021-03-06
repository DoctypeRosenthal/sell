import React from 'react'

import Row from '../Row'
import InputField from '../InputField'
import HoverBox from '../HoverBox'
import { AddBtn, PrintBtn } from '../Buttons'

import { calcTaxMoney, calcNetto, calcBrutto, formatDate } from '../../utils'

import * as selectors from '../../selectors'

export default class OrderDialog extends React.Component {

	constructor(props) {
		super(props)
		console.log(props)
	}

	render() {
		const address = this.props.order.address,
			storeState = this.props.store.getState(),
			billProps = {
				order: this.props.order,
				company: storeState.company,
				billMeta: storeState.billMeta
			}
		return (
			<div className="order">
				<Row>
					<h4>Status</h4>
					begonnen - bearbeitet - versandt - bezahlt - abgeschlossen
				</Row>
				<Row>
					<div className="shipping-address grid-col-6">
						<h4>Lieferadresse</h4>
						<Row className="shipping-address__showcase">
							{address.prefix}<br />
							{address.forename} {address.surname}<br />
							{address.street}<br />
							{address.zip} {address.city}
							<div className="shipping-address__editor">
								<InputField value="" className="bold" placeholder="Kunden suchen oder hinzufügen" />
							</div>
						</Row>
					</div>
				</Row>
				<Row>
					<Bill {...billProps} />
				</Row>
			</div>
		)
	}
}

const getArticlePrice = article => !!article.label.price ? article.label.price : article.price
const calcOrderTotal = order => {
	if (order.articles.length === 0) {
		return 0
	}

	return order.articles.map(x => x.quantity * getArticlePrice(x)) // first create an Array of order bruttos
				  		 .reduce((prevBrutto, curBrutto) => prevBrutto + curBrutto) // then sum up the bruttos and return that value
}

const ArticleRow = ({article, order}) => {
	let	price = getArticlePrice(article),
		totalNetto = calcNetto(price, order.taxRate) * article.quantity || 0,
		totalBrutto = calcBrutto(totalNetto, order.taxRate) || 0

	return (
		<Row>
			<div className="quantity">{article.quantity || 0}</div>
			<div className="name">{article.group.nr}-{article.nr} {article.group.name} {article.type} {article.label.name ? '(' + article.label.name + ')' : ''}</div>
			<div className="price">{price.toFixed(2)} €</div>
			<div className="netto">{totalNetto.toFixed(2)} €</div>
			<div className="brutto">{totalBrutto.toFixed(2)} €</div>
		</Row>
	)
}

const Bill = ({company, billMeta, order}) => {
	let bill = order.bill,
		address = bill.address,
		orderTotal = calcOrderTotal(order) || 0,
		taxMoney = calcTaxMoney(orderTotal, order.taxRate) || 0

	return (
		<HoverBox className="bill">
			<Row className="bill__tools">
				<h3><PrintBtn type="big" /></h3>
			</Row>
			
			<Row>
				<InputField className="grid-col-8" type="image" value={company.logo} height="97" />
				<div className="grid-col-4 textright">
					<div className="grid-col-7">Kundennr.</div>
					<div className="grid-col-5">{order.address.nr}</div>
					<br />
					<div className="grid-col-7">Rechnungsdatum</div>
					<InputField className="grid-col-5" value={formatDate(bill.created, 'de-DE')} />
					<br />
					<div className="grid-col-7">Lieferdatum</div>
					<InputField className="grid-col-5" value={formatDate(order.created, 'de-DE')} />
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
						{address.gender}<br />
						{address.forename} {address.surname}<br />
						{address.street}<br />
						{address.zip} {address.city}<br />
					</div>
				</div>
			</Row>
			<Row><br /></Row>
			<h2>Rechnung {bill.nr}</h2>
			<Row className="bill__articles">
				<Row className="bill__article-sorters">
					<div className="quantity">Menge</div>								
					<div className="name">Artikel</div>
					<div className="price">Einzelpreis</div>
					<div className="netto">netto</div>
					<div className="brutto">brutto</div>
				</Row>
				{ 
					order.articles.map(x => <ArticleRow article={x} order={order} />) 
				}
				<Row className="textcenter">
					<AddBtn type="medium" title="Artikel hinzufügen" />
				</Row>
				<Row>
					<div className="grid-col-5">
						<Row>
							<div className="grid-col-7">Brutto</div>
							<div className="grid-col-5">{orderTotal.toFixed(2)} €</div>
						</Row>
						<Row>
							<div className="grid-col-7">Daraus {order.taxRate}% USt.</div>
							<div className="grid-col-5">{taxMoney.toFixed(2)} €</div>
						</Row>
						<Row>
							<div className="grid-col-7">Versandkosten</div>
							<div className="grid-col-5">{order.shippingCosts.toFixed(2)} €</div>
						</Row>
						<Row className="sum">
							<div className="grid-col-7">Summe</div>
							<div className="grid-col-5">{(orderTotal + order.shippingCosts).toFixed(2)} €</div>
						</Row>
					</div>
				</Row>
			</Row>
			<Row>
				<InputField multiLine="true" value={billMeta.greetings} />
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