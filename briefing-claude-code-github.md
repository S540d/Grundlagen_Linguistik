# Projekt-Briefing: „Historische Linguistik" — Migration nach GitHub

Dieses Dokument ist die Übergabe für eine neue Claude-Code-Sitzung. Ziel: alle zehn Werkzeuge des Lernpfads
„Historische Linguistik" (deutsche Sprachgeschichte) in einem GitHub-Repo zusammenführen, mit gemeinsamer
Navigation, und über GitHub Pages hosten.

**Bitte zusammen mit diesem Briefing hochladen:** die sechs HTML-Dateien aus Bauphase 3–6 (Dateinamen unten in
Abschnitt 2). Sie liegen im Download-Ordner der Person, die diese Sitzung startet.

## 1. Vorgeschichte in Kürze

Der fachliche Lernplan (Datei `lernplan-historische-linguistik.md`, liegt als Claude-Project-Wissen vor, idealerweise
ebenfalls mit hochladen) sieht zehn interaktive Werkzeuge vor, gruppiert in sechs Bauphasen. Ursprünglich als
einzelne Claude-Artefakte gebaut (Phase 1–2, vier Tools), dann direkt als portable HTML-Dateien (Phase 3–6, sechs
Tools). Ein Zwischenversuch, alles in einer Macaly-Cloud-App (React/TanStack/Tailwind) zusammenzuführen, wurde
abgebrochen, weil sich der dortige Code nicht exportieren lässt — dieser Ansatz ist absichtlich nicht Teil dieses
Briefings, der Macaly-Code ist wertlos für die Weiterarbeit und sollte ignoriert werden.

**Entscheidung:** Von hier an GitHub + GitHub Pages statt einer Drittanbieter-Plattform, damit der Code jederzeit
exportierbar/portabel bleibt.

## 2. Was schon fertig ist: sechs eigenständige HTML-Dateien

Jede Datei ist vollständig lauffähig für sich (kein Build-Schritt nötig, reines HTML/CSS/JS, keine externen
Abhängigkeiten außer Systemschriften). Sie sollten möglichst unverändert übernommen werden — nur die Navigation
und ggf. das Seitenlayout müssen vereinheitlicht werden.

| Datei | Modul | Inhalt |
|---|---|---|
| `zweite-lautverschiebung.html` | Modul 5, Bauphase 3 | Regelwerkzeug für Gmc. p/t/k/d, Isoglossenkarte (SVG, Benrather/Speyerer Linie, Rheinischer Fächer), 4 Übungsaufgaben |
| `rueckwaerts-lautverschiebung.html` | Modul 5, Bauphase 4 | Nhd. Wort → mögliche germ./idg. Vorformen mit Regelkette; bricht bei Lehnwörtern/unsicherer Etymologie bewusst ab statt zu raten; Vorwärts-Check |
| `sprachstammbaum.html` | Modul 2, Bauphase 5 | Klickbarer Baum Idg. → Germ. → Hochdeutsch, „Vater" als Leitwort durch alle Zweige |
| `ablautreihen-trainer.html` | Modul 7, Bauphase 5 | Referenz zu den 7 starken Ablautreihen + Karteikarten-Trainer (In-Memory, kein LocalStorage) |
| `paralleltext-viewer.html` | Modul 11, Bauphase 6 | Hildebrandslied/Nibelungenlied/Lutherbibel 1545 im Vergleich, eigene Übersetzung (nicht kopiert) |
| `etymologie-graph.html` | Modul 8, Bauphase 6 | Interaktiver Graph zu den Wortfamilien „Vater" und „Apfel", Belege aus dem Original-Grimm (¹DWB) |

### Design-System dieser sechs Dateien (bitte für neue Tools und gemeinsame Navigation übernehmen)

```css
--paper: #E7E1CE;        /* Seitenhintergrund */
--paper-raised: #EFEADA; /* Karten/Boxen */
--ink: #232F39;          /* Haupttext */
--ink-soft: #57646E;     /* Sekundärtext */
--ink-faint: #8A8F82;    /* Feiner Text/Meta */
--rust: #A0432B;         /* Akzent 1: Hervorhebung, Ergebnisse */
--rust-soft: #C97A5E;
--river: #2C6E7F;         /* Akzent 2: interaktive Elemente, aktive Zustände */
--river-soft: #DCE9EA;
--line: #B9AF93;          /* Rahmen/Trenner */
--radius: 10px;
--serif: Iowan Old Style, Palatino Linotype, Palatino, Georgia, serif;  /* Überschriften, Originalzitate */
--sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; /* Fließtext/UI */
```

