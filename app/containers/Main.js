import React from 'react'

class Main extends React.Component {
	render() {
		return (
			<main>
				<button className="add-btn add-btn--big ico-add"></button>

				<div className="row">
					<ul className="browse__filters">
						<li>Alle</li><li className="js-selected">Bezahlt</li><li>Unbezahlt</li>
					</ul>
					
					<input className="browse__search" placeholder="Suchen..." />
					

					<div className="browse__pagination">
						<b>0</b> - <b>50</b> von <b>1200</b>
						<button className="ico-prev"></button>
						<button className="ico-next"></button>
					</div>
				</div>

				<ol className="browse-table browse-table__head">
					<li className="browse-table__actions hidden">
					</li>

					<li className="browse-table__cols">
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

				<ol className="browse-table browse-table__body">

				    <li>
				        <div>436</div>
				        <div>-</div>
				        <div>Emily</div>
				        <div>Löffler</div>
				        <div>Depotstr. 3</div>
				        <div>72072</div>
				        <div>Tübingen</div>
				        <div>emily.loeffler@web.de</div>
				    </li>
				    <li>
				        <div>435</div>
				        <div>-</div>
				        <div>Agnes</div>
				        <div>Scharnetzky</div>
				        <div>Jacobäerstraße 5</div>
				        <div>1796</div>
				        <div>Pirna</div>
				        <div>elisabeth.muche@gmx.de</div>
				    </li>
				    <li>
				        <div>434</div>
				        <div>-</div>
				        <div>Friederike</div>
				        <div>Dorn</div>
				        <div>Im Mühlengrund 14</div>
				        <div>54317</div>
				        <div>Korlingen</div>
				        <div>frie_dorn@web.de</div>
				    </li>
				    <li>
				        <div>433</div>
				        <div>-</div>
				        <div>Miriam</div>
				        <div>Stach</div>
				        <div>Holsteinische Str. 47</div>
				        <div>12161</div>
				        <div>Berlin</div>
				        <div>Stach.R.Miriam@gmail.com</div>
				    </li>
				    <li>
				        <div>432</div>
				        <div>-</div>
				        <div>Jan</div>
				        <div>Stellet</div>
				        <div>Oto-Bögeholz-Str. 15</div>
				        <div>3112</div>
				        <div>Braunschweig</div>
				        <div>jan@stellet.org</div>
				    </li>
				    <li>
				        <div>431</div>
				        <div>-</div>
				        <div>Jonas</div>
				        <div>Limbrock</div>
				        <div>Adolfstr. 62</div>
				        <div>53111</div>
				        <div>Bonn</div>
				        <div>j.limbrock@googlemail.com</div>
				    </li>
				    <li>
				        <div>430</div>
				        <div>-</div>
				        <div>Dr. Elisabeth</div>
				        <div>Link</div>
				        <div>Burgstr. 35-37</div>
				        <div>68165</div>
				        <div>Mannheim</div>
				        <div>elisabethlink@gmx.de</div>
				    </li>
				    <li>
				        <div>429</div>
				        <div>-</div>
				        <div>Nikolaj</div>
				        <div>Klöcker</div>
				        <div>Mönchenwerther Str. 10</div>
				        <div>40545</div>
				        <div>Düsseldorf</div>
				        <div>nikolaj.kloecker@uni-duesseldorf.de</div>
				    </li>
				    <li>
				        <div>428</div>
				        <div>-</div>
				        <div>Jorma</div>
				        <div>Lünenbürger</div>
				        <div>Spindelstr. 5a</div>
				        <div>14482</div>
				        <div>Potsdam</div>
				        <div>jodalue@gmx.de</div>
				    </li>
				    <li>
				        <div>427</div>
				        <div>-</div>
				        <div>Ilona</div>
				        <div>dutzi</div>
				        <div>Weberstraße 4/2</div>
				        <div>69120</div>
				        <div>Heidelberg</div>
				        <div>Ilona.dutzi@web.de</div>
				    </li>
				    <li>
				        <div>426</div>
				        <div>-</div>
				        <div>Harald</div>
				        <div>Kischlat</div>
				        <div>Ubierstr. 75</div>
				        <div>53173</div>
				        <div>Bonn</div>
				        <div>kischlat@web.de</div>
				    </li>
				    <li>
				        <div>425</div>
				        <div>-</div>
				        <div>Thorsten</div>
				        <div>Eßeling</div>
				        <div>Viersener Straße 90</div>
				        <div>41061</div>
				        <div>Mönchengladbach</div>
				        <div>thorsten.esseling@web.de</div>
				    </li>
				    <li>
				        <div>424</div>
				        <div>-</div>
				        <div>Anja</div>
				        <div>Gottwald</div>
				        <div>Am Zollstock 5</div>
				        <div>65205</div>
				        <div>Wiesbaden</div>
				        <div>anja_Gottwald@web.de</div>
				    </li>
				    <li>
				        <div>423</div>
				        <div>-</div>
				        <div>Sophia</div>
				        <div>von waechter</div>
				        <div>Bleibtreustr. 32</div>
				        <div>10707</div>
				        <div>berlin</div>
				        <div>Sophiavonwaechter@gmx.de</div>
				    </li>
				    <li>
				        <div>422</div>
				        <div>-</div>
				        <div>Johanna</div>
				        <div>Diekhoff</div>
				        <div>Hasseldieksdammer Weg 51</div>
				        <div>24114</div>
				        <div>Kiel</div>
				        <div>johanna.diekhoff@gmx.de</div>
				    </li>
				    <li>
				        <div>421</div>
				        <div>-</div>
				        <div>Albert</div>
				        <div>Schäffer</div>
				        <div>Valpichlerstr. 128</div>
				        <div>80686</div>
				        <div>München</div>
				        <div>post@albert-schaeffer.net</div>
				    </li>
				    <li>
				        <div>420</div>
				        <div>-</div>
				        <div>Manuel</div>
				        <div>Kaiser</div>
				        <div>Kapellenstr. 44</div>
				        <div>76131</div>
				        <div>Karlsruhe</div>
				        <div>mail-amc-records.com@chaosdelta.de</div>
				    </li>
				    <li>
				        <div>419</div>
				        <div>-</div>
				        <div>Alois</div>
				        <div>Richthofer</div>
				        <div>Haldenseestr. 48</div>
				        <div>81671</div>
				        <div>München</div>
				        <div>alois@richthofer.de</div>
				    </li>
				    <li>
				        <div>418</div>
				        <div>-</div>
				        <div>Benjamin</div>
				        <div>Siegmund</div>
				        <div>Erlenweg 5</div>
				        <div>72076</div>
				        <div>Tübingen</div>
				        <div>benjaminsiegmund@gmx.de</div>
				    </li>
				    <li>
				        <div>417</div>
				        <div>-</div>
				        <div>Paul</div>
				        <div>Geißler</div>
				        <div>Ahornallee 12</div>
				        <div>86899</div>
				        <div>Landsberg am Lech</div>
				        <div>paulgeissler@t-online.de</div>
				    </li>
				    <li>
				        <div>416</div>
				        <div>-</div>
				        <div>Martin</div>
				        <div>Kalinowski</div>
				        <div>Briesestraße 15</div>
				        <div>12053</div>
				        <div>Berlin</div>
				        <div>m.kalinowski@gmx.net</div>
				    </li>
				    <li>
				        <div>415</div>
				        <div>-</div>
				        <div>Eleonore</div>
				        <div>Glitz</div>
				        <div>Chlodwigstr. 7</div>
				        <div>41812</div>
				        <div>Erkelenz</div>
				        <div>e.glitz@web.de</div>
				    </li>
				    <li>
				        <div>414</div>
				        <div>-</div>
				        <div>Christian</div>
				        <div>Heckmann</div>
				        <div>Oberstraße 10</div>
				        <div>54317</div>
				        <div>Osburg</div>
				        <div>chr.heckmann@gmx.de</div>
				    </li>
				    <li>
				        <div>413</div>
				        <div>-</div>
				        <div>Kilian</div>
				        <div>Kleine</div>
				        <div>Friedensstr. 42</div>
				        <div>69121</div>
				        <div>Heidelberg</div>
				        <div>kilian.kleine@gmx.de</div>
				    </li>
				    <li>
				        <div>412</div>
				        <div>-</div>
				        <div>Prof. Dr. Martha</div>
				        <div>Kleinhans</div>
				        <div>Methfesselstrasse 34</div>
				        <div>97074</div>
				        <div>Würzburg</div>
				        <div>kleinhans@uni-wuerzburg.de</div>
				    </li>
				    <li>
				        <div>411</div>
				        <div>Ludwig-Maximilians Universität München / Lehrstuhl Christliche Sozialethik</div>
				        <div>Prof. Dr. Markus</div>
				        <div>Vogt</div>
				        <div>Geschwister-Scholl-Platz 1</div>
				        <div>80539</div>
				        <div>München</div>
				        <div>-</div>
				    </li>
				    <li>
				        <div>410</div>
				        <div>-</div>
				        <div>Dr. Robert</div>
				        <div>Pfister</div>
				        <div>Amselweg 12</div>
				        <div>86356</div>
				        <div>Neusäß</div>
				        <div>robert.pfister@augustakom.net</div>
				    </li>
				    <li>
				        <div>409</div>
				        <div>-</div>
				        <div>Dorothea</div>
				        <div>Kudla</div>
				        <div>Lederergasse 20</div>
				        <div>93047</div>
				        <div>Regensburg</div>
				        <div>dorothea.kudla@googlemail.com</div>
				    </li>
				    <li>
				        <div>408</div>
				        <div>-</div>
				        <div>Dr. Ulrich</div>
				        <div>Mehling</div>
				        <div>Georgstraße 15</div>
				        <div>89077</div>
				        <div>Ulm</div>
				        <div>ulrichmehling@gmx.de</div>
				    </li>
				    <li>
				        <div>407</div>
				        <div>-</div>
				        <div>Dr. Lothar</div>
				        <div>Humburg</div>
				        <div>Hügelheimer Str. 10</div>
				        <div>79379</div>
				        <div>Müllheim Bade</div>
				        <div>l.e.humburg@t-online.de</div>
				    </li>
				    <li>
				        <div>406</div>
				        <div>-</div>
				        <div>Engelbert</div>
				        <div>Plassmann</div>
				        <div>Robert-Koch-Straße 16</div>
				        <div>44801</div>
				        <div>Bochum</div>
				        <div>plassmann.bochum@gmail.com</div>
				    </li>
				    <li>
				        <div>405</div>
				        <div>-</div>
				        <div>Susanne</div>
				        <div>Daub</div>
				        <div>Lützerodaer Weg 1c</div>
				        <div>7751</div>
				        <div>Jena</div>
				        <div>susanne.daub@uni-jena.de</div>
				    </li>
				    <li>
				        <div>404</div>
				        <div>-</div>
				        <div>Sabine</div>
				        <div>Jeck-Thole</div>
				        <div>Wallaustr. 54</div>
				        <div>55118</div>
				        <div>Mainz</div>
				        <div>sabine.jeck-thole@gmx.de</div>
				    </li>
				    <li>
				        <div>403</div>
				        <div>-</div>
				        <div>Jan</div>
				        <div>Wedemeyer</div>
				        <div>Harzstieg 39</div>
				        <div>38122</div>
				        <div>Braunschweig</div>
				        <div>Jan.Wedemeyer@web.de</div>
				    </li>
				    <li>
				        <div>402</div>
				        <div>-</div>
				        <div>Lothar</div>
				        <div>Mandl</div>
				        <div>Keplerstr. 25</div>
				        <div>92224</div>
				        <div>Amberg</div>
				        <div>loma25559@aol.com</div>
				    </li>
				    <li>
				        <div>401</div>
				        <div>-</div>
				        <div>Simon</div>
				        <div>Hacker</div>
				        <div>Kappler Straße 57 (3412)</div>
				        <div>79117</div>
				        <div>Freiburg</div>
				        <div>simon.hacker@yale.edu</div>
				    </li>
				    <li>
				        <div>400</div>
				        <div>-</div>
				        <div>Peter</div>
				        <div>Ong</div>
				        <div>Gaußstr. 61</div>
				        <div>70193</div>
				        <div>Stuttgart</div>
				        <div>p.ong@web.de</div>
				    </li>
				    <li>
				        <div>399</div>
				        <div>-</div>
				        <div>Matthias</div>
				        <div>Görtz</div>
				        <div>Tulpenapfelweg 6</div>
				        <div>70437</div>
				        <div>Stuttgart</div>
				        <div>Matthiasgoertz@gmail.com</div>
				    </li>
				    <li>
				        <div>398</div>
				        <div>-</div>
				        <div>rafael</div>
				        <div>kinzig</div>
				        <div>havensteinstr. 3</div>
				        <div>12249</div>
				        <div>berlin</div>
				        <div>rafael@rafaelk.de</div>
				    </li>
				    <li>
				        <div>397</div>
				        <div>-</div>
				        <div>Rosa</div>
				        <div>Michaelis</div>
				        <div>Bergweg 35</div>
				        <div>58313</div>
				        <div>Herdecke</div>
				        <div>rosamichaelis@posteo.de</div>
				    </li>
				    <li>
				        <div>396</div>
				        <div>-</div>
				        <div>Ingeborg</div>
				        <div>Thor-Klauser</div>
				        <div>Jahnstr. 17</div>
				        <div>79117</div>
				        <div>Freiburg</div>
				        <div>architekturbuero@thor-klauser.de</div>
				    </li>
				    <li>
				        <div>395</div>
				        <div>Katholisches Pfarramt St. Peter und Paul</div>
				        <div>Christoph</div>
				        <div>Acker</div>
				        <div>Biegenstr. 18</div>
				        <div>35037</div>
				        <div>Marburg</div>
				        <div>-</div>
				    </li>
				    <li>
				        <div>394</div>
				        <div>CMS Hasche Sigle Partnerschaft von Rechtsanwälten und Steuerberatern mbB</div>
				        <div>Ludwig</div>
				        <div>Linder</div>
				        <div>Stadthausbrücke 1-3</div>
				        <div>20355</div>
				        <div>Hamburg</div>
				        <div>Ludwig.Linder@cms-hs.com</div>
				    </li>
				    <li>
				        <div>393</div>
				        <div>-</div>
				        <div>Yvonne</div>
				        <div>Karow</div>
				        <div>Reckeweg 100A</div>
				        <div>13591</div>
				        <div>Berlin</div>
				        <div>karow.yvonne@t-online.de</div>
				    </li>
				    <li>
				        <div>392</div>
				        <div>-</div>
				        <div>Dr. Regina</div>
				        <div>Kurth</div>
				        <div>Andlauweg 11</div>
				        <div>89134</div>
				        <div>Blaustein</div>
				        <div>rakurth@gmx.de</div>
				    </li>
				    <li>
				        <div>391</div>
				        <div>-</div>
				        <div>Simone</div>
				        <div>Wenzel</div>
				        <div>Eckerleinstr. 3</div>
				        <div>91790</div>
				        <div>Raitenbuch</div>
				        <div>simone.wenzel@posteo.de</div>
				    </li>
				    <li>
				        <div>390</div>
				        <div>-</div>
				        <div>Bernadette</div>
				        <div>Fittkau-Tönnesmann MPH</div>
				        <div>Frundsbergstrasse 62</div>
				        <div>80637</div>
				        <div>München</div>
				        <div>bha.fittkau@t-online.de</div>
				    </li>
				    <li>
				        <div>389</div>
				        <div>-</div>
				        <div>Marcus</div>
				        <div>Nührenbörger</div>
				        <div>Am Honigbach 7</div>
				        <div>48653</div>
				        <div>Coesfeld</div>
				        <div>marcus.nuehrenboerger@tu-dortmund.de</div>
				    </li>
				    <li>
				        <div>388</div>
				        <div>-</div>
				        <div>Prof. Dr. Oliver</div>
				        <div>Dyma</div>
				        <div>Zollerbergstr. 27</div>
				        <div>72379</div>
				        <div>Hechingen</div>
				        <div>o.dyma@me.com</div>
				    </li>
				    <li>
				        <div>387</div>
				        <div>-</div>
				        <div>Prof. Dr. Günter</div>
				        <div>Kleinen</div>
				        <div>Emmastr. 292</div>
				        <div>28213</div>
				        <div>Bremen</div>
				        <div>kleinen@uni-bremen.de</div>
				    </li>
				</ol>
			</main>
		)
	}
}

export default Main

