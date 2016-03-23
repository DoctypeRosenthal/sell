import React from 'react'

import BrowseList from '../components/BrowseList'

export default class Protocol extends React.Component {
	render() {
		return (
			<main>
				<BrowseList type="protocol" />
			</main>
		)
	}
}