import React from 'react'

class Main extends React.Component {
	render() {
		return (
			<main>
				<table id="maintable">
					<colgroup>
						<col width="50%" />
						<col width="50%" />
					</colgroup>
					<thead>
						<tr id="maintable__actions">
							<th></th>
						</tr>
						<tr id="maintable__col-titles">
							<th>Titel</th><th>Preis</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>pupsi</td><td>dupsi</td>
						</tr>
					</tbody>
				</table>
			</main>
		)
	}
}

export default Main

