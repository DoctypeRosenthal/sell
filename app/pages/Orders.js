import React from 'react'

import { FilterBarOrders } from '../components/FilterBar'
import Pagination from '../components/Pagination'
import Row from '../components/Row'

import { OrdersList } from '../containers/BrowseList'
import { OrderDialog } from '../containers/Dialog'

/* mockup data */
import mockupData from '../mockup.json'

export default class Orders extends React.Component {
	render() {
		return (
			<main>
				<Row>
					<FilterBarOrders />
					<Pagination />
				</Row>

				<OrdersList data={mockupData.orders} />
				
				<OrderDialog data={{
					company: mockupData.company,
					billMeta: mockupData.billMeta,
					order: mockupData.orders[0]
				}} />

			</main>
		)
	}
}