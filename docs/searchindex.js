Object.assign(window.search, {"doc_urls":["chapter_1.html#introduzione-ai-database","chapter_1.html#dbms","cheat_sheet.html#cheat-sheet","cheat_sheet.html#tipi-dati","cheat_sheet.html#query","playground.html#playground"],"index":{"documentStore":{"docInfo":{"0":{"body":22,"breadcrumbs":6,"title":3},"1":{"body":15,"breadcrumbs":4,"title":1},"2":{"body":0,"breadcrumbs":4,"title":2},"3":{"body":32,"breadcrumbs":4,"title":2},"4":{"body":174,"breadcrumbs":3,"title":1},"5":{"body":0,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"Hardware Applicazione Sistema Operativo Web Dati RAM/Hard Disk Strutture dati files, database database server Manipolazione CPU Funzioni processi, appicazioni application server, clients","breadcrumbs":"Introduzione ai database » Introduzione ai database","id":"0","title":"Introduzione ai database"},"1":{"body":"app 1app 1app 2app 2app 3app 3schema logicoschema logicofilesfilesDBMSDBMSschema fisicoschema fisicoViewer does not support full SVG 1.1","breadcrumbs":"Introduzione ai database » DBMS","id":"1","title":"DBMS"},"2":{"body":"","breadcrumbs":"Cheat Sheet » Cheat Sheet","id":"2","title":"Cheat Sheet"},"3":{"body":"Tipo Limiti Byte CHAR( n_caratteri ) 0 ≤ n_caratteri ≤ 255 1-255 VARCHAR( n_caratteri ) 0 ≤ n_caratteri ≤ 255 1-255 TINYINT -128 ≤ valore ≤ 127 1 INT -2·10⁹ ≤ valore ≤ 2·10⁹ 4 BIGINT -2·10⁶³ ≤ valore ≤ 2·10⁶³ 8","breadcrumbs":"Cheat Sheet » Tipi dati","id":"3","title":"Tipi dati"},"4":{"body":"SHOW DATABASES; Elenca tutti i database del DBMS Esempi SHOW DATABASES; SHOW TABLES ; Elenca tutte le tabelle nel database Esempi SHOW TABLES; USE nome_database ; Seleziona un database Esempi USE calendario; USE bar; CREATE TABLE nome_tabella ( nome_colonna tipo , nome_colonna2 tipo ); Crea una tabella all'interno del database Esempi CREATE TABLE eventi (titolo varchar(255), data int); CREATE TABLE studenti (nome varchar(100), cognome varchar(100), eta int unsigned); DROP TABLE nome_tabella ; Elimina una tabella dal database Esempi DROP TABLE prodotti; DROP TABLE utenti; DROP TABLE studenti; INSERT INTO nome_tabella ( nome_colonna , nome_colonna2... ) VALUES ( valore , valore2... ); Inserisce una entry (riga) nella tabella Esempi INSERT INTO studenti (nome, cognome) VALUES ('Mario', 'Rossi'); INSERT INTO targhe (targa) VALUES ('AB123CD'); INSERT INTO prodotti (nome, costo, disponibilita) VALUES ('Acqua', 0.50); SELECT nome_colonna , nome_colonna2... FROM nome_tabella ; Seleziona (filtrando) dati da una tabella Esempi SELECT nome, cognome FROM dipendenti; SELECT costo FROM merendine; SELECT * FROM video -- \"*\" significa \"tutte le colonne\"; SELECT nome_colonna , nome_colonna2... FROM nome_tabella WHERE condizione ; WHERE introduce una o più condizioni per filtrare le entry Esempi SELECT nome, cognome FROM cittadini WHERE regione='Lazio'; SELECT nome, indirizzo FROM hotel WHERE costo < 150.00 AND stanze_libere > 2; SELECT nome, iban FROM libri WHERE review BETWEEN 3 AND 5;","breadcrumbs":"Cheat Sheet » Query","id":"4","title":"Query"},"5":{"body":"","breadcrumbs":"Playground » Playground","id":"5","title":"Playground"}},"length":6,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"5":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"1":{".":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"2":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"5":{"0":{".":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"2":{"5":{"5":{"df":1,"docs":{"3":{"tf":2.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":1,"docs":{"4":{"tf":1.0}},"·":{"1":{"0":{"df":1,"docs":{"3":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"3":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"4":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"b":{"1":{"2":{"3":{"c":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"l":{"df":0,"docs":{},"l":{"'":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"c":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"a":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":2.0}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"4":{"tf":1.0}},"t":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"d":{"a":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":1,"docs":{"4":{"tf":1.0}}},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"4":{"tf":2.6457513110645907}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":2.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"a":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":2.8284271247461903}}}}}}},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"h":{"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"i":{"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"df":1,"docs":{"4":{"tf":2.0}}}}}},"t":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"i":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"d":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"d":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"n":{"_":{"c":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":2.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"a":{"2":{"df":1,"docs":{"4":{"tf":2.0}}},"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":2.6457513110645907}}}}}},"o":{"df":1,"docs":{"4":{"tf":1.0}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"i":{"df":1,"docs":{"4":{"tf":1.0}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"r":{"a":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"=":{"'":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":2.8284271247461903}}}},"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":2.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"u":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"a":{"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}},"l":{"df":1,"docs":{"4":{"tf":3.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"df":1,"docs":{"4":{"tf":1.0}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0}},"e":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":1,"docs":{"4":{"tf":2.0}}}},"r":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"(":{"1":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"5":{"5":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"0":{".":{"5":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"1":{".":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"2":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"5":{"0":{".":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"2":{"5":{"5":{"df":1,"docs":{"3":{"tf":2.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":1,"docs":{"4":{"tf":1.0}},"·":{"1":{"0":{"df":1,"docs":{"3":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"3":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"4":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"b":{"1":{"2":{"3":{"c":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}},"l":{"df":0,"docs":{},"l":{"'":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"c":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"a":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":2.0}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"4":{"tf":1.0}},"t":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"d":{"a":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":1,"docs":{"4":{"tf":1.0}}},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":3,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0},"4":{"tf":2.6457513110645907}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"4":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":2.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"a":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":2.8284271247461903}}}}}}},"t":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"h":{"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"i":{"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"df":1,"docs":{"4":{"tf":2.0}}}}}},"t":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"i":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"d":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"d":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"n":{"_":{"c":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":2.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"a":{"2":{"df":1,"docs":{"4":{"tf":2.0}}},"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":2.6457513110645907}}}}}},"o":{"df":1,"docs":{"4":{"tf":1.0}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"i":{"df":1,"docs":{"4":{"tf":1.0}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"r":{"a":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"=":{"'":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":2.8284271247461903}}}},"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":2.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"u":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"a":{"df":1,"docs":{"4":{"tf":2.0}}},"df":0,"docs":{}}}},"l":{"df":1,"docs":{"4":{"tf":3.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"o":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"df":1,"docs":{"4":{"tf":1.0}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0}},"e":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":1,"docs":{"4":{"tf":2.0}}}},"r":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"(":{"1":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"5":{"5":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"title":{"root":{"a":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});
