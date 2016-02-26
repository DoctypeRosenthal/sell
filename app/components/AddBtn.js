import React from 'react'

export class AddBtnMain extends React.Component {
	render() {
		return (
			<button className="add-btn add-btn--main"><i className="ico-add"></i>Hinzufügen</button>
		)
	}
}

export class AddBtnSmall extends React.Component {
	render() {
		return (
			<button className="add-btn add-btn--small ico-add"></button>
		)
	}
}