import React from 'react'

import { OrderRow, CustomerRow, ProductRow } from '../components/BrowseListRow'

/* mockup data */
import mockupData from '../mockup.json'

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

export class ProductsList extends React.Component {
	render() {
		let mockup = mockupData.products

		return (
			<div>
				<ol className="browse-list browse-list__head">
					<li className="browse-list__actions">
					</li>

					<li className="browse-list__sorters">
						<div className="group">Veröffentlichung</div>
					</li>
				</ol>
				<ol className="browse-list browse-list__body">
					{ mockup.map(row => <ProductRow data={row} />) }
				</ol>
			</div>
		)
	}
}

export class ProtocolList extends React.Component {
	render() {
		let mockup = mockupData.protocol

		return (
			<div>
				<button className="delete-btn">Protokoll löschen</button>
				<ol className="browse-list browse-list__body">
					{ mockup.map(row => <ProtocolRow data={row} />) }
				</ol>
			</div>
		)
	}
}
