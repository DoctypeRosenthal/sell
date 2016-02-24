/* styles */
require('./styles/index.sass')

/* react */
import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'

/* render dat shit!! */
render(
	<App />,
	document.getElementById('app')
)