import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="user-bar">
					<a href="#">Lorenz Rosenthal</a>
				</div>
				<div className="row">
					<ul className="filter-bar">
						<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
					</ul>
					
					<input className="search-field--main" type="text" placeholder="Suchen..." />
					
					<button className="add-btn add-btn--main"><i className="ico-add"></i>Neu</button>

					<div className="pagination">
						<b>0</b> - <b>50</b> von <b>1200</b>
						<button className="ico-prev"></button>
						<button className="ico-next"></button>
					</div>
				</div>

				<ol className="browse-list browse-list__head">
					<li className="browse-list__actions">
					</li>

					<li className="browse-list__cols">
						<div>Nr.</div>
						<div>Adresszusatz</div>
						<div>Vorname</div>
						<div>Nachname</div>
						<div>Straße</div>
						<div>PLZ</div>
						<div>Ort</div>
						<div>eMail</div>
					</li>
				</ol>
			</header>
		)
	}
}

export default Header