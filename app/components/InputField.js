import React from 'react'

const InputField = (props) => {
	// css-classes
	let classNames = props.className || ''
	if (props.value === '' || props.value === null) classNames +=  ' empty'

	// determine the input type
	let InputType = <div className="input-field__input" contentEditable="true">{ (props.value === '' || props.value === null) ? <br /> : props.value }</div>
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