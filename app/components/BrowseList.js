import React from 'react'
import { Link } from 'react-router'

import { AddBtn } from '../components/Buttons'

export default function BrowseList(props) {
	switch (props.type) {
		case 'products':
			return <ProductsList data={props.data} />
		case 'orders':
			return <OrdersList data={props.data} />
		case 'customers':
			return <CustomersList data={props.data} />
		case 'protocol':
			return <ProtocolList data={props.data} />
	}	
}

/*-----------------------------------------------------------------------------------------
 * CUSTOMERS
 *---------------------------------------------------------------------------------------*/

const CustomerRow = props => {
	let customer = props.data
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

const CustomersList = props => {
	let customers = props.data
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
				{ customers.map(customer => <CustomerRow data={customer} />) }
			</ol>
		</div>
	)
}

/*-----------------------------------------------------------------------------------------
 * ORDERS
 *---------------------------------------------------------------------------------------*/

const OrderRow = props => {
	let order = props.data
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

const OrdersList = props => {
	let orders = props.data
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
				{ orders.map(order => <OrderRow data={order} />) }
			</ol>
		</div>
	)
}

/*-----------------------------------------------------------------------------------------
 * PRODUCTS
 *---------------------------------------------------------------------------------------*/

const ProductRow = props => {
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

const ProductGroupRow = props => {
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

const ProductsList = props => {
	let groups = props.data
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
				{ groups.map(group => <ProductGroupRow data={group} />) }
			</ol>
		</div>
	)
}

/*-----------------------------------------------------------------------------------------
 * PROTOCOL
 *---------------------------------------------------------------------------------------*/

const ProtocolRow = (props) => {
	let item = props.data
	let className = "action action--" + item.action
	return (
	    <li className={className}>
			<div>{item.description}</div>
			<Link to={item.link} className="ico-go-to">&nbsp;anschauen</Link>
			<em className="floatright">{item.date}</em>
	    </li>
	)
}

const ProtocolList = props => {
	let protocol = props.data
	return (
		<div>
			<ol className="browse-list browse-list__head">
				<li className="browse-list__actions">
					<button className="delete-btn delete-btn--medium ico-trash">Protokoll löschen</button>
				</li>
			</ol>
			
			<ol className="browse-list browse-list__body">
				{ protocol.map(item => <ProtocolRow data={item} />) }
			</ol>
		</div>
	)
}
