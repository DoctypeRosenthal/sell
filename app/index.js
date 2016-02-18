/* Styles */
require('./styles/index.sass')

/* React */
import React from 'react'
import { render } from 'react-dom'

/* Containters */
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Main from './containers/Main'
import Footer from './containers/Footer'

class App extends React.Component {
	render() {
		return(
			<div className="customers">
				<Header />
				<Sidebar />
				<Main />
				<Footer />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)