import React from 'react'

/* route-independend components */
import UserBar from './components/UserBar'
import Navigation from './components/Navigation'

class App extends React.Component {
	render() {
		return(
			<div className="customers">
				<header>
					<UserBar />
				</header>

				<aside>
					<Navigation />
				</aside>

				{this.props.children}

				<footer>
					Lorenz Rosenthal (c) 2014 - 2016
				</footer>
			</div>
		)
	}
}

export default App