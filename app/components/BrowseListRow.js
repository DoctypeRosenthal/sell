import React from 'react'

import { Link } from 'react-router'
import { AddBtnSmall } from './AddBtn'

export const CustomerRow = (props) => {
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


export const OrderRow = (props) => {
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


const ProductRow = (props) => {
	let product = props.data

	return (
		<li>
			<div className="nr">{product.nr}</div>
			<div className="type">{product.type}</div>
			<div className="price">{product.price} €</div>
			<div className="quantity">{product.quantity}</div>
			<div className="labels">
				<AddBtnSmall />
				{ product.labels.map(label => <button>{label.name}</button>) }
			</div>				        	
    	</li>		
	)
}

export const ProductGroupRow = (props) => {
	let group = props.data

	return (
		<li>
	    	<div className="group">
		    	<div className="group__pic">
		    		<img src={ require("file?name=[sha512:hash:base64:7].[ext]!../pics/" + group.pic) } />
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

export const ProtocolRow = (props) => {
	let row = props.data
	let className = "action action--" + row.action

	return (
	    <li className={className}>
			<div>{row.description}</div>
			<Link to={row.link}>→ anschauen</Link>
			<em className="floatright">{row.date}</em>
	    </li>
	)
}