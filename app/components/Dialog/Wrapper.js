import React from 'react'
import { Link } from 'react-router'

import { removeQueryFromURL } from '../../utils'

import Row from '../Row'
import { SaveBtn, CloseBtn } from '../Buttons'

export default function Wrapper({visible, title, children, onSave, page}) {
	return (
		<div className={'dialog__layer' + (visible ? ' show' : '')}>
			<div className="dialog__scroll">
				<div className="dialog__center">
					<div className="dialog__window">
						<Row>
							<div className="dialog__header">
								{ title }
								<SaveBtn type="big" onClick={onSave} />
								<Link to={removeQueryFromURL(page)}><CloseBtn type="big" /></Link>
							</div>
						</Row>
						<Row className="dialog__children">
							{ children }
						</Row>
					</div>
				</div>
			</div>
		</div>
	)
}