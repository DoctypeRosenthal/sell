import React from 'react'

import { AddBtnMain } from '../components/AddBtn'
import { FilterBarProducts } from '../components/FilterBar'
import SearchField from '../components/SearchField'
import Pagination from '../components/Pagination' 

import { ProductsList } from '../containers/BrowseList'

export default class Products extends React.Component {
	render() {
		return (
			<main>
				<AddBtnMain />
				
				<div className="row">
					<FilterBarProducts />
					<SearchField />
					<Pagination />
				</div>

				<ProductsList />

			</main>
		)
	}
}