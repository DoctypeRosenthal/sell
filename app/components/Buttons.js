import React from 'react'

export const AddBtn = ({type, title, onClick}) => {
	return (
		<button className={ 'ico-add add-btn add-btn--' + (type || 'medium') } onClick={onClick} title="hinzufügen">{ title }</button>
	)
}

export const SaveBtn = ({type, title, onClick}) => {
	return (
		<button className={ 'ico-save save-btn save-btn--' + (type || 'medium') } onClick={onClick} title="speichern">{ title }</button>
	)
}

export const CloseBtn = ({type, title, onClick}) => {
	return (
		<button className={ 'ico-close close-btn close-btn--' + (type || 'medium') } onClick={onClick} title="abbrechen">{ title }</button>
	)
}

export const DeleteBtn = ({type, title, onClick}) => {
	return (
		<button className={ 'ico-trash delete-btn delete-btn--' + (type || 'medium') } onClick={onClick} title="löschen">{ title }</button>
	)
}

export const PrintBtn = ({type, title, onClick}) => {
	return (
		<button className={ 'ico-print print-btn print-btn--' + (type || 'medium') } onClick={onClick} title="drucken">{ title }</button>
	)
}