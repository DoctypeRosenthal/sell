import React from 'react'

import Navigation from './Navigation'
import { AddBtn } from './Buttons'
import SearchField from './SearchField'

export default class props extends React.Component { 

	constructor(props) {
		super(props)
		this.state = {
			page: props.page
		}
	}

	getTools() {
		switch (this.state.page) {
			case 'customers':
			case 'orders':
			case 'products':
				return (	
					<div>
						<AddBtn type="main" onClick={this.getAction(this.state.page)}/>
						<SearchField />
					</div>
				)
			default:
				return
		}
	}

	getAction() {
		let { page } = this.state,
			{ store, actions } = this.props

		switch(page) {
			case 'customers':
				return () => {
					store.dispatch(actions.createCustomer())
					store.dispatch(actions.editNewCustomer())
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

	render() {
		return (
			<header>
				<Navigation page={this.state.page}/>
				{ this.getTools() }
			</header>
		)
	}
}
