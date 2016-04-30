import React from 'react'

import Navigation from './Navigation'
import { AddBtn } from './Buttons'
import SearchField from './SearchField'

export default class Header extends React.Component { 

	constructor(props) {
		super(props)
	}


	getAction() {
		let { store, actions } = this.props,
			state = () => store.getState()

		switch(state().activePage) {
			case 'customers':
				return () => {
					store.dispatch(actions.createCustomer())
					store.dispatch(actions.editNewCustomer(state()))
				}
			case 'orders':
				return () => {
					store.dispatch(actions.createOrder(state()))
					store.dispatch(actions.editNewOrder(state()))
				}
			case 'products':
				return () => {
					// create and edit new product group
				}
		}	
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

	render() {
		return (
			<header>
				<Navigation page={this.props.store.getState().activePage}/>
				{ this.getTools() }
			</header>
		)
	}
}
