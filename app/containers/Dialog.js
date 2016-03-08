import React from 'react'

export default class Dialog extends React.Component {
	render() {
		return (
			<div className="dialog__layer">
				<div className="dialog__center">
					<div className="dialog__window">
						<div className="dialog__header">DialogFenster<div className="dialog__x ico-close"></div></div>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}
