/* mockup data */
import mockupData from '../mockup.json'

import React from 'react'
import { Link } from 'react-router'

import { AddBtn } from '../components/Buttons'

/*-----------------------------------------------------------------------------------------
 * CUSTOMERS
 *---------------------------------------------------------------------------------------*/

const CustomerRow = (props) => {
	let row = props.data
	return (
		<li>
			<div className="nr">{row.nr}</div>
			<div className="prefix">{row.prefix}</div>
			<div className="forename">{row.forename}</div>
			<div className="surname">{row.surname}</div>
			<div className="street">{row.street}</div>
			<div className="zip">{row.zip}</div>
			<div className="city">{row.city}</div>
			<div className="email">{row.email}</div>
		</li>
	)
}

export class CustomersList extends React.Component {
	render() {
		
		let mockup = mockupData.customers
			
		return (
			<div>
				<ol className="browse-list browse-list__head">
					<li className="browse-list__actions">
					</li>

					<li className="browse-list__sorters">
						<div className="nr">Nr.</div>
						<div className="prefix">Adresszusatz</div>
						<div className="forename">Vorname</div>
						<div className="surname">Nachname</div>
						<div className="street">Straße</div>
						<div className="zip">PLZ</div>
						<div className="city">Ort</div>
						<div className="email">eMail</div>
					</li>
				</ol>
				<ol className="browse-list browse-list__body">
					{ mockup.map(row => <CustomerRow data={row} />) }
				</ol>
			</div>
		)
	}
}

/*-----------------------------------------------------------------------------------------
 * ORDERS
 *---------------------------------------------------------------------------------------*/

const OrderRow = (props) => {
	let row = props.data

	return (
	    <li>
			<div className="order-nr">{row.nr}</div>
			<div className="bill-nr">{row.billNr}</div>
			<div className="created">{row.created}</div>
			<div className="customer-nr">{row.customerNr}</div>
			<div className="name">{row.name}</div>
			<div className="email">{row.email}</div>
			<div className="total">{row.total}</div>
			<div className="dispatched">{row.dispatched}</div>
	    </li>
	)
}

export class OrdersList extends React.Component {
	render() {

		let mockup = mockupData.orders
			
		return (
			<div>
				<ol className="browse-list browse-list__head">
					<li className="browse-list__actions">
					</li>

					<li className="browse-list__sorters">
						<div className="order-nr">Bestellnr</div>
						<div className="bill-nr">Rechngsnr</div>
						<div className="created">vom</div>
						<div className="customer-nr">Kundennr</div>
						<div className="name">Name</div>
						<div className="email">eMail</div>
						<div className="total">Gesamt</div>
						<div className="dispatched">versendet</div>
					</li>
				</ol>
				<ol className="browse-list browse-list__body">
					{ mockup.map(row => <OrderRow data={row} />) }
				</ol>
			</div>
		)
	}
}

/*-----------------------------------------------------------------------------------------
 * PRODUCTS
 *---------------------------------------------------------------------------------------*/

const ProductRow = (props) => {
	let product = props.data

	return (
		<li>
			<div className="nr">{product.nr}</div>
			<div className="type">{product.type}</div>
			<div className="price">{product.price} €</div>
			<div className="quantity">{product.quantity}</div>
			<div className="labels">
				<AddBtn type="small" />
				{ product.labels.map(label => <button>{label.name}</button>) }
			</div>				        	
    	</li>		
	)
}

const ProductGroupRow = (props) => {
	let group = props.data
	return (
		<li>
	    	<div className="group">
		    	<div className="group__pic">
		    		<img src={ require("../pics/" + group.pic) } />
		    	</div>
	    		<div className="group__date">{group.created}</div>
	    		<div className="group__title">{group.name} - {group.nr}</div>
	    	</div>
	        <div className="product">
		        <ol className="browse-list browse-list__head">
		        	<li className="browse-list__sorters">
						<div className="nr">#</div>
						<div className="type">Art</div>
						<div className="price">Preis</div>
						<div className="quantity">Auflage (Stk.)</div>
						<div className="labels">Labels</div>
		        	</li>
		        </ol>
		        <ol className="browse-list browse-list__body">
		        	{ group.products.map(product => <ProductRow data={product} />) }
		        </ol>
	        </div>
	    </li>
	)
}

export class ProductsList extends React.Component {
	render() {

		let mockup = mockupData.productGroups

		return (
			<div>
				<ol className="browse-list browse-list__head">
					<li className="browse-list__actions">
					</li>

					<li className="browse-list__sorters">
						<div className="group">Veröffentlichung</div>
						<div className="view-toggle"><button className="ico-list-view"></button><button className="ico-tile-view"></button></div>
					</li>
				</ol>
				<ol className="browse-list browse-list__body">
					{ mockup.map(row => <ProductGroupRow data={row} />) }
				</ol>
			</div>
		)
	}
}

/*-----------------------------------------------------------------------------------------
 * PROTOCOL
 *---------------------------------------------------------------------------------------*/

const ProtocolRow = (props) => {
	let row = props.data
	let className = "action action--" + row.action

	return (
	    <li className={className}>
			<div>{row.description}</div>
			<Link to={row.link} className="ico-go-to">&nbsp;anschauen</Link>
			<em className="floatright">{row.date}</em>
	    </li>
	)
}

export class ProtocolList extends React.Component {
	render() {
		let mockup = mockupData.protocol

		return (
			<div>
				<ol className="browse-list browse-list__head">
					<li className="browse-list__actions">
						<button className="delete-btn delete-btn--medium ico-trash">Protokoll löschen</button>
					</li>
				</ol>
				
				<ol className="browse-list browse-list__body">
					{ mockup.map(row => <ProtocolRow data={row} />) }
				</ol>
			</div>
		)
	}
}
