import React from 'react'


export class FilterBarCustomers extends React.Component {
	render() {
		return (
			<ul className="filter-bar">
				<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
			</ul>
		)
	}
}

export class FilterBarOrders extends React.Component {
	render() {
		return (
			<ul className="filter-bar">
				<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li><li>Versandt</li><li>Unversandt</li>
			</ul>
		)
	}
}

export class FilterBarProducts extends React.Component {
	render() {
		return (
			<ul className="filter-bar">
				<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
			</ul>
		)
	}
}