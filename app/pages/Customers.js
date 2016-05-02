import React from 'react'

import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import Row from '../components/Row'
import { CustomersList } from '../components/BrowseList'

export default class Customers extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let storeState = this.props.store.getState(),
			customerFilters = [
				{route: '/customers/all', title: 'Alle'}, 
				{route: '/customers/payed', title: 'Bezahlt'}, 
				{route: '/customers/due', title: 'Unbezahlt'}
			]

		return (
			<main>
				<Row>
					<FilterBar filters={customerFilters} route={location.pathname} />
					<Pagination />
				</Row>

				<CustomersList customers={storeState.customers} />
			</main>
		)
	}
}