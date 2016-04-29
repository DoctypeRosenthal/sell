import React from 'react'

import classnames from 'classnames'

import Wrapper from '../components/Dialog/Wrapper'
import Customer from '../components/Dialog/Customer'
import Order from '../components/Dialog/Order'
import Product from '../components/Dialog/Product'

import translations from '../translations.json'

import {
	EDIT_NEW_PRODUCT, EDIT_NEW_ORDER, EDIT_NEW_CUSTOMER,
	EDIT_PRODUCT_BY_ID, EDIT_ORDER_BY_ID, EDIT_CUSTOMER_BY_ID
} from '../constants'

/**
 * The stateful Dialog Container Component
 */
export default class Dialog extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = {
	    	item: undefined,
	    	title: '',
	    	visible: false
	    }
	}

	getVisibility(action) {
		switch(action) {
	    	case EDIT_NEW_CUSTOMER:
			case EDIT_NEW_ORDER:
			case EDIT_NEW_PRODUCT:
			case EDIT_CUSTOMER_BY_ID:
			case EDIT_PRODUCT_BY_ID:
			case EDIT_ORDER_BY_ID: 
				return true
			default:
				return false
	    }
	}

	componentWillReceiveProps(nextProps) {
		// store has triggered a view-update by passing fresh props
		let { selectors, actions, store } = nextProps,
	    	{ id, action } = store.getState().dialog,
	    	nextState = {
		    	item: this.getItem(action, id),
		    	title: this.getTitle(action),
		    	visible: this.getVisibility(action)
		    }

		this.setState(nextState)
	}

	getTitle(action) {
		if (!action) return
		let map = translations.DE.dialog
		return map[action] || ''
	}

	getItem(action, id) {
		let { selectors, store } = this.props,
			state = store.getState()

		switch(action) {
	    	case EDIT_CUSTOMER_BY_ID:
	    		return selectors.getCustomerById(id, state)
			case EDIT_PRODUCT_BY_ID:
				return selectors.getProductById(id, state)
			case EDIT_ORDER_BY_ID: 
				return selectors.getOrderById(id, state)
	    	case EDIT_NEW_CUSTOMER:
	    		return selectors.getLatestCustomer(state)
			case EDIT_NEW_ORDER:
				return selectors.getLatestOrder(state)
			case EDIT_NEW_PRODUCT:
				return selectors.getLatestProduct(state)
		}		
	}

	handleSave() {
		let { store, actions } = this.props,
			{ item, action, id } = this.state
		
		store.dispatch(actions.updateItem(item, action, id))
	}

	handleClose() {
		alert('Soll das Fenster geschlossen werden? Pupsipusi?????')
	}

	getChild() {
		let {company, billMeta, dialog } = this.props.store.getState(),
			{ item } = this.state

		switch (dialog.action) {
			case EDIT_CUSTOMER_BY_ID:
			case EDIT_NEW_CUSTOMER:
				return <Customer customer={item} />
			case EDIT_ORDER_BY_ID:
			case EDIT_NEW_ORDER:
				return <Order order={item} company={company} billMeta={billMeta} />
			case EDIT_PRODUCT_BY_ID:
			case EDIT_NEW_PRODUCT:
				return <Product data={item} />
			default:
				return
		}
	}

	render() {
		let { visible, title } = this.state,
			wrapperProps = {
				title,
				visible,
				onSave: this.handleSave.bind(this),
				onClose: this.handleClose.bind(this)
			}

		return <Wrapper {...wrapperProps}>{visible ? this.getChild() : ''}</Wrapper>
	}
}