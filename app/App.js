import React from 'react'

import Header from './components/Header'
import Notifier from './components/Notifier'
import PopupBox from './components/PopupBox'
import Dialog from './components/Dialog'

export default class App extends React.Component {

	render() {
		let { store, actions, selectors } = this.props,
			activePage = store.getState().activePage,
			dialogProps = {
				store, 
				actions, 
				selectors
			}
			
		return (
			<div className={activePage}>

				<Notifier show={true} mode="deleted" message="Ihr Bums wurde gelöscht." />
				<PopupBox show={true} type="info" title="Allen Bums löschen??">pupsi</PopupBox>

				<Header page={activePage} />

				{this.props.children}

				<Dialog {...dialogProps} />

				<footer>
					Lorenz Rosenthal © 2014 - 2016
				</footer>
			</div>
		)
	}
}
