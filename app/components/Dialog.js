import React from 'react'

import Row from './Row'
import { SaveBtn } from './Buttons'

import Customer from './Dialog/Customer'
import Order from './Dialog/Order'
import Product from './Dialog/Product'

const getChildren = props => {
	switch (props.type) {
		case 'customer':
			return <Customer data={props.data} />
		case 'order':
			return <Order data={props.data} />
		case 'product':
			return <Product data={props.data} />
		default:
			return
	}
}

const getTitle = props => {
	switch (props.type) {
		case 'customer':
			return props.editItem ? 'Kunde bearbeiten' : 'Neuer Kunde'
		case 'order':
			return props.editItem ? 'Bestellung bearbeiten' : 'Neue Bestellung'
		case 'product':
			return props.editItem ? 'Veröffentlichung bearbeiten' : 'Neue Veröffentlichung'
		default:
			return
	}
}

export default function Dialog(props) {
	return (
		<div className={'dialog__layer' + (props.show ? ' show' : '')}>
			<div className="dialog__scroll">
				<div className="dialog__center">
					<div className="dialog__window">
						<Row>
							<div className="dialog__header">{ getTitle(props) }<SaveBtn type="big" /><div className="dialog__x ico-close"></div></div>
						</Row>
						<Row className="dialog__children">
							{ getChildren(props) }
						</Row>
					</div>
				</div>
			</div>
		</div>
	)
}
