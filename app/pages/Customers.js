import React from 'react'

import { FilterBarCustomers } from '../components/FilterBar'
import Pagination from '../components/Pagination'
import Row from '../components/Row'

import { CustomersList } from '../containers/BrowseList'
import { CustomerDialog } from '../containers/Dialog'

export default class Customers extends React.Component {

	render() {

		return (
			<main>
				<Row>
					<FilterBarCustomers />
					<Pagination />
				</Row>

				<CustomersList />
				
				<CustomerDialog />

			</main>
		)
	}
}