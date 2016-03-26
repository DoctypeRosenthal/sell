import React from 'react'

import Header from './components/Header'
import Notifier from './components/Notifier'

export default class App extends React.Component {
	render() {
		let pagename = this.props.location.pathname.replace('/', '') || 'home'

		return (
			<div className={pagename}>

				<Notifier show={true} mode="deleted" message="Ihr Bums wurde gelöscht." />

				<Header page={pagename} />

				{this.props.children}

				<footer>
					Lorenz Rosenthal © 2014 - 2016
				</footer>
			</div>
		)
	}
}
