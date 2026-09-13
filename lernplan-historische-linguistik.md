# Lernplan Historische Linguistik – Schwerpunkt deutsche Sprachgeschichte

Stand: 12.09.2026 (Rev. 3, nach Abschluss der Bauphasen 3–6; Abschnitte 13–17 neu). Dieses Dokument ist die fachliche Grundlage für das Projekt „Historische Linguistik": ein Lernpfad, wie ihn ein Germanistik-Studierender im Modul „Historische Sprachwissenschaft des Deutschen" durchlaufen würde, plus eine Bewertung, welche Teile sich für interaktive Werkzeuge eignen und in welcher Reihenfolge wir sie bauen sollten. Rev. 2 trennte explizit zwischen **Bau-Reihenfolge** (Abschnitt 5, technischer Aufwand) und **Vermittlungs-Reihenfolge** (Abschnitt 2, wie ein Lernender geführt wird). Rev. 3 dokumentiert den Abschluss aller sechs Bauphasen sowie eine neue, noch offene Architekturfrage.

## 1. Zielbild und Struktur des Lernpfads

Ein typisches germanistisches Curriculum (orientiert an Standardwerken wie Nübling/Dammel/Duke/Szczepaniak, *Historische Sprachwissenschaft des Deutschen*, oder von Polenz, *Deutsche Sprachgeschichte*) baut sich nicht chronologisch, sondern kompetenzbasiert auf: Zuerst das phonetische Handwerkszeug (IPA), dann die Theorie des Lautwandels als Werkzeug, dann die konkreten historischen Lautgesetze, dann die Sprachperioden als Zeitachse, und erst darauf aufbauend Morphologie, Wortschatz und Syntax. Wer mit der Chronologie beginnt (Idg. → Ahd. → Mhd. …), ohne IPA und Lautgesetze zu beherrschen, scheitert typischerweise an der Transkription von Primärtexten – das deckt sich mit deiner eigenen Einschätzung, dass IPA der größte Engpass ist.

Kompetenz-vor-Chronologie ist fachlich richtig, aber ohne Gegenmaßnahme motivational riskant: Ein Lernender, der zuerst ein vollständiges IPA-Chart durcharbeitet, ohne den Nutzen zu sehen, verliert das Interesse, bevor der erste Lautwandel überhaupt auftaucht (Worked-Example-Effect nach Sweller – neue Notation wirkt nur im Kontext eines konkreten Falls, nicht als Vorratshaltung). Deshalb bekommt der Lernpfad unten drei didaktische Ergänzungen, die die fachliche Reihenfolge nicht verändern, aber die Vermittlung umrahmen: einen Einstiegs-Anker vor Modul 0, einen kurzen Orientierungs-Zeitstrahl als Advance Organizer (Ausubel), und frühe Übungsgelegenheiten statt einer Übungslücke bis Bauphase 4.

### 1.1 Einstiegs-Anker statt Vollständigkeits-Modul

Modul 0 wird nicht als abgeschlossenes Pflichtmodul „erst das ganze IPA, dann weiter" gerahmt, sondern beginnt mit einem konkreten Rätsel: *Warum heißt es engl. father, aber dt. Vater – während brother/Bruder denselben Anlaut behalten?* Die IPA-Symbole werden nur in dem Umfang eingeführt, der zur Auflösung dieses Falls nötig ist (stimmlose/stimmhafte Frikative, Betonungszeichen). Die vollständige IPA-Tabelle bleibt als Nachschlage-Artefakt bestehen (Bauphase 1, unverändert), wird dem Lernenden aber nicht als Voraussetzung vor allem anderen präsentiert.

### 1.2 Orientierungs-Zeitstrahl (Advance Organizer)

Vor Modul 0 steht eine einzige, unkommentierte Zeitleiste mit den sechs Sprachstufen (Urindogermanisch – Urgermanisch – Althochdeutsch ca. 750–1050 – Mittelhochdeutsch ca. 1050–1350 – Frühneuhochdeutsch ca. 1350–1650 – Neuhochdeutsch), ohne Details. Zweck ist ausschließlich die mentale Landkarte, damit der Lernende bei Modul 3 (Erste Lautverschiebung, betrifft die erste Pfeilstrecke) weiß, wo er sich zeitlich befindet, obwohl die Module selbst nicht chronologisch durchlaufen werden.

### 1.3 Übung direkt am Lernort, nicht erst im fertigen Tool

