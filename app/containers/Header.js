import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header id="header">
				<h2 id="sell-logo">Sell.</h2>
				<input id="global-search"/>
				<a href="#">Lorenz Rosenthal</a>
			</header>
		)
	}
}

export default Header