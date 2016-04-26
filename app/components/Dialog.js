import React from 'react'

import classnames from 'classnames'

import Wrapper from './Dialog/Wrapper'
import Customer from './Dialog/Customer'
import Order from './Dialog/Order'
import Product from './Dialog/Product'

export default class Dialog extends React.Component {

	constructor(props) {
	    super(props)

	    let { selectors, actions, store } = props,
	    	{ mode, id, type } = store.getState().dialog

	    this.state = {
	    	type,
	    	mode,
	    	id,
	    	item: this.getItem(mode, type, id),
	    	title: this.getTitle(mode, type),
	    	visible: !!mode
	    }
	}

	getTitle(mode, type) {
		const map = {
			adding: {
				customer: 'Neuer Kunde',
				order: 'Neue Bestellung',
				product: 'Neue Veröffentlichung'
			},
			editing: {
				customer: 'Kunde bearbeiten',
				order: 'Bestellung bearbeiten',
				product: 'Veröffentlichung bearbeiten'
			}
		}
		
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

	getChild() {
		switch (this.state.type) {
			case 'customer':
				return <Customer />
			case 'order':
				return <Orders />
			case 'product':
				return <Product />
			default:
				return 'pups'
		}
	}

	render() {
		let { visible, title, mode } = this.state,
			Child = this.getChild(),
			wrapperProps = {
				title,
				visible,
				onSave: this.handleSave().bind(this)
			}

		console.log('Kinder: ', Child)
		console.log('Data: ', this.state.item)

		return <Wrapper {...wrapperProps}><Child data={this.state.item} /></Wrapper>
	}
}

export class TodoItem extends React.Component {
	constructor(props) {
		
	    super(props)
	    this.state = {
	    	edit: false,
	      	text: this.props.text || ''
	    }
	}

	toggleEditing() {
		this.setState({edit: !this.state.edit})
	}

  	handleSubmit(evt) {
	    const text = evt.target.value.trim()
	    if (evt.keyCode === 13) {
	      	this.props.onSave(text)
	      	if (this.props.newTodo) {
	        	this.setState({ text: '' })
	      	}
	      	this.toggleEditing()
	    }
  	}

  	handleChange(evt) {
    	this.setState({ text: evt.target.value })
  	}

  	handleBlur(evt) {
    	if (!this.props.newTodo) {
      		this.props.onSave(evt.target.value)
    	}
    	this.toggleEditing()
  	}

  	inputField() {
  		return (
			<input 
		        type="text"
		        placeholder={this.props.placeholder}
		        autoFocus="true"
		        value={this.state.text}
		        onBlur={this.handleBlur.bind(this)}
		        onChange={this.handleChange.bind(this)}
		        onKeyDown={this.handleSubmit.bind(this)} 
		    />
  		)
  	}

  	span() {
		return <div>
				<input type="checkbox" onChange={this.props.onToggle} checked={this.props.completed}/>
				<span className={classnames({completed: this.props.completed})} onDoubleClick={this.toggleEditing.bind(this)}>{this.state.text}</span>
				<span className="todo-list__delete" onClick={this.props.onDelete}>❌</span>
			</div>
  	}

  	render() {
	    return (
	  		<li className="todo-list__item" key={this.props.key}>
				{ this.state.edit ? this.inputField() : this.span() }
			</li>
	    )
  	}
}