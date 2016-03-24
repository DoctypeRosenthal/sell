import React from 'react'

import BrowseList from '../components/BrowseList'

/* mockup data */
import mockupData from '../mockup.json'

export default class Protocol extends React.Component {
	render() {
		return (
			<main>
				<BrowseList type="protocol" data={mockupData.protocol} />
			</main>
		)
	}
}