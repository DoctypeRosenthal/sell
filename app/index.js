/* styles */
require('./styles/index.sass')

/* React */
import React from 'react'
import { render } from 'react-dom'

/* routing */
import { Router, Route, browserHistory } from 'react-router'
import { ROUTES } from './routes'

/* render dat shit!! */
render(
	<Router history={browserHistory} routes={ROUTES} />,
	document.getElementById('app')
)
