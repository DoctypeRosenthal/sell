import React from 'react'

class Navigation extends React.Component {
	render() {
		return (
			<nav className="nav">
				<a href="#">Startseite</a>
				<a href="#" className="js-selected">Kunden</a>
				<a href="#">Bestellungen</a>
				<a href="#">Produkte</a>
				<a href="#">Einstellungen</a>
				<a href="#">Protokoll</a>
			</nav>
		)
	}
}

export default Navigation