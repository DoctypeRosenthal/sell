import React from 'react'

/* route-independend components */
import UserBar from './components/UserBar'
import Navigation from './components/Navigation'

export default class App extends React.Component {
	render() {
		let pageClass = this.props.location.pathname.replace('/', '')
		return(
			<div className={pageClass}>
				<header>
					<UserBar />
				</header>

				<aside>
					<Navigation />
				</aside>

				{this.props.children}

				<footer>
					Lorenz Rosenthal © 2014 - 2016
				</footer>
			</div>
		)
	}
}
