import React from 'react'

import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import Row from '../components/Row'
import BrowseList from '../components/BrowseList'

/* mockup data */
import mockupData from '../mockup.json'

export default class Customers extends React.Component {
	render() {
		return (
			<main>
				<Row>
					<FilterBar type="customers" />
					<Pagination />
				</Row>

				<BrowseList type="customers" data={mockupData.customers} />
			</main>
		)
	}
}