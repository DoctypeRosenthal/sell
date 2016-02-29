import React from 'react'

import { Link } from 'react-router'
import { AddBtnSmall } from './AddBtn'

export const CustomerRow = (props) => {
	let row = this.props.data
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

export const ProductRow = (props) => {
	let row = props.data

	return (
		<li>
	    	<div className="group">
		    	<div className="group__pic">
		    		<img src={ require("file?name=[sha512:hash:base64:7].[ext]!../pics/NochSchon-150x135.jpg") } />
		    	</div>
	    		<div className="group__date">20.10.14</div>
	    		<div className="group__title">Noch:Schon - 301</div>
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
		        	<li>
						<div className="nr">2</div>
						<div className="type">CD</div>
						<div className="price">17,00 €</div>
						<div className="quantity">100</div>
						<div className="labels">
							<AddBtnSmall /><button>VVK</button><button>Geschenk</button><button>Händlerabgabepreis</button><button>Normalpreis</button><button>Promo</button>
						</div>				        	
		        	</li>
		        	<li>
						<div className="nr">3</div>
						<div className="type">DVD</div>
						<div className="price">20,00 €</div>
						<div className="quantity">50</div>
						<div className="labels"><AddBtnSmall /><button>Label</button></div>
		        	</li>
		        	<li>
						<div className="nr">9999</div>
						<div className="type">LP</div>
						<div className="price">30,00 €</div>
						<div className="quantity">20</div>
						<div className="labels"><AddBtnSmall /><button>Label</button></div>
		        	</li>
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