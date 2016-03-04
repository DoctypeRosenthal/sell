import React from 'react'

const InputField = (props) => {

	let inputClass = 'input-field__input ' + props.className
	if (props.text == '') inputClass += ' empty'

	return (
		<div className={'input-field ' + props.className}>
			<input className={inputClass} value={props.text} type="text" />
			<span className="input-field__placeholder">{props.placeholder}</span>
		</div>
	)
}

export default InputField
