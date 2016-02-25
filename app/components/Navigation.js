import React from 'react'

import { Link } from 'react-router'

export default class Navigation extends React.Component {
	render() {
		return (
			<nav className="nav">
				<Link to="/">Startseite</Link>
				<Link to="/customers">Kunden</Link>
				<Link to="/orders">Bestellungen</Link>
				<Link to="/products" className="js-selected">Produkte</Link>
				<Link to="/options">Einstellungen</Link>
				<Link to="/protocol">Protokoll</Link>
			</nav>
		)
	}
}