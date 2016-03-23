import React from 'react'

import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import Row from '../components/Row'
import BrowseList from '../components/BrowseList'
import Dialog from '../components/Dialog'

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
				
				<Dialog type="order" data={{
					company: mockupData.company,
					billMeta: mockupData.billMeta,
					order: mockupData.orders[0]
				}} />

			</main>
		)
	}
}