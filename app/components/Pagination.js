import React from 'react'

export default class Pagination extends React.Component {
	render() {
		return (
			<div className="pagination">
				<b>0</b> - <b>50</b> von <b>1200</b>
				<button className="ico-prev"></button>
				<button className="ico-next"></button>
			</div>
		)
	}
}
