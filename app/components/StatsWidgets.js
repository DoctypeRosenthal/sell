import React from 'react'

import { Link } from 'react-router'

const ProductLabel = (props) => {
	let label = props.data
	return (
		<tr>
			<td><button>{label.name}</button></td>
			<td>{label.sold}</td>
			<td>{label.quantity}</td>
			<td>{label.sold * label.price} €</td>
		</tr>
	)
}

const ProductTable = (props) => {
	let product = props.data
	console.log(product)
	return (
		<table className="stats-widget--product__table">
			<thead>
				<tr className="title">
					<th colSpan="4">{product.type}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Label</th><th>verkauft</th><th>gesamt</th><th>total</th>
				</tr>

				{ product.labels.map(label => <ProductTable data={label} />) }

				<tr className="total">
					<td colSpan="3">insgesamt</td><td>823,50€</td>
				</tr>
			</tbody>
		</table>	
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

				{ group.products.map(product => <ProductTable data={product} />) }
				
			</div>
		</div>
	)
}
