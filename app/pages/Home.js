import React from 'react'

import { Link } from 'react-router'

import { AddBtn } from '../components/Buttons'
import HoverBox from '../components/HoverBox'
import { StatsGraph, StatsTable, StatsWidgetProduct } from '../components/StatsWidgets'
import Row from '../components/Row'

export default class Home extends React.Component {
	render() {
		let { store, actions } = this.props,
			state = () => store.getState(),
			newOrder = () => {
				store.dispatch(actions.createOrder(state()))
				store.dispatch(actions.editNewOrder(state()))
			}

		return (
			<main>
				<Row>
					<h3>Hallo Luis</h3>
					Es gibt <Link to="/orders/undispatched">4 unversandte Bestellungen</Link>
				</Row>

				<Row>
					<AddBtn type="medium" title="Bestellung hinzufügen" onClick={newOrder}/>
				</Row>

				<Row>
					<h3>Umsätze</h3>
					<StatsTable className="grid-col-4" />
				</Row>
				<Row>
					<h4>Monatsübersicht</h4>
					<Row><StatsGraph className="grid-col-12" /></Row>
				</Row>

				<Row>
					<h4>Produktionen</h4>
					{ state().productGroups.map(group => (
						<HoverBox className="grid-col-4">
							<StatsWidgetProduct data={group} />
						</HoverBox>
					)) }
				</Row>
			</main>
		)
	}
}