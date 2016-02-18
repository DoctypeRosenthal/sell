import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header>
				<h3 id="sell-logo">Sell.</h3>
				<input id="global-search" type="text"/>
				<a href="#">Lorenz Rosenthal</a>
			</header>
		)
	}
}

export default Header