import React from 'react'

import { Link } from 'react-router'
import { getClassName } from '../utils'

export const StatsTable = (props) => {
	return (
		<table className={'stats-table ' + getClassName(props)}>
		    <tbody>
		        <tr>
		            <td>Einnahmen insgesamt: </td>
		            <td className="bold right"> 18.307,21€</td>
		        </tr>
		        <tr>
		            <td>Bisher davon bezahlt: </td>
		            <td className="bold right"> 18.092,21€</td>
		        </tr>
		        <tr>
		            <td>noch <Link to="/orders?due">ausstehend</Link>: </td>
		            <td className="bold right"> 215,00€</td>
		        </tr>
		    </tbody>
		</table>
	)
}

export const StatsGraph = (props) => {
	return (
		<svg  width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={'stats-graph ' + getClassName(props)}>
		  <defs>
		    <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
		      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" strokeWidth="0.5"/>
		    </pattern>
		    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
		      <rect width="80" height="80" fill="url(#smallGrid)"/>
		      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="1"/>
		    </pattern>
		  </defs>

		  <rect width="100%" height="100%" fill="url(#grid)" />
		</svg>
	)
}

const LabelRow = ({label}) => {
	return (
		<tr>
			<td className="label"><button>{label.name}</button></td>
			<td className="sold">{label.sold}</td>
			<td className="stocked">{label.quantity}</td>
			<td className="sum">{label.sold * label.price} €</td>
		</tr>
	)
}

const ProductRow = ({product}) => {
	return (
		<tbody>
			<tr>
				<th className="type" rowSpan={product.labels.length + 1}><em>{product.type}</em></th>
			</tr>

			{ product.labels.map(label => <LabelRow label={label} />) }

		</tbody>
	)
}

export const StatsWidgetProduct = ({group}) => {
	return (
		<div className="stats-widget stats-widget--product">
			<div className="stats-widget__head">
				<img className="group__pic" src={ require("../pics/" + group.pic) } />
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
							<th className="stocked">auf Lager</th>
							<th className="sum">Summe</th>
						</tr>
					</thead>

					{ group.products.map(product => <ProductRow product={product} />) }

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