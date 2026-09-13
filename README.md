# Grundlagen Linguistik

Lernpfad „Historische Linguistik" — deutsche Sprachgeschichte vom Indogermanischen bis zum Neuhochdeutschen, als interaktive Werkzeuge.

**Live:** https://s540d.github.io/Grundlagen_Linguistik/

## Entwicklung

```bash
npm install
npm run serve   # lokaler Dev-Server
npm run build   # Build nach _site/
```

Basiert auf [Eleventy](https://www.11ty.dev/). Die HTML-Lernpfad-Tools liegen unverändert in `src/tools/` (Passthrough-Copy), die Startseite mit Tool-Übersicht ist `src/index.njk`.

Deploy erfolgt automatisch via GitHub Actions bei jedem Push auf `main` (siehe `.github/workflows/`).
