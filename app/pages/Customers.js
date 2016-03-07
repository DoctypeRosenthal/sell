import React from 'react'


import { AddBtnMain } from '../components/AddBtn'
import SearchField from '../components/SearchField'
import { FilterBarCustomers } from '../components/FilterBar'
import Pagination from '../components/Pagination'
import { CustomersList } from '../containers/BrowseList'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				<div className="row h1">
					<AddBtnMain />
					<SearchField />
				</div>
				
				<div className="row">
					<FilterBarCustomers />
					<Pagination />
				</div>

				<CustomersList />
				
			</main>
		)
	}
}