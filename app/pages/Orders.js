import React from 'react'

import { AddBtnMain } from '../components/AddBtn'
import { FilterBarOrders } from '../components/FilterBar'
import SearchField from '../components/SearchField'
import Pagination from '../components/Pagination'

import { OrdersList } from '../containers/BrowseList'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				
				<AddBtnMain />
				
				<div className="row">
					<FilterBarOrders />
					<SearchField />
					<Pagination />
				</div>

				<OrdersList />
				
			</main>
		)
	}
}