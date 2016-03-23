import React from 'react'

export default function FilterBar(props) {
	switch (props.type) {
		case 'customers':
			return 	<ul className="filter-bar">
						<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
					</ul>
		case 'orders':
			return 	<ul className="filter-bar">
						<li>Alle</li><li>Begonnen</li><li>Abgeschlossen</li><li>Versandt</li><li>Unversandt</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
					</ul>
		case 'products':
			return 	<ul className="filter-bar">
						<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
					</ul>
	}
}