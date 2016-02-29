import React from 'react'

import { Link } from 'react-router'

export const StatsWidgetProduct = (props) => {
	let row = props.data
	return (
		<div className="stats-widget stats-widget--product">
			<div className="stats-widget__head">
				<img className="group__pic" src={ require("file?name=[sha512:hash:base64:7].[ext]!../pics/MoveDove-150x150.jpg") } />
				<div className="group__description">
					<div className="group__title">401 - MoveDove</div>
					<div className="group__date">29.11.2013</div>
				</div>
			</div>
			<div className="stats-widget__body">

				<table className="stats-widget--product__table">
					<thead>
						<tr className="title">
							<th colSpan="4">CD</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Label</th><th>verkauft</th><th>gesamt</th><th>total</th>
						</tr>

						<tr>
							<td><button>Vorverkaufspreis</button></td>
							<td>1</td>
							<td>200</td>
							<td>16,00€</td>
						</tr>

						<tr>
							<td><button>Händlerabgabe</button></td>
							<td>5</td>
							<td>-</td>
							<td>200</td>
						</tr>
						<tr>
							<td><button>Normalpreis</button></td>
							<td>44</td>
							<td>575</td>
							<td>748,00€</td>
						</tr>

						<tr className="total">
							<td colSpan="3">insgesamt</td><td>823,50€</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
