import React from 'react'

import classnames from 'classnames'

import Wrapper from '../components/Dialog/Wrapper'
import Customer from '../components/Dialog/Customer'
import Order from '../components/Dialog/Order'
import Product from '../components/Dialog/Product'

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
	}

	handleSave() {
		let { store, actions } = this.props,
			{ item, action, id } = this.state
		
		store.dispatch(actions.updateItem(item, action, id))
	}

	handleClose() {
		let { store, actions } = this.props
		store.dispatch(actions.hideDialog())
	}

	getChild() {
		let {company, billMeta, dialog } = this.props.store.getState()

		switch (dialog.action) {
			case EDIT_CUSTOMER_BY_ID:
			case EDIT_NEW_CUSTOMER:
				return <Customer customer={dialog.item} />
			case EDIT_ORDER_BY_ID:
			case EDIT_NEW_ORDER:
				return <Order order={dialog.item} company={company} billMeta={billMeta} />
			case EDIT_PRODUCT_BY_ID:
			case EDIT_NEW_PRODUCT:
				return <Product data={dialog.item} />
			default:
				return
		}
	}

	render() {
		let state = this.props.store.getState().dialog,
			wrapperProps = {
				title: state.title,
				visible: state.visible,
				onSave: this.handleSave.bind(this),
				onClose: this.handleClose.bind(this)
			}

		return <Wrapper {...wrapperProps}>{this.getChild()}</Wrapper>
	}
}