import React from 'react'

export class AddBtnMain extends React.Component {
	render() {
		return (
			<button className="add-btn add-btn--main"><b className="ico-add"></b>Hinzufügen</button>
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