Retrieval Practice (Testing-Effect, Roediger/Karpicke) darf nicht bis zur fertigen Bauphase 4 warten. Module 3 und 5 bekommen deshalb je 3–5 einfache statische Übungsaufgaben mit Lösung („Leite selbst her: Idg. *treyes* → Gmc. ?") direkt im Lerntext, unabhängig vom späteren interaktiven Tool. Sonst entsteht zwischen Verstehen-Können und Selbst-Anwenden-Können eine Lücke von mehreren Bauphasen, in der das Wissen zur bloßen Illusion von Kompetenz verkommt.

Jedes Modul unten hat vier Angaben: Lernziel, Kerninhalt, Referenzliteratur (Standardwerke, die auch als Linksammlung-Kandidaten taugen) und Schwierigkeitsgrad (E = Einstieg, M = Mittel, F = Fortgeschritten). Ein „Hinweis"-Feld markiert didaktische Ergänzungen aus Rev. 2.

## 2. Modulübersicht

| Modul | Lernziel | Kerninhalt | Referenz | Schwierigkeit | Hinweis (Rev. 2) |
|---|---|---|---|---|---|
| Voraus: Orientierungs-Zeitstrahl | Sich zeitlich verorten können | 6 Sprachstufen ohne Detail, nur als Landkarte | – | E | Neu: Advance Organizer, kein eigenes Lernmodul |
| 0. Phonetik & IPA | Laute artikulatorisch beschreiben und transkribieren können | Einstieg über Vater/Bruder-Rätsel, dann Artikulationsorte/-arten, Konsonanten- und Vokaltrapez, Diakritika, phon. vs. phonolog. Transkription | IPA-Chart (IPA Association), Pompino-Marschall *Einführung in die Phonetik* | E | Kein Vollständigkeitszwang vor Modul 3 – volle Tabelle bleibt Nachschlagewerk |
| 12a. Wörterbuch-Basics (vorgezogen) | Grimm/DWDS/Lexer bedienen können | Nur Grundnutzung: Suchmaske, Lemmaformen, Abkürzungen lesen | s. Modul 12 | E | Vorgezogen aus Modul 12, weil ab Modul 3 ständig nachgeschlagen wird |
| 1. Sprachwandeltheorie | Wandeltypen unterscheiden, Regelmäßigkeitsprinzip verstehen | Lautwandel/Bedeutungswandel/morphologischer & syntaktischer Wandel, junggrammatisches Ausnahmslosigkeitsprinzip, Analogie als Gegenkraft | Paul, *Prinzipien der Sprachgeschichte*; Nübling et al. Kap. 1–2 | E–M | – |
| 2. Indogermanistik-Basics | Verwandtschaft german. Sprachen im idg. Kontext einordnen | Stammbaummodell, komparative Methode, Ablaut als idg. Erbe, idg. Grundwortschatz | Meier-Brügger, *Indogermanische Sprachwissenschaft* | M | – |
| 3. Erste (germanische) Lautverschiebung | Grimms und Verners Gesetz anwenden können | s. Abschnitt 4.1, inkl. 3–5 Übungsaufgaben mit Lösung | Ringe, *From PIE to Proto-Germanic* | M | Löst das Einstiegsrätsel aus 1.1 auf; Übung direkt hier, nicht erst in Bauphase 4 |
| 4. Sprachperioden des Deutschen | Ahd./Mhd./Frühnhd./Nhd. an Textmerkmalen erkennen | Periodisierung mit Datumsgrenzen, jeweilige Leitmerkmale (Vollvokale > Reduktionsvokale etc.) | von Polenz Bd. 1–3; Schmidt, *Geschichte der deutschen Sprache* | E–M | – |
| 4a. Primärtext-Vorgeschmack | Sehen, wofür die Werkzeuge gebraucht werden | Kurzer Ausschnitt Hildebrandslied mit Übersetzung daneben, keine Editionsarbeit | Deutsches Textarchiv (DTA) | E | Neu: motivierender Vorgriff auf Modul 11, keine Tiefe |
| 5. Zweite (hochdeutsche) Lautverschiebung | Verschiebungsstufen und geographische Streuung erklären | s. Abschnitt 4.2, inkl. 3–5 Übungsaufgaben mit Lösung | Wiesinger (Dialektgeographie); Nübling et al. Kap. 4 | M–F | Übung direkt hier, nicht erst in Bauphase 4 |
| 6. Vokalismus | Umlaut, Diphthongierung/Monophthongierung erklären und datieren | i-Umlaut (früh, vorahd./ahd.), mhd. Monophthongierung, nhd. Diphthongierung (î ei, û au, iu eu, erst frühnhd., ca. 700 Jahre später als i-Umlaut) | Paul/Klein/Solms/Wegera, *Mittelhochdeutsche Grammatik* | M | Jedes Teilphänomen einzeln auf dem Zeitstrahl aus 1.2 verorten, nicht als ein Block lernen |
| 7. Morphologischer Wandel | Kasus- und Verbalsystem historisch vergleichen | Flexionsabbau (Ahd. reich → Nhd. reduziert), starke/schwache Verben, 7 Ablautreihen | Braune/Reiffenstein, *Althochdeutsche Grammatik* | F | – |
| 8. Wortschatz & Etymologie | Wortherkunft und Entlehnungsschichten zuordnen | Erbwortschatz vs. Lehnwortschatz (Latein, Französisch, Englisch), Wortbildungswandel | Kluge/Seebold (aktuelle Auflage nur zum Nachschlagen, s. Abschnitt 6) | M | – |
| 9. Syntaxwandel | Wortstellungswandel (V2, Klammerbildung) nachvollziehen | Verbstellungstypen, Satzklammer-Entstehung | Fleischer/Schallert, *Historische Syntax des Deutschen* | F | – |
| 10. Schriftgeschichte | Schriftsysteme und Reformen einordnen | Runen, karolingische Minuskel, Fraktur, Orthographiereformen 1901/1996 | Nerius, *Deutsche Orthographie* | E | Bewusst leichteres Modul als Verschnaufpause zwischen 9 (F) und 11 (F) |
| 11. Textarbeit an Primärquellen | Originaltexte lesen, edieren, übersetzen | Hildebrandslied, Nibelungenlied, Lutherbibel, Editionsprinzipien | ReM-Korpus, DTA | F | Vertiefung von 4a, jetzt mit echter Editionsarbeit |
| 12. Wörterbücher & Referenzressourcen (vollständig) | Nachschlagewerke gezielt und quellenkritisch einsetzen | DWDS, Grimm'sches Wörterbuch, Lexer (Mhd. Handwörterbuch), BMZ, Kluge – inkl. Einordnung, was gemeinfrei und was lizenzpflichtig ist | – | E | Basisnutzung bereits als 12a vorgezogen; hier die vollständige, kommentierte Linksammlung |

## 3. Warum diese Reihenfolge und nicht chronologisch?

Ein Punkt bleibt bewusst unverändert: Die Reihenfolge Modul 3 → 4 → 5 (Erste Verschiebung → Perioden → Zweite Verschiebung) ist didaktisch und fachlich stimmig, weil die zweite Lautverschiebung selbst die Grenze definiert, die Althochdeutsch von seinen Vorstufen trennt. Perioden vor der zweiten Verschiebung einzuführen wäre fachlich falsch begründet, so verlockend eine rein chronologische Erzählung aus Sicht der Lernmotivation (Narrativ-Kohärenz) auch wäre. Der Orientierungs-Zeitstrahl aus 1.2 fängt diesen Bedarf nach einer Gesamterzählung ab, ohne die fachlich korrekte Modulreihenfolge zu opfern.

## 4. Die zwei Lautverschiebungen mit Formeln

### 4.1 Erste Lautverschiebung – mit Formeln

Grimms Gesetz beschreibt drei parallele Verschiebungsketten vom Urindogermanischen (Idg.) zum Urgermanischen (Gmc.):

- Tenues → Frikative: Idg. *p, *t, *k* → Gmc. *f, þ, h*. Beispiel: lat. *pater* → got. *fadar*, Idg. *tréyes* → Gmc. *þrīz* (→ nhd. *drei*).
- Aspirierte Medien → Medien: Idg. *bʰ, dʰ, ɡʰ* → Gmc. *b, d, g*. Beispiel: Idg. *bʰréh₂tēr* → Gmc. *brōþēr* (→ nhd. *Bruder*).
- Medien → Tenues: Idg. *b, d, g* → Gmc. *p, t, k*. Beispiel: Idg. *déḱm̥* → Gmc. *tehun* (→ nhd. *zehn*).

Verners Gesetz ist die zentrale, für Lernende verwirrende Ausnahme: Die aus Grimm entstandenen stimmlosen Frikative *f, þ, h, s* wurden stimmhaft (*b/v, d, g, z*), wenn im Urindogermanischen die Betonung **nicht** unmittelbar auf der vorausgehenden Silbe lag. Formal: `[+frikativ, -stimmhaft] → [+stimmhaft] / V̀... _ V (bei nicht-initialem idg. Akzent)`. Klassisches Beleg-Paar – und Auflösung des Einstiegsrätsels aus 1.1: Idg. *pətḗr* (Akzent auf der zweiten Silbe) → Gmc. *fadēr* (t → d durch Verner) → nhd. *Vater*, gegenüber *bʰréh₂tēr* (Akzent auf der ersten Silbe, direkt vor dem *t*) → Gmc. *brōþēr*, wo die Verschiebung ausbleibt. Der grammatische Wechsel im germanischen Verbalsystem (z. B. ahd. *ziehan* vs. *gizogan*, nhd. noch reliktartig in *war* vs. *gewesen*) ist eine direkte Folge von Verner.

**Übungsaufgaben (Modul 3, direkt hier zu lösen statt erst im späteren Tool):**

1. Idg. *ph₂tér-* → Gmc.? (Lösung: *fadēr*, Verner greift, Akzent nicht auf der Silbe vor *t*)
2. Idg. *ḱm̥tóm* (,,hundert") → Gmc.? (Lösung: *hundam*, ḱ→h nach Grimm, Akzent-Lage prüfen für t)
3. Idg. *swésōr* (,,Schwester") → Gmc.? (Lösung: *swestēr*, s bleibt stimmlos, da Akzent unmittelbar davor)
4. Warum bleibt in *brōþēr* das þ stimmlos, in *fadēr* wird es stimmhaft, obwohl beide aus Grimms Kette (t → þ) stammen? (Lösung: Akzentposition im Idg., s. Verner)

### 4.2 Zweite (hochdeutsche) Lautverschiebung – mit Formeln

Betrifft nur das Südgermanische (Vorläufer des Hochdeutschen) und lässt sich in zwei Teilverschiebungen mit unterschiedlicher geographischer Reichweite gliedern:

- Anlaut/Gemination/postkonsonantisch: Gmc. *p, t, k* → Affrikaten *pf, ts (z), kx (ch)*. Beispiel: engl. *apple* / niederl. *appel* → nhd. *Apfel*; engl. *tide* → nhd. *Zeit*.
- Intervokalisch/sonst: Gmc. *p, t, k* → Frikative *f, s (ß), ch*. Beispiel: engl. *sleep* / niederl. *slapen* → nhd. *schlafen*; engl. *water* → nhd. *Wasser*; engl. *make* / niederl. *maken* → nhd. *machen*.
- Gmc. *d* → *t*: engl. *day* → nhd. *Tag*.

Die Verschiebung ist geographisch gestuft, nicht abrupt – das ist ein Punkt, den reine Lektüre schlecht vermittelt und der sich hervorragend für eine Karte eignet: Die *machen/maken*-Isoglosse (Benrather Linie) trennt Nieder- von Mitteldeutsch, die *Appel/Apfel*-Isoglosse (Speyerer Linie) trennt Mittel- von Oberdeutsch, und dazwischen liegt der „Rheinische Fächer" mit mehreren gestaffelten Einzellinien (*ik/ich*, *dat/das*, *Pund/Pfund* etc.). Kein Dialekt hat alle Verschiebungsstufen gleich stark durchgeführt – das Alemannische/Bairische im Süden am konsequentesten, das Niederdeutsche im Norden gar nicht.

**Übungsaufgaben (Modul 5, direkt hier zu lösen):**

1. Engl. *pepper* / niederl. *peper* → nhd.? (Lösung: *Pfeffer*, p im Anlaut → pf)
2. Engl. *open* → nhd.? (Lösung: *offen*, p intervokalisch → f)
3. Engl. *heart* → nhd.? (Lösung: *Herz*, t intervokalisch/nach r → z/ts, Sonderfall der Anlautregel bei Konsonantenverbindung)
4. Warum sagt ein Norddeutscher eher *maken*, ein Süddeutscher *machen*, aber beide *Appel* bzw. *Apfel* uneinheitlich je nach genauer Lage zur Speyerer Linie? (Lösung: gestufte Isoglossen, Rheinischer Fächer)

## 5. Wo lohnt sich Interaktivität? Bewertung pro Thema

| Thema | Statischer Inhalt reicht? | Interaktive Form | Aufwand | Priorität |
|---|---|---|---|---|
| IPA-Referenz (Modul 0) | Nein – Nachschlagen ist der Hauptnutzen | Klickbare IPA-Tabelle mit Artikulationsmerkmalen, gefiltert auf die für die dt. Sprachgeschichte relevante Teilmenge (kein Klick-Overkill mit Zulu-Klicks o.ä.) | S | Sehr hoch |
| Linksammlung Wörterbücher (Modul 12) | Ja | Kuratierte, kommentierte Liste inkl. Lizenzstatus pro Quelle (kein Tool nötig) | S | Hoch (aber statisch) |
| Erste Lautverschiebung (Grimm/Verner) | Teilweise | Eingabefeld: idg. Wort → automatisch hergeleitete germanische Form mit Begründung pro Lautschritt (inkl. Verner-Bedingung) | M | Hoch |
| Zweite Lautverschiebung | Teilweise | Wie oben, plus Dialektkarte mit Isoglossen (Benrather/Speyerer Linie, Rheinischer Fächer) | M–L | Hoch |
| Rückwärts-Lautverschiebungstool (dein Punkt 4) | Nein | Regelbasierter Rückwärts-Solver: Nhd. Wort → mögliche germ./idg. Vorform(en) mit Regelkette als Erklärung | L | Hoch, aber technisch anspruchsvollste Komponente |
| Sprachperioden-Zeitstrahl (Modul 4, inkl. Advance-Organizer-Vorstufe aus 1.2) | Teilweise | Interaktiver Zeitstrahl mit Textbeispielen pro Periode (Vaterunser o. ä. parallel) | S–M | Hoch |
| Idg.-Stammbaum der Sprachfamilien (Modul 2) | Teilweise | Klickbarer Sprachstammbaum (Idg. → Germ. → West-/Nord-/Ostgerm. → Deutsch) | M | Mittel |
| Ablautreihen-Trainer (Modul 7) | Nein, Drill-Charakter | Quiz/Karteikarten zu den 7 starken Ablautreihen mit Verner-Bezug | M | Mittel |
| Umlaut/Diphthongierung (Modul 6) | Teilweise | Kleine Vorher-Nachher-Wortlisten, mit Zeitachsen-Markierung pro Phänomen | S | Niedrig–Mittel |
| Etymologie-/Wortfamiliengraph (Modul 8) | Teilweise | Graph-Visualisierung von Wortfamilien über Sprachstufen, Datenbasis nur aus gemeinfreien Quellen (s. Abschnitt 6) | L | Niedrig (Datenbeschaffung teuer) |
| Sprachwandeltheorie (Modul 1) | Ja | Fließtext/Erklärartikel | – | Statisch |
| Morphologie/Syntaxwandel (Module 7/9, Theorieteil) | Ja | Fließtext, ggf. Vorher-Nachher-Tabellen | – | Statisch |
| Schriftgeschichte (Modul 10) | Ja | Bildergalerie mit Schriftproben, kein Tool nötig | S | Niedrig |
| Primärtext-Vorgeschmack (4a) | Ja | Ein einzelnes statisches Beispiel genügt, kein Tool | – | Statisch, aber didaktisch wichtig |
| Primärtext-Reader (Modul 11, vertieft) | Nein | Paralleltext-Viewer: Originaltext, Transkription, Übersetzung, Wort-für-Wort-Glossierung synchron scrollbar, nur mit gemeinfreien Texten (DTA, Wikisource) | L | Mittel, aber sehr lehrreich |

## 6. Nur lizenzfreie Quellen – konkrete Einordnung

Entscheidung: Alle Texte und Wortdaten, die in Artefakten reproduziert (nicht nur verlinkt) werden, müssen gemeinfrei oder unter freier Lizenz stehen. Das betrifft vor allem den Etymologie-Graphen, das Rückwärts-Tool und den Primärtext-Reader; für die reine Linksammlung ist es unkritisch, da dort nur verlinkt wird.

Gemeinfrei und damit für Reproduktion geeignet: das Grimm'sche Wörterbuch (Erstauflage 19. Jh., digitalisiert von der Uni Trier auf woerterbuchnetz.de, gemeinfrei); Lexers Mittelhochdeutsches Handwörterbuch (1872–78, ebenfalls auf woerterbuchnetz.de, gemeinfrei); die Primärtexte selbst – Hildebrandslied, Nibelungenlied, Lutherbibel-Urtext (alle vor 1850 verfasst, damit gemeinfrei; moderne Neuübersetzungen oder Kommentare dazu i. d. R. nicht); das Deutsche Textarchiv (DTA) und Wikisource, die historische Texte gezielt gemeinfrei kuratieren; und – weniger bekannt, aber nützlich – die erste Auflage von Kluges *Etymologisches Wörterbuch der deutschen Sprache* von 1883, die als vergriffenes Werk vor 1928 gemeinfrei und über archive.org verfügbar ist, auch wenn die aktuelle Auflage (Kluge/Seebold) urheberrechtlich geschützt bleibt.

Nicht gemeinfrei und daher nur verlink-, nicht reproduzierbar: die aktuelle Kluge/Seebold-Auflage (De Gruyter), DWDS-Inhalte über die reine Verlinkung hinaus, sowie moderne Standardwerke wie Nübling et al. oder die aktuelle Auflage von Braune/Reiffenstein. Für Modul 8 (Wortschatz & Etymologie) heißt das konkret: Der Lerninhalt kann sich auf die aktuelle Fachliteratur stützen, aber jedes Artefakt, das Wortdaten tatsächlich in eigener Datenbasis speichert oder anzeigt, sollte auf Grimm, Lexer und Kluge 1883 zurückgreifen statt auf aktuelle Ausgaben.

**Ergänzung nach Bauphase 6 (s. Abschnitt 16):** Bei der tatsächlichen Umsetzung hat sich eine wichtige Differenzierung gezeigt, die dieser Abschnitt noch nicht klar genug macht: DWDS zeigt den Grimm-Text in zwei Fassungen parallel an – die Original-Ausgabe von 1854 ff. (¹DWB, gemeinfrei) und eine Neubearbeitung ab 1965 (²DWB, weiterhin geschützt). Beide sehen auf den ersten Blick gleich aus. Für künftige Artefakte gilt deshalb konkret: bei woerterbuchnetz.de/dwds.de-Quellen immer die ¹DWB-Kennzeichnung prüfen, nicht nur „Grimm" im Titel.

## 7. Priorisierte Bau-Roadmap

Reihenfolge nach Aufwand/Nutzen-Verhältnis und technischen Abhängigkeiten (das Rückwärts-Tool braucht die Regeln, die zuerst im Lautverschiebungs-Visualizer modelliert werden). Diese Reihenfolge betrifft, was wir *bauen*, nicht in welcher Reihenfolge du den Stoff *lernst* (dafür gilt Abschnitt 2):

| Phase | Artefakt | Abhängigkeit | Begründung |
|---|---|---|---|
| 1 (MVP) | IPA-Referenztabelle + Linksammlung Wörterbücher (inkl. Lizenzstatus) + Zeitstrahl der Sprachperioden | Keine | Schnell umsetzbar, adressiert direkt dein größtes Problem (IPA), liefert sofort sichtbaren Fortschritt |
| 2 | Interaktive erste Lautverschiebung (Grimm + Verner), inkl. der Übungsaufgaben aus 4.1 | Phase 1 (IPA-Notation wird gebraucht) | Kern des Fachs, Verner lässt sich nur mit IPA/Betonung sauber zeigen |
| 3 | Interaktive zweite Lautverschiebung + Isoglossenkarte, inkl. Übungsaufgaben aus 4.2 | Phase 2 (gleiches UI-Muster) | Baut auf demselben Regel-Visualisierungsmuster auf, ergänzt um Geographie |
| 4 | Rückwärts-Lautverschiebungstool | Phase 2+3 (Regeln müssen als Code vorliegen) | Technisch komplexeste Komponente – Mehrdeutigkeit muss transparent gemacht werden (ein Nhd. Lautstand hat oft mehrere mögliche Vorformen) |
| 5 | Stammbaum-Visualisierung, Ablautreihen-Trainer | Unabhängig, kann parallel zu Phase 3/4 laufen | Runden das Bild ab, geringeres Risiko |
| 6 | Paralleltext-Viewer, Etymologie-Graph | Phase 1–5, Datenbasis nur aus Abschnitt 6 (gemeinfreie Quellen) | Datenbeschaffung/-lizenzierung ist der Flaschenhals, deshalb spät |

**Damit ist die gesamte Roadmap durchlaufen** – Status aller sechs Phasen s. Abschnitte 11–16.

## 8. Verbleibendes Risiko: falsche Präzision beim Rückwärts-Tool

Lautgesetze sind nicht umkehrbar-eindeutig (mehrere Vorformen können zum selben Nhd.-Lautstand führen, Analogie und Entlehnung durchbrechen die Regelmäßigkeit) – das Rückwärts-Tool sollte das explizit kommunizieren (mehrere Kandidaten mit Wahrscheinlichkeit/Begründung statt einer einzigen „Antwort"), sonst suggeriert es falsche Präzision. Ergänzend zu Punkt 4 aus dem ursprünglichen Anforderungskatalog: ein Vorwärts-Check, der eine vorgeschlagene Vorform testweise wieder vorwärts durch die Regeln schickt, macht Verner-bedingte Mehrdeutigkeiten sichtbar, statt nur eine möglicherweise falsche Lösung zu präsentieren.

**Umsetzung s. Abschnitt 14:** Das gebaute Tool geht noch einen Schritt weiter als hier gefordert – es verweigert bei mehreren Wörtern (Lehnwörter, ungeklärte Etymologien) die idg.-Rekonstruktion komplett, statt nur mehrere unsichere Kandidaten anzuzeigen. Siehe dort für die Begründung.

## 9. Technische Umsetzung: Wo bauen wir was?

Entscheidung (10.09.2026): Zweistufiges Vorgehen statt sofortigem GitHub-Setup.

**Jetzt (Prototyping-Phase, Bauphasen 1–2):** Planungsdokumente wie dieses hier bleiben in Claude Projects. Einzelne interaktive Tools werden über Claude-Artefakte gebaut und veröffentlicht – jedes bekommt sofort eine eigene URL, ist ohne Setup teilbar und lässt sich in derselben Sitzung iterieren. Ein eigenes Repo würde in dieser Phase nur Infrastruktur ohne Gegenwert erzeugen: kein Code, der Versionierung bräuchte, keine Mitarbeit Dritter, keine Deployment-Pipeline mit echtem Ziel.

**Wechsel-Kriterium (nicht kalenderbasiert):** Sobald zwei oder mehr Tools gemeinsam auftreten sollen – gemeinsame Navigation, einheitliches Design, eigene Domain statt einzelner Artefakt-Links – ist der Zeitpunkt für ein echtes Repo gekommen. Realistisch fällt das nach den ersten 2–3 fertigen Artefakten aus den Bauphasen 1/2, nicht erst am Ende der Roadmap.

**Überprüfung des Kriteriums (11.09.2026):** Mit dem Abschluss von Phase 1 (drei fertige Artefakte, s. Abschnitt 11) war das Wechsel-Kriterium formal erreicht. Ich habe daraufhin geprüft, ob der Wechsel jetzt sinnvoll ist – Ergebnis:

- Fachlich/organisatorisch spricht das Kriterium für einen Wechsel: drei Artefakte mit gemeinsamem Design-System existieren bereits, eine gemeinsame Navigation wäre jetzt technisch sinnvoll.
- Praktisch gibt es aktuell zwei Hindernisse: Für diese Sitzung ist kein GitHub-MCP-Connector verfügbar (Registry-Suche ohne Treffer), und es ist kein Rechner mit dieser Sitzung verlinkt (Device-Bridge nicht verbunden) – beides wäre für einen Repo-Workflow (Commits, Reviews, ggf. lokales Bauen) nötig.
- Entscheidung: Wir bleiben bei Claude Artifacts, bewusst und nicht nur mangels Alternative – die drei bisherigen Artefakte funktionieren gut als eigenständige, sofort teilbare Seiten, und ein Wechsel jetzt würde Zeit in Repo-Infrastruktur stecken statt in den fachlich wichtigeren nächsten Baustein (Phase 2, Grimm/Verner-Tool). Diese Entscheidung ist offen, nicht an einen festen späteren Zeitpunkt gekoppelt – sie wird neu bewertet, sobald entweder ein GitHub-Connector verfügbar wird, ein Rechner verlinkt ist, oder der Bedarf an gemeinsamer Navigation/Design so groß wird, dass die Artefakt-Einzellinks spürbar stören.

**Erneute Überprüfung (12.09.2026, nach Abschluss aller sechs Bauphasen):** s. Abschnitt 17 – neuer Stand, weiterhin offen.

**Dann:** Einfache statische Website (reines HTML/CSS/JS oder ein schlankes Static-Site-Tool wie Eleventy/Astro), Hosting über GitHub Pages (kostenlos, für diesen Zweck ausreichend) **oder über den in Abschnitt 17 gefundenen Connector Macaly Cloud**. Migration der bestehenden Artefakte als Unterseiten dieser Site.

**Damit die Migration billig bleibt:** Die JavaScript-Logik der Lautgesetz-Regeln (Grimm/Verner, zweite Verschiebung) wird von Anfang an, auch innerhalb der Single-File-Artefakte, sauber modular geschrieben – Regel-Logik klar getrennt von Darstellung. So lässt sie sich später 1:1 in eigene `.js`-Dateien im Repo übernehmen, statt für die Website neu geschrieben zu werden. Das ist besonders relevant für Bauphase 4 (Rückwärts-Tool), das direkt auf dieser Regel-Logik aufbaut — **in Bauphase 3 und 4 tatsächlich so umgesetzt, s. Abschnitte 13–14.**

## 10. Nächste Schritte

Ursprünglicher Vorschlag (überholt): Wir starten mit Phase 1 als erstes gemeinsames Artefakt. **Alle sechs Phasen sind inzwischen abgeschlossen (s. Abschnitte 11–16). Offen ist nur noch die Architekturfrage aus Abschnitt 17.**

## 11. Baustatus Phase 1

- **IPA-Referenztabelle — fertig.** „Lautzeichen-Tafel": https://claude.ai/code/artifact/54cf13e6-4c35-4f3d-9f04-7be12d00dcb5 — Konsonantengitter und Vokaltrapez, beschränkt auf die für die deutsche Sprachgeschichte relevante Teilmenge, mit Ein-/Ausblenden der historischen/Rekonstruktionszeichen (default aus, s. Abschnitt 1.1) und direkter Verknüpfung zum Vater/Bruder-Einstiegsrätsel und zu Modul 3.
- **Linksammlung Wörterbücher — fertig.** „Wörterbuch-Kompass": https://claude.ai/code/artifact/4ca68cbd-d8aa-4ab2-8e3f-c81223f3e83a — 14 Wörterbücher und Textkorpora, nach Lizenzstatus (gemeinfrei/frei zugänglich/geschützt) filterbar, inkl. Pokorny-Warnhinweis zu rechtlich unklaren Online-Scans. Setzt die Einteilung aus Abschnitt 6 direkt um; die grün markierten Einträge sind die zulässigen Datenquellen für Etymologie-Graph und Primärtext-Reader (Bauphase 6).
- **Zeitstrahl der Sprachperioden — fertig.** „Sprachstufen-Zeitstrahl": https://claude.ai/code/artifact/4b52c768-6428-42b9-a816-6255bbfeb983 — sechs Sprachstufen plus die vier Lautgesetz-Ereignisse dazwischen (Erste LV, Zweite LV, i-Umlaut, Diphthongierung/Monophthongierung), mit Originalbelegen (Gallehus-Inschrift, Hildebrandslied, Nibelungenlied, Luther) und Verweis auf die passenden Module. Bewusst als Advance Organizer gehalten: Standardansicht knapp, Details erst per Klick.

**Damit ist Phase 1 (MVP) vollständig.** Technische Entscheidung dazu s. Abschnitt 9 (bewusst bei Claude Artifacts geblieben, kein Wechsel zu GitHub trotz erreichtem Kriterium).

## 12. Baustatus Phase 2

- **Erste Lautverschiebung (Grimm + Verner) — fertig.** „Grimm & Verner": https://claude.ai/code/artifact/63a90127-ca09-45c3-bf78-9939e872862c — Regel-Engine (sauber getrennt von der Darstellung, s. Abschnitt 9) leitet aus einem selbst zusammengesetzten idg. Wort (5 Positionen C-V-C-V-C plus Akzentmarkierung) die urgermanische Form her, mit vollständiger Schritt-für-Schritt-Begründung pro Laut. Galerie mit den 6 Wörtern aus Abschnitt 4.1 (Vater, drei, Bruder, zehn, hundert, Schwester) plus alle 4 Übungsaufgaben als Karten mit Lösungsaufdeckung. Vokalqualität bewusst stark vereinfacht (nur o→a und silbische Sonanten m̥/n̥→un), das ist Modul 6 vorbehalten — im Werkzeug selbst klar kommuniziert.
- Damit ist auch die Regel-Logik für Grimms Gesetz bereits als eigenständiges, migrationsfähiges JS-Modul vorhanden, das Bauphase 3 (zweite Lautverschiebung, s. Abschnitt 7) direkt weiterverwenden bzw. erweitern kann.

## 13. Baustatus Phase 3

- **Zweite Lautverschiebung + Isoglossenkarte — fertig.** „Zweite Lautverschiebung": als HTML-Datei in der Chat-Sitzung bereitgestellt (kein separat gehosteter Artefakt-Link wie in Phase 1/2, s. Hinweis in Abschnitt 17). Regelwerkzeug für Gmc. *p/t/k/d* mit 10 Wortbeispielen (Pfeffer, Apfel, Pfund, offen, schlafen, Zeit, Herz, Wasser, machen, Tag) inkl. Formel pro Lautschritt. Isoglossenkarte (schematisch) mit antippbaren Regionen (Niederdeutsch/Mitteldeutsch/Oberdeutsch), zeigt Benrather Linie, Speyerer Linie und Rheinischen Fächer anhand von 7 Vergleichswörtern. Alle 4 Übungsaufgaben aus Abschnitt 4.2 mit Lösungsaufdeckung. Regel-Logik als von der Darstellung getrennte JS-Objekte umgesetzt (s. Abschnitt 9).

## 14. Baustatus Phase 4

- **Rückwärts-Lautverschiebungstool — fertig.** Zweistufiger Aufbau: Stufe 1 (rein strukturelle Umkehr der zweiten Lautverschiebung, gilt für alle 10 Wörter aus Bauphase 3) und Stufe 2 (Rückführung auf die idg. Stufe). Bei der Umsetzung zeigte sich, dass mehrere der Bauphase-3-Wörter entweder Lehnwörter sind (Pfeffer, Pfund – beide aus dem Lateinischen, erst nach der ersten Lautverschiebung entlehnt) oder keine gesicherte idg. Wurzel haben (Apfel, vermutlich vorindogermanisches Substratwort; offen, schlafen, machen – Etymologie unsicher). Für diese sechs Wörter bricht das Tool die Rekonstruktion bewusst auf der urgermanischen Stufe ab, statt eine idg. Vorform zu erfinden — genau die in Abschnitt 8 geforderte Vorsicht, nur konsequenter umgesetzt als dort ursprünglich beschrieben (Abbruch statt nur „mehrere unsichere Kandidaten"). Für die vier Wörter mit gesicherter Etymologie (Zeit, Herz, Wasser, Tag) liefert das Tool echte idg. Rekonstruktionen mit Vorwärts-Check; *Tag* zeigt dabei exemplarisch eine echte Verner-bedingte Mehrdeutigkeit (zwei gleichwertige idg. Kandidaten, beide über den Vorwärts-Check bestätigbar).

## 15. Baustatus Phase 5

- **Sprachstammbaum — fertig.** Klickbarer, aufklappbarer Baum Idg. → Germ. → Nord-/Ost-/Westgerm. → Kontinentalwestgermanisch → Hochdeutsch (Ahd./Mhd./Frühnhd./Nhd.), mit „Vater" als Leitwort durch alle Zweige inkl. dreier außergermanischer Vergleichszweige (Latein, Griechisch, Sanskrit). Schließt den Bogen zum Einstiegsrätsel aus Modul 0/Abschnitt 1.1.
- **Ablautreihen-Trainer — fertig.** Referenzteil mit allen 7 starken Ablautreihen (Formel + 3–4 Beispielverben je Reihe) und Karteikarten-Trainer (Infinitiv antippen → selbst herleiten → aufdecken → „Nochmal"/„Gewusst", gemischtes Deck aus 16 Verben). Grammatischer Wechsel als direkte Verner-Folge markiert bei *ziehen* (h/g), *frieren* (s/r, Rhotazismus) und *werden* (þ/d); Randnotiz zu *war/gewesen* als supplettivem Sonderfall (kein reguläres Ablautverb) mit Verweis auf Abschnitt 4.1.

## 16. Baustatus Phase 6

- **Paralleltext-Viewer — fertig.** Drei gemeinfreie Primärtexte aus drei Sprachstufen, jeweils zeilenweise Original über Übersetzung gestapelt (statt zweier synchron scrollender Spalten – auf dem Handy deutlich lesbarer): Hildebrandslied Z. 1–6 (Ahd., mit vollständiger Wort-für-Wort-Glossierung), Nibelungenlied 1. Strophe (Mhd.), Lutherbibel 1545 (Vaterunser, Genesis 1,1–3). Originaltext recherchiert (Hildebrandslied nach einer Edition der Sächsischen Akademie der Wissenschaften Leipzig; Lutherbibel nach dem Druck von 1545 über bibel-online.net/stilkunst.de). **Übersetzung und Glossierung sind eigenständig erstellt, nicht aus der vorliegenden wissenschaftlichen Übersetzung übernommen** — diese ist urheberrechtlich geschützt und darf nicht reproduziert werden, obwohl der Originaltext selbst gemeinfrei ist. Projekt Gutenberg wurde geprüft, lieferte aber keine geeignete Fassung (nur Lutherbibel 1912, nicht der gewünschte 1545er Urtext; kein Hildebrandslied/Nibelungenlied in brauchbarer Form).
- **Etymologie-Graph — fertig.** Interaktiver Graph zu zwei Wortfamilien (Vater, Apfel), Knoten antippbar für Beleg und Erklärung. Datengrundlage ausschließlich die gemeinfreie Original-Grimm-Ausgabe (¹DWB über dwds.de), nicht die geschützte Neubearbeitung ²DWB (s. Ergänzung in Abschnitt 6). Bemerkenswerte Funde direkt aus der Quelle: *Vetter* ist historisch derselbe umgelautete Plural wie *Vater* (ahd./mhd. *veter*), semantisch zu „Cousin" verengt; Grimm hält bei *Apfel* ausdrücklich fest, dass es im Lateinischen und Griechischen kein verwandtes Wort gibt – ein Beleg für die in Abschnitt 14 vermutete vorindogermanische Substratherkunft.

**Damit sind alle sechs Bauphasen aus Abschnitt 7 abgeschlossen.**

## 17. Offene Architekturentscheidung (Update zu Abschnitt 9)

Erneute Prüfung am 12.09.2026, nach Abschluss aller sechs Bauphasen: Das Wechsel-Kriterium aus Abschnitt 9 ist inzwischen deutlich überfällig – neun statt drei Artefakte ohne gemeinsame Navigation. Zwei Punkte haben sich seit der letzten Prüfung (Abschnitt 9) verändert:

- **GitHub-Connector:** weiterhin nicht verfügbar (Registry-Suche erneut ohne Treffer).
- **Rechneranbindung:** teilweise verändert. In der aktuellen Sitzung besteht Dateisystemzugriff (die Artefakte aus Bauphase 3–6 wurden damit direkt als Dateien gebaut, nicht als separat gehostete Claude-Artefakte mit eigener URL wie in Phase 1/2 – daher fehlen in Abschnitt 13–16 die gewohnten claude.ai/code/artifact-Links). Dieser Zugriff hat aber keine Internetverbindung, kann also nicht selbst zu GitHub pushen oder etwas hosten.
- **Neuer Fund:** ein MCP-Connector namens **Macaly Cloud** („Claude writes the code, Macaly runs it – a git repo, cloud sandbox, database, live preview and production hosting") wurde in der Registry gefunden und könnte die fehlende GitHub-Anbindung ersetzen, ohne dass ein lokaler Push nötig wäre.

**Status:** Die Entscheidung zwischen Macaly Cloud (echtes Repo + Hosting, gemeinsame Navigation für alle neun Artefakte) und dem Verbleib bei einzelnen Claude Artifacts steht noch aus.

## 18. Baustatus final: Migration nach GitHub Pages (Update, 13.09.2026)

Macaly Cloud wurde ausprobiert und **verworfen** — der dort erzeugte Code ließ sich nicht exportieren/portieren, ein Ausschlusskriterium angesichts der in Abschnitt 9 verankerten Portabilitätsanforderung. Kein Fortführen dieses Ansatzes.

Stattdessen: **GitHub + GitHub Pages**, per Eleventy als schlanker Static-Site-Generator. Alle zehn Artefakte aus Abschnitt 11–16 liegen jetzt als Dateien im Repo [S540d/Grundlagen_Linguistik](https://github.com/S540d/Grundlagen_Linguistik), unverändert übernommen (Phase 1/2 aus den in Abschnitt 11/12 verlinkten Claude Artifacts, die entgegen einer zwischenzeitlichen Annahme in einer späteren Sitzung doch noch zugänglich waren). Eine gemeinsame Übersichtsseite verlinkt alle zehn Tools nach Bauphase gruppiert; die zwei unterschiedlichen Design-Systeme (Phase 1/2: dunkle Palette mit Dark-Mode, Google Fonts; Phase 3–6: helle Palette, Systemfonts, s. Abschnitt 2 des Migrations-Briefings) wurden bewusst nicht vereinheitlicht, um den bestehenden, funktionierenden Code nicht anzufassen. Deploy automatisiert über GitHub Actions bei jedem Push auf `main`.

**Damit ist die Migration abgeschlossen, alle zehn Module sind live.**
