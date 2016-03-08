import React from 'react'

import { Link } from 'react-router'

const Navigation = (props) => {
	let ico = 'ico-angle-right'
	let isPage = (string, page = props.page) => page === string ? ' js-selected' : ''
	
	return (
		<nav className="nav">
			<Link to="/" className={ ico + isPage('home') }>Startseite</Link>
			<Link to="/customers" className={ ico + isPage('customers') }>Kunden</Link>
			<Link to="/orders" className={ ico + isPage('orders') }>Bestellungen</Link>
			<Link to="/products" className={ ico + isPage('products') }>Produkte</Link>
			<Link to="/options" className={ ico + isPage('options') }>Einstellungen</Link>
			<Link to="/protocol" className={ ico + isPage('protocol') }>Protokoll</Link>
			<Link to="/#" className="logout">Logout</Link>
		</nav>
	)
}

export default Navigation