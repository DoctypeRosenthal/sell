import React from 'react'

import { isEmpty } from '../utils'

// determine the input type
const getInput = props => {
	switch (props.type) {
		case 'tag-container':
			return 	<div className="input-field__input">
						{props.children}<div contentEditable="true"></div>
					</div> 
		case 'image':
			return	<div className="input-field__input">
						<img src={ require("../pics/" + (isEmpty(props.value) ? 'placeholder.png' : props.value)) } height={ isEmpty(props.height) ? '' : props.height } className="input-field__img" />
						<input type="file" accept="image/jpg,image/jpeg,image/png" className="input-field__file" />
					</div>
		default:
			return 	<div className="input-field__input" contentEditable="true">
						{ isEmpty(props.value) ? <br /> : props.value }
					</div>
	}
}

const getModifier = type => {
	switch(type) {
		case 'image':
			return 'input-field--image'

		case 'tag-container':
		default:
			return ''

	}
}
export default function InputField(props) {
	
	return (								
		<div className={ 'input-field ' + getModifier(props.type) + (!!props.className ? props.className : '') + (isEmpty(props.value) && isEmpty(props.children) ? ' empty' : '') }>
			{ getInput(props) }
			<div className="input-field__placeholder">{props.placeholder}</div>
		</div>
	)
}