Optik: Karten/Karteikarten-Ästhetik, hairline-Rahmen statt Schatten, kein Overuse von Großbuchstaben-Labels, mobil
zuerst (max-width ~480–560px zentriert, getestet für ~380px Viewport).

## 3. Was noch fehlt: vier Tools aus Phase 1–2, neu zu bauen

Der Quellcode der ursprünglichen Claude-Artefakte (Phase 1–2) war nicht mehr zugänglich (weder über die
Artefakt-URL noch über die Code-Ansicht in claude.ai) und musste aus der Spezifikation im Lernplan neu geschrieben
werden. Ein erster Entwurf davon existiert nur als React/Tailwind-Code in der verworfenen Macaly-App — der ist
**nicht** exportierbar und sollte nicht als Ausgangspunkt dienen, aber die folgenden Inhaltsangaben fassen
zusammen, was in diesem Entwurf inhaltlich stand (nicht der Code, nur der Inhalt):

### 3.1 Lautzeichen-Tafel (Modul 0)
- Konsonantengitter: Zeilen = Artikulationsart (Plosiv, Nasal, Frikativ, Affrikate, Approximant/Liquid), Spalten =
  Artikulationsort (Bilabial, Labiodental, Alveolar, Postalveolar, Palatal, Velar, Glottal). Nur die für die
  deutsche Sprachgeschichte relevante Teilmenge (p b, t d, k g, m n ŋ, f v, s z, ʃ, ç, x, h, pf, ts, tʃ, l r, j, ʔ).
- Vokaltrapez (vereinfacht): i, y, e, ø, ɛ, ə, a, u, o, ɔ als SVG-Trapez positioniert (oben=geschlossen,
  unten=offen, links=vorn, rechts=hinten).
- Umschaltbarer Block „Historische/Rekonstruktionszeichen" (default aus): þ/ð, bʰ dʰ gʰ, ḱ ǵ ǵʰ, h₁ h₂ h₃, m̥ n̥ —
  mit Kurzerklärung, wofür sie stehen.
- Callout, der auf das Einstiegsrätsel verweist: engl. *father* vs. dt. *Vater* (f vs. þ/d), während
  *brother/Bruder* denselben Anlaut behalten — Verweis auf Modul 3.

### 3.2 Wörterbuch-Kompass (Modul 12)
- Liste von 14 Wörterbüchern/Korpora, jeweils mit Lizenzstatus-Badge (gemeinfrei / frei zugänglich / geschützt)
  und Filter danach. Einträge decken sich mit Abschnitt 6 des Lernplans, u. a.:
  - ¹DWB (Grimm, Original 1854 ff.) — gemeinfrei — **wichtig: von ²DWB (Neubearbeitung ab 1965, geschützt)
    unterscheiden**, siehe Etymologie-Graph-Datei für die genaue Abgrenzung.
  - Lexer Mhd. Handwörterbuch, BMZ — gemeinfrei
  - Kluge, 1. Auflage 1883 (archive.org) — gemeinfrei; aktuelle Kluge/Seebold-Auflage — geschützt
  - DWDS, DTA, Wikisource, ReM-Korpus, IPA-Chart — frei zugänglich/gemeinfrei je nach Inhalt
  - Pokorny — Warnhinweis, dass Online-Scans rechtlich uneinheitlich sind

### 3.3 Sprachstufen-Zeitstrahl (Modul 4, Vorstufe 1.2)
- Sechs Sprachstufen (Urindogermanisch, Urgermanisch, Althochdeutsch ~750–1050, Mittelhochdeutsch ~1050–1350,
  Frühneuhochdeutsch ~1350–1650, Neuhochdeutsch), jeweils mit Beleg (Gallehus-Inschrift, Hildebrandslied,
  Nibelungenlied, Lutherbibel) und Kurznotiz.
- Vier Lautgesetz-Ereignisse dazwischen: Erste Lautverschiebung, i-Umlaut, Zweite Lautverschiebung,
  Diphthongierung/Monophthongierung — jeweils an der richtigen Stelle der Zeitleiste markiert.
- Bewusst als Advance Organizer gehalten: Standardansicht knapp (nur Namen + Zeitspanne), Details erst per Klick.

### 3.4 Grimm & Verner (Modul 3)
- Kern: Regelwerkzeug für die erste Lautverschiebung. Ursprünglich als freies 5-Positionen-Konstruktionsfeld
  (C-V-C-V-C + Akzentmarkierung) geplant; in der Neufassung stattdessen als Galerie der 6 Wörter aus Abschnitt 4.1
  umgesetzt — beide Varianten sind legitim, freies Konstruieren ist die treuere Umsetzung der ursprünglichen Idee,
  falls dafür Kapazität da ist.
