import React from 'react'

import { ProtocolList } from '../components/BrowseList'

export default class Protocol extends React.Component {
	render() {
		let storeState = this.props.store.getState()
		return (
			<main>
				<ProtocolList protocol={storeState.protocol} />
			</main>
		)
	}
}