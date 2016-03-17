import React from 'react'

import { FilterBarOrders } from '../components/FilterBar'
import Pagination from '../components/Pagination'
import Row from '../components/Row'

import { OrdersList } from '../containers/BrowseList'
import { OrderDialog } from '../containers/Dialog'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				<Row>
					<FilterBarOrders />
					<Pagination />
				</Row>

				<OrdersList />
				
				<OrderDialog />

			</main>
		)
	}
}