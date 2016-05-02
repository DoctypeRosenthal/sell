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
		let storeState = this.props.store.getState()
		return (
			<main>
				<Row>
					<FilterBar type="customers" route={storeState.routing.locationBeforeTransitions.pathname} />
					<Pagination />
				</Row>

				<CustomersList customers={storeState.customers} />
			</main>
		)
	}
}