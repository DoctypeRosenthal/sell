import React from 'react'

import Navigation from './Navigation'
import { AddBtn } from './Buttons'
import SearchField from './SearchField'

const getAction = page => {
	switch(page) {
		case 'customers':
			return () => {
				// store.dispatch(actions.createCustomer())
				// store.dispatch(actions.editNewCustomer())
			}
		case 'orders':
			return () => {
				
				// store.dispatch(actions.createOrder())
				// store.dispatch(actions.editNewOrder())
			}
		case 'products':
			return () => {
				// create and edit new product group
			}
	}	
}

const getTools = page => {
	switch (page) {
		case 'customers':
		case 'orders':
		case 'products':
			return (	
				<div>
					<AddBtn type="main" onClick={getAction(page)}/>
					<SearchField />
				</div>
			)
		default:
			return
	}
}

export default props => 
	<header>
		<Navigation page={props.page}/>
		{ getTools(props.page) }
	</header>
