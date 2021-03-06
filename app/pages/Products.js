import React from 'react'

import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination' 
import Row from '../components/Row'
import { ProductsList } from '../components/BrowseList'

export default class Products extends React.Component {
	render() {
		let storeState = this.props.store.getState()
		return (
			<main>
				<Row>
					<Pagination />
				</Row>

				<ProductsList groups={storeState.productGroups}/>
			</main>
		)
	}
}