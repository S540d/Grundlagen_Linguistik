# CLAUDE.md

Projektspezifische Hinweise für Claude Code in diesem Repository.

## Wartung: CLAUDE.md klein halten

(Regel aus [project-templates#160](https://github.com/S540d/project-templates/issues/160), sync-fähig via `dev-standards/base/global-policy.md#claudemd-wartung`.)

- **Maximal 300 Zeilen / 30 KB.** Diese Datei wird bei jeder Session vollständig in den Kontext geladen — sie wächst nur mit Kernregeln, nicht mit Erzählungen.
- Beschreibt ein Abschnitt einen konkreten Vorfall (Bug, Diagnose-Verlauf, Beispielwerte), gehören hier maximal 2-3 Zeilen (Kernregel + kurzer Auslöser-Kontext) hinein + ein Link auf `docs/private/INCIDENTS.md`. Die volle Erzählung (Datum, PR-/Issue-Nummer, betroffene Dateien, Diagnose-Schritte) gehört ausschließlich dorthin, nie doppelt in beide.
- `docs/private/INCIDENTS.md` ist bewusst **gitignored** (siehe `.gitignore`) — reine lokale Gedächtnisstütze, kein Teil des geteilten Repo-Zustands. Existiert noch keine Datei, wird sie erst beim ersten dokumentierten Vorfall lokal angelegt.
- Aktuell gültiges Architektur-/Prozesswissen, das kein Vorfall ist, aber zu ausführlich für CLAUDE.md wäre, gehört in versionierte `docs/*.md`-Dateien statt hierher.

## Projekt

Eleventy-Lernpfad „Historische Linguistik" (siehe README.md). Deploy automatisch via GitHub Actions bei Push auf `main`.
