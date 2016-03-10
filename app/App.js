import React from 'react'

import Header from './components/Header'

export default class App extends React.Component {
	render() {
		let pagename = this.props.location.pathname.replace('/', '') || 'home'

		return (
			<div className={pagename}>
				
				<Header page={pagename} />

				{this.props.children}

				<footer>
					Lorenz Rosenthal © 2014 - 2016
				</footer>
			</div>
		)
	}
}
