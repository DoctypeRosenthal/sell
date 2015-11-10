# sell
<h1>Hallo liebe Liebenden!</h1>

Dieses Programm habe ich Anfang 2014 angefangen. Von Grund auf habe ich alles händisch geschrieben. Es ist ein Vertriebprogramm für Musiklabels. An diesem (mitlerweile sehr) umfangreichen Programm habe ich ungalublich viel gelernt und lerne immer noch. Dieses Programm hat mich durch drei meiner Programmierentwicklungsstufen begleitet. Vom einfachen strukturierten Anweisungen schreiben über Funktionskapselung bis hin zur Objektorientierung. Und jetzt trete ich grade die 4. Stufe an: das Konstruieren von Software auf der Architekturebene und das Benutzen von frameworks. Dementsprechend ist der vorliegende Code noch totales Kuddelmuddel XD. Einige Funktionen sind schon implementiert, andere harren noch der OO-Erlösung.

<h2>Zur Funktionalität</h2>
Im Groben soll das Programm folgende Aufgaben lösen:
Kunden, Produkte und Rechnungen einer Firma sollen verwaltet werden und in Bezug zueinander gesetzt werden. Klingt erstmal einfach. Doch daraus haben sich Konsequenzen ergeben:
<ul>
<li> wie funktioniert Label-Vertrieb eigentlich (und was ist KEIN Labelvertrieb)?</li>
<li> wie muss eine Rechnung beschaffen sein, sodass sie einwandfrei ist? Was benötigt der Benutzer für Einstellungsmöglichkeiten für seine Firma (MwSt., Versandkosten)?</li>
<li> was ist eine sinnvolle Kategorisierung von Produkten (Veröffentlichung -> Produkt (CD/DVD/Vinyl etc.)? Wie implementiert man die Rabattierung von Produkten (meine Lösung: sog. "Labels" verwenden)?</li>
<li> was passiert, wenn alle Produkte verkauft sind? Der Benutzer muss benachrichtigt werden! Eine Stückzahl der Auflage ist von nöten, die einstellbar ist und konstant vom Programm aktualisiert wird.</li>
</ul>

und noch einiges mehr.

<b>Und dann stellen sich auch noch mehr Fragen:</b>
<ul>
<li> Wie implementiert man das ganze? 
<li> Es muss ein Ereignisprotokoll geben, da verschiedene Mitarbeiter der Firma an den Datensätzen arbeiten. Es müssen Aktionen (zu mindest Löschungen von Datensätzen) rückgängig gemacht werden können! 
<li> Wie lädt das Programm Daten vom Server? Uneffizient: die ganze businesslogik nur auf dem Server lassen und die Datensätze immer neu herunter laden (ja, so war das in den ersten iterationen des Programms! Sogar mit jedesmal von PHP neu generiertem HTML-Code!). Es muss eine Client-seitige Objektdatenbank her! Wie implementiert man dort die gängigen DB-Operationen wie Erstellen, Suchen, Ändern und Löschen am besten? Wie kann diese O-DB am smartesten Daten am Server anfragen um den geringsten Traffic zu produzieren (noch ungelöst)?
</ul>

usw. und so fort.

Ihr seht, liebe Liebenden, dieses Problem kann nur taktisch attackiert werden: mit einem detaillierten und klaren Anforderungskatalog und einer gelungenen Architektur im vorhinein und mit smarter Implementierung (frameworks, OOP)  und konstanter Versionierung in der Bauphase.

