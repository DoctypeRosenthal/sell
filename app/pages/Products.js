import React from 'react'

import { AddBtnMain } from '../components/AddBtn'
import SearchField from '../components/SearchField'
import { FilterBarProducts } from '../components/FilterBar'
import Pagination from '../components/Pagination' 

import { ProductsList } from '../containers/BrowseList'

export default class Products extends React.Component {
	render() {
		return (
			<main>
				<div className="row h1">
					<AddBtnMain />
					<SearchField />
				</div>
				
				<div className="row">
					<FilterBarProducts />
					<Pagination />
				</div>

				<ProductsList />

			</main>
		)
	}
}