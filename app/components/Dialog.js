import React from 'react'

import Row from './Row'
import { SaveBtn, CloseBtn } from './Buttons'

import Customer from './Dialog/Customer'
import Order from './Dialog/Order'
import Product from './Dialog/Product'

const getChildren = (type, data) => {
	switch (type) {
		case 'customer':
			return <Customer data={data} />
		case 'order':
			return <Order data={data} />
		case 'product':
			return <Product data={data} />
		default:
			return
	}
}

const getTitle = (mode, type) => {
	const map = {
		'NEW': {
			'customer': 'Neuer Kunde',
			'order': 'Neue Bestellung',
			'product': 'Neue Veröffentlichung'
		},
		'EDIT': {
			'customer': 'Kunde bearbeiten',
			'order': 'Bestellung bearbeiten',
			'product': 'Veröffentlichung bearbeiten'
		}
	}
	return map[mode][type]
}

export default function Dialog(props) {
	console.log(props)
	return (
		<div className={'dialog__layer' + (visible ? ' show' : '')}>
			<div className="dialog__scroll">
				<div className="dialog__center">
					<div className="dialog__window">
						<Row>
							<div className="dialog__header">{ getTitle(mode, type) }<SaveBtn type="big" /><CloseBtn type="big" /></div>
						</Row>
						<Row className="dialog__children">
							{ getChildren(type, data) }
						</Row>
					</div>
				</div>
			</div>
		</div>
	)
}
