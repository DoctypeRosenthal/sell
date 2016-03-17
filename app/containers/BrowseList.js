import React from 'react'
import { Link } from 'react-router'

import { AddBtn } from '../components/Buttons'

/*-----------------------------------------------------------------------------------------
 * CUSTOMERS
 *---------------------------------------------------------------------------------------*/

const CustomerRow = props => {
	let customer = props.customer
	return (
		<li>
			<div className="nr">{customer.nr}</div>
			<div className="prefix">{customer.prefix}</div>
			<div className="forename">{customer.forename}</div>
			<div className="surname">{customer.surname}</div>
			<div className="street">{customer.street}</div>
			<div className="zip">{customer.zip}</div>
			<div className="city">{customer.city}</div>
			<div className="email">{customer.email}</div>
		</li>
	)
}

export class CustomersList extends React.Component {
	render() {
		
		let customers = this.props.data
			
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
					{ customers.map(customer => <CustomerRow customer={customer} />) }
				</ol>
			</div>
		)
	}
}

/*-----------------------------------------------------------------------------------------
 * ORDERS
 *---------------------------------------------------------------------------------------*/

const OrderRow = props => {
	let order = props.order

	return (
	    <li>
			<div className="order-nr">{order.nr}</div>
			<div className="bill-nr">{order.bill.nr}</div>
			<div className="created">{order.created}</div>
			<div className="customer-nr">{order.customer.nr}</div>
			<div className="name">{order.customer.name}</div>
			<div className="email">{order.customer.email}</div>
			<div className="total">{order.total}</div>
			<div className="dispatched">{order.dispatched}</div>
	    </li>
	)
}

export class OrdersList extends React.Component {
	render() {

		let orders = this.props.data
			
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
					{ orders.map(order => <OrderRow order={order} />) }
				</ol>
			</div>
		)
	}
}

/*-----------------------------------------------------------------------------------------
 * PRODUCTS
 *---------------------------------------------------------------------------------------*/

const ProductRow = (props) => {
	let product = props.group
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
	let group = props.group
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

		let groups = this.props.productGroups

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
					{ groups.map(group => <ProductGroupRow group={group} />) }
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
		let protocol = mockupData.protocol
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
