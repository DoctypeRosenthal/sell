import React from 'react'
import { ListHead, ListBody } from '../components/CustomerList'
import { AddBtnMain } from '../components/AddBtn'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				
				<AddBtnMain />
				
				<div className="row">
					<ul className="filter-bar">
						<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
					</ul>
					
					<input className="search-field--main" type="text" placeholder="Suchen..." />
					
					<div className="pagination">
						<b>0</b> - <b>50</b> von <b>1200</b>
						<button className="ico-prev"></button>
						<button className="ico-next"></button>
					</div>
				</div>

				<ListHead />
				<ListBody />
				
			</main>
		)
	}
}