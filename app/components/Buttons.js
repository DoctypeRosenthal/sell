import React from 'react'

export const AddBtn = props => {
	return (
		<button className={ 'ico-add add-btn add-btn--' + (props.type || 'medium') }>{ props.title }</button>
	)
}

export const SaveBtn = props => {
	return (
		<button className={ 'ico-save save-btn save-btn--' + (props.type || 'medium') }>{ props.title }</button>
	)
}

export const CloseBtn = props => {
	return (
		<button className={ 'ico-close close-btn close-btn--' + (props.type || 'medium') }>{ props.title }</button>
	)
}