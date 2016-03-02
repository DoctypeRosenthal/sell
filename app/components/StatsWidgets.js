import React from 'react'

import { Link } from 'react-router'

const LabelRow = (props) => {
	let label = props.data
	return (
		<tr>
			<td className="label"><button>{label.name}</button></td>
			<td className="sold">{label.sold}</td>
			<td className="stock">{label.quantity}</td>
			<td className="sum">{label.sold * label.price} €</td>
		</tr>
	)
}

const ProductRow = (props) => {
	let product = props.data
	return (
		<tbody>
			<tr>
				<th className="type" rowSpan={product.labels.length + 1}><em>{product.type}</em></th>
			</tr>

			{ product.labels.map(label => <LabelRow data={label} />) }

		</tbody>
	)
}

export const StatsWidgetProduct = (props) => {
	let group = props.data
	return (
		<div className="stats-widget stats-widget--product">
			<div className="stats-widget__head">
				<img className="group__pic" src={ require("file?name=[sha512:hash:base64:7].[ext]!../pics/" + group.pic) } />
				<div className="group__description">
					<div className="group__title">{group.nr} - {group.name}</div>
					<div className="group__date">{group.created}</div>
				</div>
			</div>
			<div className="stats-widget__body">
				<table className="stats-widget--product__table">
					<thead>
						<tr>
							<th className="type"></th>
							<th className="label">Label</th>
							<th className="sold">verkauft</th>
							<th className="stock">auf Lager</th>
							<th className="sum">Summe</th>
						</tr>
					</thead>

					{ group.products.map(product => <ProductRow data={product} />) }

					<tfoot>
						<tr className="total">
							<td colSpan="4">insgesamt</td><td className="sum">823,50€</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	)
}
