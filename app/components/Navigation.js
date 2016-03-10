import React from 'react'

import { Link } from 'react-router'

const Navigation = (props) => {
	const ico = () => <i className="ico-angle-down"></i>
	const selectState = (string, page = props.page) => page === string ? ' js-selected' : ''
	
	return (
		<nav className="nav">
			<Link to="/" className={ selectState('home') }>Start{ ico() }</Link>
			<Link to="/customers" className={ selectState('customers') }>Kunden{ ico() }</Link>
			<Link to="/orders" className={ selectState('orders') }>Bestellungen{ ico() }</Link>
			<Link to="/products" className={ selectState('products') }>Produkte{ ico() }</Link>
			<Link to="/options" className={ selectState('options') }>Einstellungen{ ico() }</Link>
			<Link to="/protocol" className={ selectState('protocol') }>Protokoll{ ico() }</Link>
			<Link to="/#" className="logout">Logout</Link>
		</nav>
	)
}

export default Navigation