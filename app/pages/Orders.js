import React from 'react'

import { FilterBarOrders } from '../components/FilterBar'
import Pagination from '../components/Pagination'
import { OrdersList } from '../containers/BrowseList'
import Row from '../components/Row'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				<Row>
					<FilterBarOrders />
					<Pagination />
				</Row>

				<OrdersList />
				
			</main>
		)
	}
}