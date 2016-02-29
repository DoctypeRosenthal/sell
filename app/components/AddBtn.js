import React from 'react'

export const AddBtnMain = (props) => {
	return (
		<button className="add-btn add-btn--main ico-add">{ props.title || 'Hinzufügen' }</button>
	)
}

export const AddBtnMedium = (props) => {
	return (
		<button className="add-btn add-btn--medium ico-add">{ props.title || 'Hinzufügen' }</button>
	)
}

export const AddBtnSmall = (props) => {
	return (
		<button className="add-btn add-btn--small ico-add"></button>
	)
}