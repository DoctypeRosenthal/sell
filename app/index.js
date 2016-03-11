/* styles */
require('./styles/index.sass')

/* React */
import React from 'react'
import { render } from 'react-dom'

/* routing */
import { Router, Route, hashHistory } from 'react-router'

import App from './App'

/* pages */
import Home from './pages/Home'
import Customers from './pages/Customers'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Options from './pages/Options'
import Protocol from './pages/Protocol'
import Dialog from './containers/Dialog'

/* render dat shit!! */
render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/customers" component={Customers}>
				<Route path="/customers/:action" component={Dialog} />
			</Route>

		</Route>
	</Router>
	), document.getElementById('app'))
