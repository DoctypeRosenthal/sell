import React from 'react'

const InputField = (props) => {
	let className = 'input-field ' + props.className
	if (props.value === '' || props.value === null) 
		className += ' empty'

	return (
		<div className={className}>
			<input className={'input-field__input'} value={props.value} type="text" />
			<span className="input-field__placeholder">{props.placeholder}</span>
		</div>
	)
}

export default InputField
