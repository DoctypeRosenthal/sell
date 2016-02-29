import React from 'react'

export const FilterBarCustomers = (props) => {
	return (
		<ul className="filter-bar">
			<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
		</ul>
	)
}

export const FilterBarOrders = (props) => {
	return (
		<ul className="filter-bar">
			<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li><li>Versandt</li><li>Unversandt</li>
		</ul>
	)
}

export const FilterBarProducts = (props) => {
	return (
		<ul className="filter-bar">
			<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
		</ul>
	)
}