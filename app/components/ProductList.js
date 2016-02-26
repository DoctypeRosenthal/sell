import React from 'react'

export class ListHead extends React.Component {
	render() {
		return (
			<ol className="browse-list browse-list__head">
				<li className="browse-list__actions">
				</li>

				<li className="browse-list__sorters">
					<div className="group">Veröffentlichung</div>
				</li>
			</ol>
		)
	}
}

export class ListBody extends React.Component {
	render() {

		return (
			<ol className="browse-list browse-list__body">
			    <li>
			    	<div className="group-pic">
			    		<img src={ require("file?name=[sha512:hash:base64:7].[ext]!../pics/meer-150x150.jpeg") } />
			    	</div>

			    	<div className="group-description">
			    		<ol>
			    			<li>Pups</li>
			    			<li>2014</li>
			    			<li>Pupsi</li>
			    		</ol>
			    	</div>

			        <div className="product">
				        <ol className="browse-list browse-list__head">
				        	<li className="browse-list__sorters">
								<div className="nr">Nr.</div>
								<div className="type">Art</div>
								<div className="price">Preis</div>
								<div className="quantity">Auflage (Stk.)</div>
								<div className="labels">Labels</div>
				        	</li>
				        </ol>
				        <ol className="browse-list browse-list__body">
				        	<li>
								<div className="nr">2</div>
								<div className="type">CD</div>
								<div className="price">17,00 €</div>
								<div className="quantity">100</div>
								<div className="labels">
									<button>VVK</button><button>Geschenk</button><button>Händlerabgabepreis</button><button>Normalpreis</button><button>Promo</button>
								</div>				        	
				        	</li>
				        	<li>
								<div className="nr">3</div>
								<div className="type">DVD</div>
								<div className="price">20,00 €</div>
								<div className="quantity">50</div>
								<div className="labels">Labels</div>
				        	</li>
				        	<li>
								<div className="nr">4</div>
								<div className="type">LP</div>
								<div className="price">30,00 €</div>
								<div className="quantity">20</div>
								<div className="labels">Labels</div>
				        	</li>
				        </ol>
			        </div>
			    </li>

			    <li>
			    	<div className="group-pic">
			    		<img src={ require("file!../pics/meer-150x150.jpeg") } />
			    	</div>

			    	<div className="group-description">
			    		<ol>
			    			<li>Pups</li>
			    			<li>2014</li>
			    			<li>Pupsi</li>
			    		</ol>
			    	</div>

			        <div className="product">
				        <ol className="browse-list browse-list__head">
				        	<li className="browse-list__sorters">
								<div className="nr">Nr.</div>
								<div className="type">Art</div>
								<div className="price">Preis</div>
								<div className="quantity">Auflage (Stk.)</div>
								<div className="labels">Labels</div>
				        	</li>
				        </ol>
				        <ol className="browse-list browse-list__body">
				        	<li>
								<div className="nr">2</div>
								<div className="type">CD</div>
								<div className="price">17,00 €</div>
								<div className="quantity">100</div>
								<div className="labels">
									<button>VVK</button><button>Geschenk</button><button>Händlerabgabepreis</button><button>Normalpreis</button><button>Promo</button>
								</div>				        	
				        	</li>
				        	<li>
								<div className="nr">3</div>
								<div className="type">DVD</div>
								<div className="price">20,00 €</div>
								<div className="quantity">50</div>
								<div className="labels">Labels</div>
				        	</li>
				        	<li>
								<div className="nr">4</div>
								<div className="type">LP</div>
								<div className="price">30,00 €</div>
								<div className="quantity">20</div>
								<div className="labels">Labels</div>
				        	</li>
				        </ol>
			        </div>
			    </li>
			  	<li>
			    	<div className="group-pic">
			    		<img src={ require("file!../pics/MoveDove-150x150.jpg") } />
			    	</div>

			    	<div className="group-description">
			    		<ol>
			    			<li>Pups</li>
			    			<li>2014</li>
			    			<li>Pupsi</li>
			    		</ol>
			    	</div>

			        <div className="product">
				        <ol className="browse-list browse-list__head">
				        	<li className="browse-list__sorters">
								<div className="nr">Nr.</div>
								<div className="type">Art</div>
								<div className="price">Preis</div>
								<div className="quantity">Auflage (Stk.)</div>
								<div className="labels">Labels</div>
				        	</li>
				        </ol>
				        <ol className="browse-list browse-list__body">
				        	<li>
								<div className="nr">2</div>
								<div className="type">CD</div>
								<div className="price">17,00 €</div>
								<div className="quantity">100</div>
								<div className="labels">
									<button>VVK</button><button>Geschenk</button><button>Händlerabgabepreis</button><button>Normalpreis</button><button>Promo</button>
								</div>				        	
				        	</li>
				        	<li>
								<div className="nr">3</div>
								<div className="type">DVD</div>
								<div className="price">20,00 €</div>
								<div className="quantity">50</div>
								<div className="labels">Labels</div>
				        	</li>
				        	<li>
								<div className="nr">4</div>
								<div className="type">LP</div>
								<div className="price">30,00 €</div>
								<div className="quantity">20</div>
								<div className="labels">Labels</div>
				        	</li>
				        </ol>
			        </div>
			    </li>

			</ol>
		)
	}
}