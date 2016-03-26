import React from 'react'

import { isEmpty, getClassNames} from '../utils'

// determine the input type
const getInput = props => {
	switch (props.type) {
		case 'tag-container':
			return 	<div className="input-field__input multi-line">
						{props.children}<div contentEditable="true"></div>
					</div> 
		case 'image':
			return	<div className="input-field__input">
						<img src={ require("../pics/" + (isEmpty(props.value) ? 'placeholder.png' : props.value)) } height={ isEmpty(props.height) ? '' : props.height } className="input-field__img" />
						<input type="file" accept="image/jpg,image/jpeg,image/png" className="input-field__file" />
					</div>
		default:
			return 	<div className={'input-field__input' + (props.type === 'multi-line' ? ' multi-line' : '')} contentEditable="true">
						{ isEmpty(props.value) ? <br /> : props.value }
					</div>
	}
}

export default function InputField(props) {
	
	return (								
		<div className={ 'input-field ' + getClassName(props) + (isEmpty(props.value) && isEmpty(props.children) ? ' empty' : '') }>
			{ getInput(props) }
			<div className="input-field__placeholder">{props.placeholder}</div>
		</div>
	)
}
