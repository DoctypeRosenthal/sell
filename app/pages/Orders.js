import React from 'react'

import Row from '../components/Row'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import BrowseList from '../components/BrowseList'

/* mockup data */
import mockupData from '../mockup.json'

export default class Orders extends React.Component {
	render() {
		return (
			<main>
				<Row>
					<FilterBar type="orders" />
					<Pagination />
				</Row>

				<BrowseList type="orders" data={mockupData.orders} />
				
			</main>
		)
	}
}