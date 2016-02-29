import React from 'react'

import { Link } from 'react-router'

const StatsTable = (props) => {
	let className = "stats-table " + props.className
	return (
		<table className={className}>
		    <tbody>
		        <tr>
		            <th colSpan="2">
		                Umsatz (ohne Versandkosten)
		            </th>
		        </tr>
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

export default StatsTable