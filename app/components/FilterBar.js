import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'


export default function FilterBar({filters, route}) {
	return 	<ul className="filter-bar">
			{ filters.map(x => <li className={route === x.route ? 'js-selected' : ''}><Link to={x.route}>{x.title}</Link></li>) }
			</ul>
}