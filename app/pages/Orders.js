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
		let storeState = this.props.store.getState()
		return (
			<main>
				<Row>
					<FilterBar type="orders" route={storeState.routing.locationBeforeTransitions.pathname} />
					<Pagination />
				</Row>

				<OrdersList orders={storeState.orders} />
				
			</main>
		)
	}
}