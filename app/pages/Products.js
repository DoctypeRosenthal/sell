import React from 'react'

import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination' 
import Row from '../components/Row'
import { ProductsList } from '../components/BrowseList'

export default class Products extends React.Component {
	render() {
		let storeState = this.props.store.getState(),
			productFilters = [
				{route: '/products/all', title: 'Alle'}
			]
		return (
			<main>
				<Row>
					<FilterBar filters={productFilters} route={location.pathname} />
					<Pagination />
				</Row>

				<ProductsList groups={storeState.productGroups}/>
			</main>
		)
	}
}