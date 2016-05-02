import React from 'react'

import Row from '../Row'
import { SaveBtn, CloseBtn, DeleteBtn } from '../Buttons'

export default function Wrapper({visible, title, children, onSave, onClose, onDelete}) {
	return (
		<div className={'dialog__layer' + (visible ? ' show' : '')}>
			<div className="dialog__scroll">
				<div className="dialog__center">
					<div className="dialog__window">
						<Row>
							<div className="dialog__header">
								{ title }
								<SaveBtn type="big" onClick={onSave} />
								<CloseBtn type="big" onClick={onClose} />
								<DeleteBtn type="big" onClick={onDelete} />
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