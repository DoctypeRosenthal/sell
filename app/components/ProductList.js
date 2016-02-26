import React from 'react'
import { AddBtnSmall } from '../components/AddBtn'

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
			    	<div className="group">
				    	<div className="group__pic">
				    		<img src={ require("file?name=[sha512:hash:base64:7].[ext]!../pics/NochSchon-150x135.jpg") } />
				    	</div>
			    		<div className="group__date">20.10.14</div>
			    		<div className="group__title">Noch:Schon - 301</div>
			    	</div>
			        <div className="product">
				        <ol className="browse-list browse-list__head">
				        	<li className="browse-list__sorters">
								<div className="nr">#</div>
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
									<AddBtnSmall /><button>VVK</button><button>Geschenk</button><button>Händlerabgabepreis</button><button>Normalpreis</button><button>Promo</button>
								</div>				        	
				        	</li>
				        	<li>
								<div className="nr">3</div>
								<div className="type">DVD</div>
								<div className="price">20,00 €</div>
								<div className="quantity">50</div>
								<div className="labels"><AddBtnSmall /><button>Label</button></div>
				        	</li>
				        	<li>
								<div className="nr">9999</div>
								<div className="type">LP</div>
								<div className="price">30,00 €</div>
								<div className="quantity">20</div>
								<div className="labels"><AddBtnSmall /><button>Label</button></div>
				        	</li>
				        </ol>
			        </div>
			    </li>
			    <li>
			    	<div className="group">
				    	<div className="group__pic">
				    		<img src={ require("file!../pics/MoveDove-150x150.jpg") } />
				    	</div>
			    		<div className="group__date">20.10.14</div>
			    		<div className="group__title">MoveDove - 401</div>
			    	</div>
			        <div className="product">
				        <ol className="browse-list browse-list__head">
				        	<li className="browse-list__sorters">
								<div className="nr">#</div>
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
									<AddBtnSmall /><button>VVK</button><button>Geschenk</button><button>Händlerabgabepreis</button><button>Normalpreis</button><button>Promo</button>
								</div>				        	
				        	</li>
				        	<li>
								<div className="nr">3</div>
								<div className="type">DVD</div>
								<div className="price">20,00 €</div>
								<div className="quantity">50</div>
								<div className="labels"><AddBtnSmall /><button>Label</button></div>
				        	</li>
				        	<li>
								<div className="nr">4</div>
								<div className="type">LP</div>
								<div className="price">30,00 €</div>
								<div className="quantity">20</div>
								<div className="labels"><AddBtnSmall /><button>Label</button></div>
				        	</li>
				        </ol>
			        </div>
			    </li>
			    <li>
			    	<div className="group">
				    	<div className="group__pic">
				    		<img src={ require("file!../pics/meer-150x150.jpeg") } />
				    	</div>
			    		<div className="group__date">20.10.14</div>
			    		<div className="group__title">Noch:Schon (301)</div>
			    	</div>
			        <div className="product">
				        <ol className="browse-list browse-list__head">
				        	<li className="browse-list__sorters">
								<div className="nr">#</div>
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
									<AddBtnSmall /><button>VVK</button><button>Geschenk</button><button>Händlerabgabepreis</button><button>Normalpreis</button><button>Promo</button>
								</div>				        	
				        	</li>
				        	<li>
								<div className="nr">3</div>
								<div className="type">DVD</div>
								<div className="price">20,00 €</div>
								<div className="quantity">50</div>
								<div className="labels"><AddBtnSmall /><button>Label</button></div>
				        	</li>
				        	<li>
								<div className="nr">4</div>
								<div className="type">LP</div>
								<div className="price">30,00 €</div>
								<div className="quantity">20</div>
								<div className="labels"><AddBtnSmall /><button>Label</button></div>
				        	</li>
				        </ol>
			        </div>
			    </li>			    
			</ol>
		)
	}
}