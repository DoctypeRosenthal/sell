import React from 'react'
import { ListHead, ListBody } from '../components/ProductList'

export default class Products extends React.Component {
	render() {
		return (
			<main>
				<div className="row">
					
					<input className="search-field--main" type="text" placeholder="Suchen..." />
					
					<button className="add-btn add-btn--main"><i className="ico-add"></i>Neu</button>

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