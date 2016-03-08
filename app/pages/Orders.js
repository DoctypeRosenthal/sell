import React from 'react'

import { AddBtn } from '../components/Buttons'
import SearchField from '../components/SearchField'
import { FilterBarOrders } from '../components/FilterBar'
import Pagination from '../components/Pagination'
import { OrdersList } from '../containers/BrowseList'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				
				<div className="row h1">
					<AddBtn type="main"/>
					<SearchField />
				</div>

				<div className="row">
					<FilterBarOrders />
					<Pagination />
				</div>

				<OrdersList />
				
			</main>
		)
	}
}