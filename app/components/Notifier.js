import React from 'react'
import { Link } from 'react-router'

const getModifier = mode => {
	switch(mode) {
		case 'created':
			return '--created'
		case 'modified':
			return '--modified'
		case 'deleted':
			return '--deleted'
	}
}

export default function Notifier(props) {
	return (
		<div className={'notifier notifier' + getModifier(props.mode) + (props.show ? ' show' : '')}>
			{props.message} {props.mode === 'deleted' ? <Link to="/undo">Rückgängig</Link> : ''}
		</div>
	)
}