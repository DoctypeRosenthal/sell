import React from 'react'

import Navigation from './Navigation'
import { AddBtn } from './Buttons'
import SearchField from './SearchField'

export default class props extends React.Component { 

	constructor(props) {
		super(props)
	}


	getTools() {
		switch (this.props.store.getState().activePage) {
			case 'customers':
			case 'orders':
			case 'products':
				return (	
					<div>
						<AddBtn type="main" onClick={this.getAction()}/>
						<SearchField />
					</div>
				)
			default:
				return
		}
	}

	getAction() {
		let { store, actions } = this.props

		switch(store.getState().activePage) {
			case 'customers':
				return () => {
					store.dispatch(actions.createCustomer())
					store.dispatch(actions.editNewCustomer())
				}
			case 'orders':
				return () => {
					
					store.dispatch(actions.createOrder(store.getState()))
					store.dispatch(actions.editNewOrder())
				}
			case 'products':
				return () => {
					// create and edit new product group
				}
		}	
	}

	render() {
		return (
			<header>
				<Navigation page={this.props.store.getState().activePage}/>
				{ this.getTools() }
			</header>
		)
	}
}
