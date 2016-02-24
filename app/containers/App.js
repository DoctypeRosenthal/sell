import React from 'react'

import UserBar from '../components/UserBar'
import Navigation from '../components/Navigation'
import Customers from '../pages/Customers'

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

				<Customers />

				<footer>
					Footer
				</footer>
			</div>
		)
	}
}

export default App