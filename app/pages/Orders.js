import React from 'react'

import Row from '../components/Row'
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import { OrdersList } from '../components/BrowseList'

export default class Orders extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let storeState = this.props.store.getState(),
			orderFilters = [
				{route: '/orders/all', title: 'Alle'},
				{route: '/orders/started', title: 'Begonnen'},
				{route: '/orders/finished', title: 'Abgeschlossen'},
				{route: '/orders/dispatched', title: 'Versandt'},
				{route: '/orders/undispatched', title: 'Unversandt'},
				{route: '/orders/payed', title: 'Bezahlt'},
				{route: '/orders/due', title: 'Unbezahlt'}
			]

		return (
			<main>
				<Row>
					<FilterBar filters={orderFilters} route={location.pathname} />
					<Pagination />
				</Row>

				<OrdersList orders={storeState.orders} />
				
			</main>
		)
	}
}