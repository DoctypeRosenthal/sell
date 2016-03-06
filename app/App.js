import React from 'react'

/* route-independend components */
import Navigation from './components/Navigation'

export default class App extends React.Component {
	render() {
		let pageClass = this.props.location.pathname.replace('/', '') || 'home'
		return(
			<div className={pageClass}>

				<aside>
					<Navigation page={pageClass}/>
				</aside>

				{this.props.children}

				<footer>
					Lorenz Rosenthal © 2014 - 2016
				</footer>
			</div>
		)
	}
}
