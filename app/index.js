/* styles */
require('./styles/index.sass')

/* React */
import React from 'react'
import ReactDOM from 'react-dom'

/* Redux */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers'
import * as actions from './actions'
import * as selectors from './selectors'

/* routing */
import { Router, Route, browserHistory } from 'react-router'
import { ROUTES } from './routes'

/* mockup data */
import mockupData from './mockup.json'

const _INITIAL_STATE_ = mockupData // must be moved out later to the index-template!

const store = createStore(
	combineReducers({
		...reducers
	}),
	_INITIAL_STATE_ // global. is rendered and sent by the server
)

/**
 * Adds custom properties to every Component.
 * 
 * @param  {React Component} Component 	[the Component to be rendered]
 * @param  {Object} 		 props     	[passed down props from Router Component]
 * @return {React Component}  			[Component with extended props]
 */
const createElement = (Component, props) => {
	let extendedProps = {
		...props,
		store,
		actions,
		selectors
	}
	return <Component {...extendedProps} />
}

const renderDatShit = () => ReactDOM.render(
	<Router history={browserHistory} createElement={createElement} routes={ROUTES}/>,
  	document.getElementById('app')
)

/**
 * Update the store depending on the route.
 */
browserHistory.listen(location => {
	store.dispatch(actions.setPage(location.pathname))

	if (!!location.query.new) {
		let storeState = store.getState()
		store.dispatch(actions.createItem(location.query, storeState))
	}

	if (!!location.query.new || !!location.query.edit) {
		store.dispatch(actions.setDialogMode(location.query))
	}
})

/**
 * Whenever something in the store changes, the view is updated.
 */
store.subscribe(renderDatShit)

/**
 * In the beginning was the Word...
 */
renderDatShit()