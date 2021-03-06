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
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { ROUTES } from './routes'

/* mockup data */
import mockupData from './mockup.json'

const _INITIAL_STATE_ = mockupData // must be moved out later to the index-template!

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
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
		actions
	}
	return <Component {...extendedProps} />
}

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const renderDatShit = () => ReactDOM.render(
	<Router history={history} createElement={createElement} routes={ROUTES}/>,
  	document.getElementById('app')
)

/**
 * Update the store depending on the route.
 */
history.listen(location => {
	store.dispatch(actions.setPage(location.pathname))
})

/**
 * Whenever something in the store changes, the view is updated.
 */
store.subscribe(renderDatShit)

/**
 * In the beginning was the Word...
 */
renderDatShit()