import React from 'react'

const InputField = (props) => {
	// css-classes
	let classNames = props.className || ''
	let isEmpty = (value) => typeof value === 'undefined' || value === '' || value === null

	if (isEmpty(props.value)) classNames += ' empty'

	// determine the input type
	let InputType = <div className="input-field__input" contentEditable="true">{ isEmpty(props.value) ? <br /> : props.value }</div>
	if (props.type === 'tag-container') 
		InputType = <div className="input-field__input">{props.children}<div contentEditable="true"></div></div>
			
	return (
		<div className={'input-field ' + classNames}>
			{InputType}
			<div className="input-field__placeholder">{props.placeholder}</div>
		</div>
	)
}

export default InputField