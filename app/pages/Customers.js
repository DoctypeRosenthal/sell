import React from 'react'

import { FilterBarCustomers } from '../components/FilterBar'
import SearchField from '../components/SearchField'
import Pagination from '../components/Pagination' 
import { AddBtnMain } from '../components/AddBtn'

import { CustomersList } from '../containers/BrowseList'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				
				<AddBtnMain />
				
				<div className="row">
					<FilterBarCustomers />
					<SearchField />
					<Pagination />
				</div>

				<CustomersList />
				
			</main>
		)
	}
}