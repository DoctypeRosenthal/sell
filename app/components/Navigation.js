import React from 'react'

import { Link } from 'react-router'

export default class Navigation extends React.Component {
	render() {
		let page = this.props.page
		return (
			<nav className="nav">
				<Link to="/" className={ page == '' ? 'js-selected' : '' }>Startseite</Link>
				<Link to="/customers" className={ page == 'customers' ? 'js-selected' : '' }>Kunden</Link>
				<Link to="/orders" className={ page == 'orders' ? 'js-selected' : '' }>Bestellungen</Link>
				<Link to="/products" className={ page == 'products' ? 'js-selected' : '' }>Produkte</Link>
				<Link to="/options" className={ page == 'options' ? 'js-selected' : '' }>Einstellungen</Link>
				<Link to="/protocol" className={ page == 'protocol' ? 'js-selected' : '' }>Protokoll</Link>
			</nav>
		)
	}
}