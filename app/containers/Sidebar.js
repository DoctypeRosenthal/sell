import React from 'react'

class Sidebar extends React.Component {
	render() {
		return(
			<aside id="sidebar">
				<nav>
					<a href="#" className="selected">Kunden</a>
					<a href="#">Bestellungen</a>
					<a href="#">Produkte</a>
					<a href="#">Einstellungen</a>
					<a href="#">Protokoll</a>
				</nav>
			</aside>
		)
	}
}

export default Sidebar
