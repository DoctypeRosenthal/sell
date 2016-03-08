import React from 'react'

const InputField = props => {
	
	const isEmpty = value => typeof value === 'undefined' || value === '' || value === null

	// get css-classes
	let classes = !!props.className ? props.className : ''
	if (isEmpty(props.value) && isEmpty(props.children)) classes += ' empty'

	// determine the input type
	const getInput = type => {
		switch (type) {
			case 'tag-container':
				return 	<div className="input-field__input">
							{props.children}<div contentEditable="true"></div>
						</div> 
			default:
				return 	<div className="input-field__input" contentEditable="true">
							{ isEmpty(props.value) ? <br /> : props.value }
						</div>
		}
	}

	return (
		<div className={ 'input-field ' + classes }>
			{ getInput(props.type) }
			<div className="input-field__placeholder">{props.placeholder}</div>
		</div>
	)
}

export default InputField