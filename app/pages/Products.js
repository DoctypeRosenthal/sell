import React from 'react'

import { FilterBarProducts } from '../components/FilterBar'
import Pagination from '../components/Pagination' 
import Row from '../components/Row'

import { ProductsList } from '../containers/BrowseList'

export default class Products extends React.Component {
	render() {
		return (
			<main>
				<Row>
					<FilterBarProducts />
					<Pagination />
				</Row>

				<ProductsList />

			</main>
		)
	}
}