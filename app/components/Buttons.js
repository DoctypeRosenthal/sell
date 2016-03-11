import React from 'react'
import { Link } from 'react-router'

export const AddBtn = props => {
	return (
		<Link to={props.page + "/new"} >
			<button className={ 'ico-add add-btn add-btn--' + (props.type || 'medium') }>
				{ props.title }
			</button>
		</Link>
	)
}

export const SaveBtn = (props) => {
	return (
		<button className={ 'ico-save save-btn save-btn--' + (props.type || 'medium') }>{ props.title }</button>
	)
}
