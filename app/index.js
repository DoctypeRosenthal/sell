/* styles */
require('./styles/index.sass')

/* react */
import React from 'react'
import { render } from 'react-dom'

/* containters */
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Main from './containers/Main'
import Footer from './containers/Footer'

/* make App */
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

/* render dat shit!! :-D */
render(
	<App />,
	document.getElementById('app')
)