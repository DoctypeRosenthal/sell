/* styles */
require('./styles/index.sass')

/* React */
import React from 'react'
import { render } from 'react-dom'

/* routing */
import { Router, hashHistory } from 'react-router'
import ROUTES from './routes'

/* render dat shit!! */
render(
	<Router history={hashHistory} routes={ROUTES} />,
	document.getElementById('app')
)
