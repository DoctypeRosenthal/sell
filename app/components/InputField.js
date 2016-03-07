import React from 'react'

const InputField = (props) => {
	let className = props.className || ''
	className += (props.value === '' || props.value === null) ? ' empty' : ''
	return (
		<div className={'input-field ' + className}>
			{(() => {
				switch (props.type) {
					case 'tag':
						return <div className="input-field__input">{props.children}<div contentEditable="true"></div></div>
					default:
						return <div className="input-field__input" contentEditable="true">{ (props.value === '' || props.value === null) ? <br /> : props.value }</div>
				}
			})()}
			<div className="input-field__placeholder">{props.placeholder}</div>
		</div>
		
	)
}

export default InputField