- Die 6 Wörter mit vollständiger Regelkette (idg. → gmc. → nhd., jeder Lautschritt einzeln benannt inkl.
  Verner-Bedingung):
  - *ph₂tḗr → *fadēr → **Vater** (p→f Grimm; t→þ Grimm, dann þ→d Verner, da Akzent auf der 2. Silbe)
  - *tréyes → *þrīz → **drei** (t→þ Grimm, bleibt stimmlos, Akzent unmittelbar davor)
  - *bʰréh₂tēr → *brōþēr → **Bruder** (bʰ→b Grimm; t→þ Grimm, bleibt stimmlos)
  - *déḱm̥ → *tehun → **zehn** (d→t Grimm; ḱ→h Grimm; m̥→un)
  - *ḱm̥tóm → *hundam → **hundert** (ḱ→h Grimm; m̥→un; t→d Grimm dann Verner)
  - *swésōr → *swestēr → **Schwester** (s bleibt stimmlos, Akzent unmittelbar davor)
- Plus die 4 Übungsaufgaben aus Abschnitt 4.1 des Lernplans mit Lösungsaufdeckung (Text dort nachschlagen).

## 4. Gemeinsame Navigation / Website-Struktur

- Eine `index.html` (oder Framework-Startseite) mit Übersicht aller zehn Werkzeuge, gruppiert nach Bauphase, mit
  kurzer Beschreibung pro Tool (siehe Tabelle oben + Abschnitt 3).
- Header-Navigation, die auf jeder Seite gleich aussieht (Logo/Titel „Historische Linguistik" + Links zu allen
  zehn Tools).
- Freie Technologieentscheidung für die neue Sitzung: entweder die sechs bestehenden HTML-Dateien unverändert
  lassen und nur eine gemeinsame `<nav>` per Include/Templating einziehen (z. B. mit einem schlanken
  Static-Site-Generator wie Eleventy/Astro, wie ursprünglich in Abschnitt 9 des Lernplans vorgeschlagen), oder
  alles in ein einheitliches Framework überführen. Erstere Option ist risikoärmer, weil der bestehende,
  funktionierende Code dabei unangetastet bleibt.
- Hosting: GitHub Pages.

## 5. Wichtige inhaltliche Leitplanken (bitte beibehalten)

- **Keine erfundenen Etymologien.** Das Rückwärtstool bricht bei mehreren Wörtern (Pfeffer, Apfel, Pfund, offen,
  schlafen, machen) die idg.-Rekonstruktion bewusst ab, weil die Wortgeschichte unsicher oder das Wort ein
  Lehnwort ist. Dieses Prinzip sollte bei jeder Erweiterung gelten: lieber „Rekonstruktion endet hier" als eine
  plausibel klingende, aber unbelegte Vorform.
- **Übersetzungen/Glossierungen im Paralleltext-Viewer sind selbst geschrieben**, nicht aus der (urheberrechtlich
  geschützten) wissenschaftlichen Übersetzung von R. Lühr (SAW Leipzig) übernommen. Der Originaltext selbst ist
  gemeinfrei, jede weitere Übersetzung/Bearbeitung sollte ebenfalls eigenständig bleiben.
- **¹DWB vs. ²DWB:** Beim Original-Grimm (dwds.de/wb/dwb/…) unbedingt die ¹-Kennzeichnung prüfen. Die
  Neubearbeitung (²DWB, ab 1965) ist weiterhin geschützt und darf nicht als Quelle für reproduzierte Wortdaten
  dienen.
- Alle reproduzierten Primär- und Wörterbuchtexte müssen gemeinfrei sein (Details: Abschnitt 6 des Lernplans).

## 6. Offene Punkte für die neue Sitzung

1. Technologieentscheidung für die Website-Struktur treffen (s. Abschnitt 4).
2. Die vier Phase-1/2-Tools nach der Spezifikation in Abschnitt 3 bauen.
3. Gemeinsame Navigation über alle zehn Tools einziehen, Design-Tokens aus Abschnitt 2 durchgängig verwenden.
4. Repo auf GitHub anlegen, GitHub Pages aktivieren.
5. Den Lernplan (`lernplan-historische-linguistik.md`) um einen neuen Baustatus-Abschnitt ergänzen, sobald die
   Migration abgeschlossen ist.
