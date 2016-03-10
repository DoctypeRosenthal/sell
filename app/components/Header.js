import React from 'react'

import Navigation from './Navigation'
import { AddBtn } from './Buttons'
import SearchField from './SearchField'


const getTools = page => {
	switch (page) {
		case 'customers':
		case 'orders':
		case 'products':
			return 	<div>
						<AddBtn type="main"/>
						<SearchField />
					</div>
		case 'home':
		case 'options':
		case 'protocol':
		default:
			return 
	}
}

export default props => 
	<header>
		<Navigation page={props.page}/>
		{ getTools(props.page) }
	</header>
