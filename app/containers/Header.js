import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header>

				<button id="main__add-btn"><em>+</em>neu</button>

				<div id="main__controls-container">
					<ul id="tabbar">
						<li>Alle</li><li>Bezahlt</li><li>Unbezahlt</li>
					</ul>

					<div id="pagination">
						<span>0 - 50 von 1200</span><button className="ico-next"></button><button className="ico-prev"></button>
					</div>
				</div>
				<table id="maintable__head">
					<colgroup>
						<col width="50%" />
						<col width="50%" />
					</colgroup>
					<thead>
						<tr class="actions">
							<th></th>
						</tr>
						<tr class="col-titles">
							<th>Titel</th><th>Preis</th>
						</tr>
					</thead>
				</table>
			</header>
		)
	}
}

export default Header