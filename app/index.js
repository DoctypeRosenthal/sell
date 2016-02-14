/* Styles */
require('./index.sass')

/* React */
import React from 'react'
import { render } from 'react-dom'

/* Containters */
import Userbar from './containers/Userbar'
import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import Main from './containers/Main'
import Footer from './containers/Footer'

class App extends React.Component {
	render() {
		return(
			<div>
				<Userbar />
				<Sidebar />
				<Header />
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