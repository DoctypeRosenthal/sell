import React from 'react'

import Row from './Row'
import { SaveBtn } from './Buttons'

import Customer from './Dialog/Customer'
import Order from './Dialog/Order'
import Product from './Dialog/Product'

const Wrap = props => {
	return (
		<div className="dialog__layer">
			<div className="dialog__scroll">
				<div className="dialog__center">
					<div className="dialog__window">
						<Row>
							<div className="dialog__header">{props.title}<SaveBtn type="big" /><div className="dialog__x ico-close"></div></div>
						</Row>
						<Row className="dialog__children">
							{props.children}
						</Row>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Dialog(props) {
	switch (props.type) {
		case 'customer':
			return 	<Wrap title={props.isNew ? 'Neuer Kunde' : 'Kunde bearbeiten'}>
						<Customer data={props.data} />
					</Wrap>

		case 'order':
			return 	<Wrap title={props.isNew ? 'Neue Bestellung' : 'Bestellung bearbeiten'}>
						<Order data={props.data} />
					</Wrap>

		case 'product':
			return 	<Wrap title={props.isNew ? 'Neue Veröffentlichung' : 'Veröffentlichung bearbeiten'}>
						<Product data={props.data} />
					</Wrap>
	}
}
