import React from 'react'

import { Link } from 'react-router'

const Navigation = (props) => {
	let page = props.page

	let selected = 'js-selected ico-angle-right'
	return (
		<nav className="nav">
			<Link to="/" className={ page == 'home' ? selected : '' }>Startseite</Link>
			<Link to="/customers" className={ page == 'customers' ? selected : '' }>Kunden</Link>
			<Link to="/orders" className={ page == 'orders' ? selected : '' }>Bestellungen</Link>
			<Link to="/products" className={ page == 'products' ? selected : '' }>Produkte</Link>
			<Link to="/options" className={ page == 'options' ? selected : '' }>Einstellungen</Link>
			<Link to="/protocol" className={ page == 'protocol' ? selected : '' }>Protokoll</Link>
			<Link to="/#" className="logout">Logout</Link>
		</nav>
	)
}

export default Navigation