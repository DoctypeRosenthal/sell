import React from 'react'

import Header from './components/Header'
import Notifier from './components/Notifier'

import PopupBox from './components/PopupBox'

export default class App extends React.Component {
	render() {
		let pagename = this.props.location.pathname.replace('/', '') || 'home'

		return (
			<div className={pagename}>

				<Notifier show={true} mode="deleted" message="Ihr Bums wurde gelöscht." />
				<PopupBox show={true} type="info" title="Allen Bums löschen??">pupsi</PopupBox>

				<Header page={pagename} />

				{this.props.children}

				<footer>
					Lorenz Rosenthal © 2014 - 2016
				</footer>
			</div>
		)
	}
}
