import React from 'react'
import { Link } from 'react-router'

import Navigation from './Navigation'
import { AddBtn } from './Buttons'
import SearchField from './SearchField'

/**
 * Returns a URL-query to open the Dialog that matches the current page 
 * @param  {string} page The current page
 * @return {string}      A URL-query
 */
const getHref = page => {
	switch(page) {
		case 'customers':
			return {
				pathname: '/customers',
				query: { new: 'customer' }
			}
		case 'orders':
			return {
				pathname: '/orders',
				query: { new: 'order' }
			}
		case 'products':
			return {
				pathname: '/products',
				query: { new: 'product' }
			}
	}
}

const getTools = page => {
	switch (page) {
		case 'customers':
		case 'orders':
		case 'products':
			return 	<div>
						<Link to={ getHref(page) }><AddBtn type="main"/></Link>
						<SearchField />
					</div>
		default:
			return 
	}
}

export default props => 
	<header>
		<Navigation page={props.page}/>
		{ getTools(props.page) }
	</header>
