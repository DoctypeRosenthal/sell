import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header>
				<button><em>+</em>neu</button>

				<ul id="tabbar">
					<li>Alle</li><li>Bezahlt</li><li>Unbezahlt</li>
				</ul>

				<div id="pagination">
					<span>0 - 50 von 1200</span><button className="ico-next"></button><button className="ico-prev"></button>
				</div>

			</header>
		)
	}
}

export default Header