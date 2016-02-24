import React from 'react'

import { Link } from 'react-router'

class Navigation extends React.Component {
	render() {
		return (
			<nav className="nav">
				<Link to='/'>Startseite</Link>
				<Link to='/customers' className="js-selected">Kunden</Link>
				<Link to='/orders'>Bestellungen</Link>
				<Link to='/products'>Produkte</Link>
				<Link to='/options'>Einstellungen</Link>
				<Link to='/protocol'>Protokoll</Link>
			</nav>
		)
	}
}

export default Navigation