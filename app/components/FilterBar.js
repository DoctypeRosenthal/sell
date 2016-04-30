import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'


const makeFilterLinks = (activeRoute, ...links) => {
	return links.map(x => <li className={activeRoute === x.route ? 'js-selected' : ''}><Link to={x.route}>{x.title}</Link></li>)
}

export default function FilterBar({type, route}) {
	switch (type) {
		case 'customers':
			return 	<ul className="filter-bar">
					{
						makeFilterLinks(route, 
							{route: '/customers/all', title: 'Alle'}, 
							{route: '/customers/payed', title: 'Bezahlt'}, 
							{route: '/customers/due', title: 'Unbezahlt'}
						)
					}
					</ul>
		case 'orders':
			return 	<ul className="filter-bar">
					{
						makeFilterLinks(route, 
							{route: '/orders/all', title: 'Alle'},
							{route: '/orders/started', title: 'Begonnen'},
							{route: '/orders/finished', title: 'Abgeschlossen'},
							{route: '/orders/dispatched', title: 'Versandt'},
							{route: '/orders/undispatched', title: 'Unversandt'},
							{route: '/orders/payed', title: 'Bezahlt'},
							{route: '/orders/due', title: 'Unbezahlt'}
						)
					}
					</ul>
		case 'products':
			return 	<ul className="filter-bar">
						<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
					</ul>
	}
}