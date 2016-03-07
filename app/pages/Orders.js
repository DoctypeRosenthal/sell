import React from 'react'

import { AddBtnMain } from '../components/AddBtn'
import SearchField from '../components/SearchField'
import { FilterBarOrders } from '../components/FilterBar'
import Pagination from '../components/Pagination'

import { OrdersList } from '../containers/BrowseList'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				
				<div className="row h1">
					<AddBtnMain />
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