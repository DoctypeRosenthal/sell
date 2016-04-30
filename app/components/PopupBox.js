import React from 'react'
import HoverBox from './HoverBox'
import Row from './Row'
import { CloseBtn } from './Buttons'

export default class PopupBox extends React.Component {
	
	constructor(props) {
	    super(props)
	    this.state = {
	    	show: props.show,
	      	callback: undefined
	    }
	}

	componentWillReceiveProps(props) {
		this.setState({
			show: props.show,
			callback: props.callback
		})
	}
	getContent(){
		let { type, children, choices } = this.props
		switch(type) {
			case 'info':
				return <div>{children}</div>
			case 'alert':
				return <div>{children}</div>
			case 'multi-choice':
				return (
					<div>
						{children}
						{choices.map(c => <button onClick={() => this.state.callback = c.callback}>{c.callback}</button>)}
						<Row><button>Ok</button></Row>
					</div>
				)
		}
	}

	toggleVisibility() {
		this.state.show = !this.state.show 
	}

	handleOkClick() {
		if (this.state.callback) {
			this.state.callback()
			this.toggleVisibility.bind(this)
		}
	}

	render() {
		return (
			<HoverBox className={'popup-box' + (this.state.show ? ' show' : '')}>
				<Row className="popup-box__header h2">
					<div className="popup-box__title">{this.props.title}</div><CloseBtn type="small" />
				</Row>
				{this.getContent()}
			</HoverBox>
		)
	}

}