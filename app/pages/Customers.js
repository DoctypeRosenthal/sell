import React from 'react'


import { AddBtn } from '../components/Buttons'
import SearchField from '../components/SearchField'
import { FilterBarCustomers } from '../components/FilterBar'
import Pagination from '../components/Pagination'

import { CustomersList } from '../containers/BrowseList'
import { CustomerDialog } from '../containers/Dialog'

export default class Customers extends React.Component {

	render() {

		return (
			<main>
				<div className="row h1">
					<AddBtn type="main" />
					<SearchField />
				</div>
				
				<div className="row">
					<FilterBarCustomers />
					<Pagination />
				</div>

				<CustomersList />
				
				<CustomerDialog />

			</main>
		)
	}
}