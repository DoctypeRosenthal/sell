import React from 'react'
import { Link } from 'react-router'

import { AddBtn } from '../components/Buttons'

/*-----------------------------------------------------------------------------------------
 * CUSTOMERS
 *---------------------------------------------------------------------------------------*/

const CustomerRow = ({customer}) => {
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

export const CustomersList = ({customers}) => {
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
				{ customers.map(x => <CustomerRow customer={x} />) }
			</ol>
		</div>
	)
}

/*-----------------------------------------------------------------------------------------
 * ORDERS
 *---------------------------------------------------------------------------------------*/

const OrderRow = ({order}) => {
	return (
	    <li>
			<div className="order-nr">{order.nr}</div>
			<div className="bill-nr">{order.bill.nr}</div>
			<div className="created">{order.created}</div>
			<div className="customer-nr">{order.address.nr}</div>
			<div className="name">{order.address.name}</div>
			<div className="email">{order.address.email}</div>
			<div className="total">{order.total}</div>
			<div className="dispatched">{order.dispatched}</div>
	    </li>
	)
}

export const OrdersList = ({orders}) => {
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
				{ orders.map(x => <OrderRow order={x} />) }
			</ol>
		</div>
	)
}

/*-----------------------------------------------------------------------------------------
 * PRODUCTS
 *---------------------------------------------------------------------------------------*/

const ProductRow = ({product}) => {
	return (
		<li>
			<div className="nr">{product.nr}</div>
			<div className="type">{product.type}</div>
			<div className="price">{product.price} €</div>
			<div className="quantity">{product.quantity}</div>
			<div className="labels">
				<AddBtn type="small" />
				{ product.labels.map(x => <button>{x.name}</button>) }
			</div>				        	
    	</li>		
	)
}

const ProductGroupRow = ({group}) => {
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
		        	{ group.products.map(x => <ProductRow product={x} />) }
		        </ol>
	        </div>
	    </li>
	)
}

export const ProductsList = ({groups}) => {
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
				{ groups.map(x => <ProductGroupRow group={x} />) }
			</ol>
		</div>
	)
}

/*-----------------------------------------------------------------------------------------
 * PROTOCOL
 *---------------------------------------------------------------------------------------*/

const ProtocolRow = ({item}) => {
	let className = "action action--" + item.action
	return (
	    <li className={className}>
			<div>{item.description}</div>
			<Link to={item.link} className="ico-go-to">&nbsp;anschauen</Link>
			<em className="floatright">{item.date}</em>
	    </li>
	)
}

export const ProtocolList = ({protocol}) => {
	return (
		<div>
			<ol className="browse-list browse-list__head">
				<li className="browse-list__actions">
					<button className="delete-btn delete-btn--medium ico-trash">Protokoll löschen</button>
				</li>
			</ol>
			
			<ol className="browse-list browse-list__body">
				{ protocol.map(x => <ProtocolRow item={x} />) }
			</ol>
		</div>
	)
}
