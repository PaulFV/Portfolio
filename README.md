# Persönliche Website — Paul Fodor

Portfolio-Seite für Bewerbungen im Tech-Bereich, Schwerpunkt Industrieautomation.

Statisches HTML, CSS und JavaScript. Kein Build-Schritt, keine Abhängigkeiten,
kein `npm install`. Die Dateien lassen sich direkt bearbeiten und hochladen.
Das Layout passt sich an Desktop, Tablet sowie iPhone- und Android-Breiten an;
Farbschema und Sprache (Deutsch/Englisch/Rumänisch) werden direkt im Header umgeschaltet.
Auf kleinen Displays wird die Navigation als ausklappbares Hamburger-Menü mit
großen Touch-Zielen dargestellt; auf Desktop bleibt die Navigation sichtbar.

---

## Lokal ansehen

Am einfachsten: **Doppelklick auf `index.html`**. Die Seite kommt ohne Server
aus, alle Pfade sind relativ.

Wer es genau wie später im Netz sehen will, startet den mitgelieferten
Mini-Server. Er braucht nur PowerShell — kein Node, kein Python:

```bash
powershell -NoProfile -ExecutionPolicy Bypass -File tools/serve.ps1 -Port 8123
```

Danach im Browser `http://localhost:8123` öffnen; beenden mit `Strg + C`.

---

## Was noch auszufüllen ist

Alle Stellen, an denen persönliche Angaben fehlen, sind im Quelltext so markiert:

```html
<span class="todo">[[ AUSFÜLLEN: ... ]]</span>
```

Auf der Seite erscheinen sie **orange hervorgehoben**. Wenn keine orange Stelle
mehr zu sehen ist, ist die Seite fertig. Erfundene Angaben stehen bewusst
nirgends — Zahlen und Fakten kommen von dir.

Reihenfolge, die am schnellsten zu einem vorzeigbaren Ergebnis führt:

1. **Der Satz im Hero.** Das wichtigste Element der Seite. In `index.html`
   stehen darüber zwei Alternativen als Kommentar — die überzeugendste
   auswählen, die anderen löschen.
2. **Profil.** Drei Absätze; besonders der dritte, persönliche Absatz.
3. **Skills.** Einordnung ehrlich vergeben. `Kernkompetenz` verliert seinen
   Wert, wenn alles Kernkompetenz ist — drei bis fünf sind glaubwürdig.
4. **Kontakt.** Profil-Links eintragen, nicht genutzte Einträge löschen.
5. **Projekte.** Zuletzt, weil es am meisten Arbeit ist.
6. **Portraitfoto** liegt als `assets/img/portrait.png` — freigestellt, mit
   transparentem Hintergrund. Es steht ohne Rahmen frei auf der Seite und
   behält sein eigenes Seitenverhältnis, wird also nie beschnitten.
   Beim Austausch: **PNG verwenden, nicht JPG** — JPG kann keine Transparenz.
   Fehlt die Datei, zeigt die Seite einen Platzhalter statt eines kaputten
   Bildsymbols. Die Anzeigebreite steuert `max-width` bei `.portrait` in
   `assets/css/style.css`.

Vor dem Veröffentlichen zusätzlich löschen: die beiden Hinweiskästen, die
ausdrücklich an dich gerichtet sind (im Projekte- und im Kontaktbereich).

---

## Ein neues Projekt anlegen

1. `projekte/vorlage.html` kopieren, z. B. nach `projekte/pruefstand-simulator.html`
2. Neue Datei ausfüllen (`<title>`, `description`, alle `[[ … ]]`-Stellen)
3. In `index.html` im Abschnitt *03 Projekte* eine Karte kopieren und auf die
   neue Datei verlinken — **zwei Stellen**: der Titel-Link und der Link „Details"

Die Karten sind absichtlich alle gleich aufgebaut (Problem → Lösung → Ergebnis →
Technik → Links). Wer drei Karten überfliegt, findet die Information dann immer
an derselben Stelle.

---

## Aufbau der Dateien

