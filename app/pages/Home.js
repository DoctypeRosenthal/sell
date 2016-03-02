import React from 'react'

import { Link } from 'react-router'
import { AddBtnMedium } from '../components/AddBtn'
import StatsGraph from '../components/StatsGraph'
import StatsTable from '../components/StatsTable'
import HoverBox from '../components/HoverBox'
import { StatsWidgetProduct } from '../components/StatsWidgets'

/* mockup data */
import mockupData from '../mockup.json'

export default class Home extends React.Component {
	render() {
		let productGroups = mockupData.productGroups


		return (
			<main>
				<div className="row">
					<h1>Hallo Luis und wacko' ho'!</h1>
					<div className="clearboth">
						Es gibt <Link to="/orders?undispatched">4 unversandte Bestellungen</Link>
					</div>
					<AddBtnMedium title="Bestellung hinzufügen" />
				</div>

				<div className="row">
					<h3>Umsätze</h3>
					<StatsGraph className="grid-col-9" />
					<StatsTable className="grid-col-3" />
				</div>

				<div className="row">
					{ productGroups.map(group => (
						<HoverBox className="grid-col-3">
							<StatsWidgetProduct data={group} />
						</HoverBox>
					)) }
				</div>
			</main>
		)
	}
}