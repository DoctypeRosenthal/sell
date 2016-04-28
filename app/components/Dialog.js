import React from 'react'

import classnames from 'classnames'

import Wrapper from './Dialog/Wrapper'
import Customer from './Dialog/Customer'
import Order from './Dialog/Order'
import Product from './Dialog/Product'

import translations from '../translations.json'

/**
 * The stateful Dialog Container Component
 */
export default class Dialog extends React.Component {

	constructor(props) {
		
	    super(props)

	    

	    this.state = this.makeStateObject(props)
	}

	makeStateObject(props) {
		let { selectors, actions, store } = props,
	    	{ mode, id, type } = store.getState().dialog

	    return {
	    	type,
	    	mode,
	    	id,
	    	item: this.getItem(mode, type, id),
	    	title: this.getTitle(mode, type),
	    	visible: !!mode
	    }
	}

	componentWillReceiveProps(props) {
		this.setState(this.makeStateObject(props))
	}

	getTitle(mode, type) {
		if (!mode) return
		let map = translations.DE.dialog
		return map[mode][type] || ''
	}

	getItem(mode, type, id) {
		let { selectors, store, actions } = this.props
		
		if (mode === 'editing') {
			return selectors.getItemByID(id, type, store.getState())
		}

		if (mode === 'adding') {
			return selectors.getLatestItem(type, store.getState())
		}		
	}

	handleSave() {
		let { store, actions } = this.props,
			{ item, type, id } = this.state

		store.dispatch(actions.updateItem(type, item, id))
	}

	getChild(item) {
		let storeState = this.props.store.getState()
		switch (this.state.type) {
			case 'customer':
				return <Customer customer={item} />
			case 'order':
				return <Order order={item} company={storeState.company} billMeta={storeState.billMeta} />
			case 'product':
				return <Product data={item} />
			default:
				return <p>Sorry, No Dialog type found.</p>
		}
	}

	render() {
		let { visible, title, mode } = this.state,
			wrapperProps = {
				title,
				visible,
				onSave: this.handleSave.bind(this)
			}

		return <Wrapper {...wrapperProps}>{visible ? this.getChild(this.state.item) : ''}</Wrapper>
	}
}