```
index.html              One-Pager mit allen vier Abschnitten
assets/css/style.css    Ein Stylesheet, in nummerierte Abschnitte gegliedert
assets/js/main.js       Farbschema- und Sprachumschalter, Scroll-Markierung, Jahreszahl
assets/img/             Portrait, Projektbilder, Favicon, Vorschaubild
projekte/vorlage.html   Vorlage für Projekt-Detailseiten
tools/serve.ps1         Mini-Server für die lokale Vorschau (nur PowerShell)
.nojekyll               Verhindert die Jekyll-Verarbeitung bei GitHub Pages
```

### Farben ändern

Alle Farben stehen als Custom Properties am Anfang von `assets/css/style.css`
im Block `:root`. Die Signalfarbe ist `--c-accent` — sie an drei Stellen ändern
(hell, dunkel per System, dunkel manuell), und die ganze Seite zieht nach.

Bewusst **nicht** das Blau von sms-soft.de: Das ist die Marke deines
Arbeitgebers, deine Seite braucht eine eigene Handschrift.

---

## Bewusste Entscheidungen

Falls jemand im Vorstellungsgespräch nachfragt — diese Punkte sind gute Antworten:

- **Kein Framework.** Für eine Portfolioseite wäre React überdimensioniert. Die
  Seite lädt unter 100 KB und läuft in zehn Jahren noch.
- **Kein Kontaktformular.** Ohne Backend bräuchte es einen Drittanbieter, der
  Besucherdaten verarbeitet — Datenschutz-Aufwand für null Mehrwert gegenüber
  einem `mailto:`-Link.
- **Keine externen Ressourcen.** Systemschriften statt Google Fonts: 0 KB
  Ladezeit, kein CDN, keine Einwilligungsabfrage.
- **Inhalt direkt im HTML**, nicht per JavaScript nachgeladen. Recruiter
  googeln dich; nachgeladener Inhalt ist für Suchmaschinen schlechter greifbar.
- **JavaScript nur als Zutat.** Ohne JS bleibt die Seite vollständig lesbar und
  navigierbar.
- **Keine Prozentbalken bei den Skills.** Die suggerieren eine Genauigkeit, die
  es nicht gibt, und werden von Technikern durchschaut.

---

## Veröffentlichen mit GitHub Pages

Kostenlos, mit HTTPS, ohne Server.

```bash
git init
git add .
git commit -m "Portfolio-Website"
```

Dann auf GitHub ein Repository mit dem Namen `<dein-benutzername>.github.io`
anlegen und hochladen:

```bash
git remote add origin https://github.com/<dein-benutzername>/<dein-benutzername>.github.io.git
git branch -M main
git push -u origin main
```

Die Seite ist danach unter `https://<dein-benutzername>.github.io` erreichbar
(beim ersten Mal dauert es ein paar Minuten).

Zum Schluss in `index.html` die beiden absoluten URLs in den `og:`-Meta-Tags
auf die echte Adresse setzen — sonst fehlt beim Teilen auf LinkedIn das
Vorschaubild.

---

## Vor dem Veröffentlichen prüfen

- [ ] Keine orange markierte `[[ … ]]`-Stelle mehr sichtbar
- [ ] Beide an dich gerichteten Hinweiskästen gelöscht
- [ ] LinkedIn-Adresse eingetragen (steht noch auf `DEINE-ADRESSE`)
- [ ] GitHub-Profil enthält mindestens ein Repository — sonst den Link löschen
- [ ] Alle Links führen irgendwohin, keiner auf eine Startseite
- [ ] `og:url` und `og:image` auf die echte Domain gesetzt
- [ ] Portraitfoto eingebunden, Bilddatei unter 300 KB
- [ ] Darstellung auf dem Handy geprüft
- [ ] Rechtliches geklärt (siehe unten)

---

## Rechtlicher Hinweis

Für eine öffentlich erreichbare Website, die der beruflichen Selbstdarstellung
dient, greift in Deutschland üblicherweise die **Impressumspflicht**. Hinzu
kommt eine **Datenschutzerklärung**, sobald der Hoster Zugriffsdaten
protokolliert — was auch GitHub Pages tut.

Beides ist in dieser Fassung nicht enthalten, weil es so abgestimmt war. Das
Nachrüsten ist eine Sache von Minuten: zwei zusätzliche HTML-Dateien und zwei
Links in der Fußzeile.

Dies ist keine Rechtsberatung, sondern nur der Hinweis, dass sich eine Prüfung
vor dem Veröffentlichen lohnt.
