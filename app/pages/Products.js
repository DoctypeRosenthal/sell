import React from 'react'

import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination' 
import Row from '../components/Row'
import BrowseList from '../components/BrowseList'

/* mockup data */
import mockupData from '../mockup.json'

export default class Products extends React.Component {
	render() {
		return (
			<main>
				<Row>
					<FilterBar type="products" route={this.props.store.getState().routing.locationBeforeTransitions.pathname} />
					<Pagination />
				</Row>

				<BrowseList type="products" data={mockupData.productGroups}/>

			</main>
		)
	}
}