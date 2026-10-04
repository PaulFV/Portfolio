/* =============================================================
   Persönliche Website — Interaktion

   Bewusst ohne Bibliotheken und bewusst klein. Alles hier ist
   Zutat, nicht Fundament: Fällt JavaScript aus, bleibt die Seite
   vollständig lesbar und navigierbar.
   ============================================================= */

(function () {
  "use strict";

  /* --- Sprache umschalten ----------------------------------
     Deutsch bleibt die Standardsprache. Die Übersetzungen sitzen
     zentral hier, damit das HTML nicht mehrfach gepflegt werden muss. */

  var english = {
    "nav.profile": "Profile",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.private": "Personal",
    "nav.contact": "Contact",
    "hero.title": "Software that moves machines.",
    "hero.titleVisual": "<span class=\"hero__title-line hero__title-line--light\">Software that </span><span class=\"hero__title-line hero__title-line--cyan\">moves </span><span class=\"hero__title-line hero__title-line--violet\">machines.</span>",
    "hero.projects": "View projects",
    "hero.contact": "Get in touch",
    "hero.role": "Software Developer · Industrial Automation",
    "hero.lead": "We develop and optimize control software for production and test lines — from process analysis and virtual validation to stable continuous operation.",
    "hero.leadVisual": "We develop and optimize control software for production and test lines — from process analysis and virtual validation to stable continuous operation.",
    "facts.experience": "Years of experience",
    "facts.commissioned": "Systems commissioned",
    "facts.countries": "Countries with on-site assignments",
    "facts.languages": "Working languages",
    "stack.kicker": "CORE STACK",
    "stack.title": "System technologies in use",
    "stack.ariaLabel": "Technology stack",
    "stack.opconType": "Control system / Classic",
    "stack.nexeedType": "Production system",
    "stack.ctrlxType": "Automation platform",
    "stack.twinCatType": "PLC / Motion",
    "stack.codesysType": "IEC 61131-3",
    "stack.indraLogicType": "PLC",
    "stack.boschName": "Bosch controllers",
    "stack.boschType": "PLC",
    "stack.opcuaType": "Communication",
    "visual.title": "From idea to stable production.",
    "visual.titleVisual": "<span>From idea to </span><span class=\"system-visual__title-accent\">stable production.</span>",
    "visual.kicker": "SYSTEM VISUALIZATION",
    "visual.lead": "Analysis, virtual validation and operation become one continuous automation process — visible, measurable and ready for the real line.",
    "visual.ready": "SYSTEM READY",
    "visual.mapLabel": "Visualization of the automation process",
    "visual.line": "LINE 04 / CONTROL LOOP",
    "visual.live": "LIVE SYSTEM MAP",
    "visual.analysis.title": "Planning & software",
    "visual.analysis.note": "Process data / logic",
    "visual.virtual.title": "Virtual validation",
    "visual.virtual.note": "Simulation / test",
    "visual.operation.title": "Stable operation",
    "visual.operation.note": "Production / service",
    "visual.telemetry.cycle": "CYCLE TIME",
    "visual.telemetry.status": "SYSTEM STATUS",
    "visual.telemetry.ready": "READY",
    "visual.telemetry.path": "DATA PATH",
    "sections.profile": "Profile",
    "profile.headline": "Giving machines <span>life.</span>",
    "profile.intro": "The appeal of this work has stayed the same for me from the beginning: you type something into a computer — and components start moving on the shop floor. <strong>Giving machines life</strong> is what I call it.",
    "profile.background": "Automation software leaves little room for error: a mistake does not produce a red bar in a test report, but a stopped line. My work ranges from development to commissioning at the customer’s site — across Europe, the USA and Mexico, as well as China and Korea.",
    "profile.path.electrician": "Electrician for residential & building systems",
    "profile.path.electricianNote": "Apprenticeship, then three years at Imtech",
    "profile.path.technician": "Electrical engineering technician",
    "profile.path.technicianNote": "Werner-Siemens School, Stuttgart",
    "profile.path.developer": "Software developer",
    "profile.path.developerNote": "SMS-Soft GmbH — from graduation to today",
    "profile.outsideWork": "Outside work: fitness, running — and our own house, where there is always something to rebuild.",
    "hero.portraitLink": "Go to profile",
    "meta.heading": "At a glance",
    "meta.location": "Location",
    "meta.workModel": "Working model",
    "meta.workModelValue": "On-site, hybrid or remote",
    "meta.languages": "Languages",
    "meta.languagesValue": "German, English, Romanian",
    "meta.travel": "Travel-ready",
    "meta.travelValue": "Yes, worldwide",
    "meta.locations": "Locations",
    "meta.locationsValue": "France, Czech Republic, Hungary, Romania, Turkey, China, Korea, USA, Mexico",
    "sections.skills": "Technologies & Methods",
    "skills.control": "Control & Automation",
    "skills.programming": "Programming",
    "skills.methods": "Methods",
    "skills.tools": "Communication & Tools",
    "skills.control.todo": "[[ CHECK THESE THREE RATINGS: proficient, core strength or basic knowledge? ]]",
    "skills.methods.todo": "[[ These five entries were suggested for review — keep only what is accurate and adjust the ratings. ]]",
    "skill.core": "Core strength",
    "skill.solid": "Proficient",
    "skill.bosch": "Bosch controllers",
    "skill.virtualCommissioning": "Virtual commissioning",
    "skill.simulation": "Simulation & validation",
    "skill.cycleTime": "Cycle time optimization",
    "skill.troubleshooting": "Troubleshooting in live operation",
    "skill.retrofit": "Retrofitting existing systems",
    "skill.hmi": "HMI development",
    "skill.versionControl": "Git / version control",
    "sections.projects": "Personal Projects",
    "sections.work": "Work Projects",
    "work.status": "In progress",
    "work.note": "This section is being set up.",
    "projects.intro": "Everything here was created in my spare time and belongs to me. Professional projects are confidential and are deliberately not shown here. All six run offline, store their data locally and require no build system — an engineering principle from industrial automation: what has to run must not depend on a connection.",
    "project.try": "Try it",
    "project.event.summary": "Event calendar with 300 dates from 24 countries, live countdown and search. Works offline.",
    "project.egg.summary": "Egg timer that keeps the correct remaining time even when the screen locks. Five doneness levels, alarm sounds, installable.",
    "project.sleep.summary": "Sleep-cycle alarm with history, statistics and sleep diary. All data stays local in the browser.",
    "project.fit.summary": "Workout planner with 37 animated exercises, timers and progress analysis. No account, no tracking, also as a desktop app.",
    "project.tv.summary": "Player for your own IPTV playlists on iPhone, Android and desktop. No account, no server; playlists stay on the device.",
    "project.explore.summary": "Personal store and planner for favourite places, with ratings, notes and trip lists. All data stays in the browser.",
    "sections.private": "Personal",
    "private.sport.title": "Sport",
    "private.sport.text": "Football, strength training and running. Sport keeps me fit and clears my head — after a week of commissioning abroad, it is the fastest way back into my own rhythm.",
    "private.home.title": "House & garden",
    "private.home.text": "There is always something unfinished around our own house, inside and out. Repair, rebuild, improve — what is called retrofit at work is simply the weekend at home.",
    "private.software.title": "Software in my spare time",
    "private.software.text": "The six applications in the <a href=\"#projekte\">projects section</a> were built in the evenings and on weekends. Nobody commissioned them, nobody paid for them — they exist because the problems behind them interested me.",
    "private.family.title": "Family & roots",
    "private.family.todo": "[[ TO FILL IN: I cannot write this without inventing details. Add two or three sentences about your background — where you come from, how you came to Germany, and what matters to you at home. As much or as little as you like. ]]",
    "private.missing.todo": "[[ There was one more item in the original selection that I do not know yet. Tell me what is missing and a fifth block can be added. ]]",
    "sections.contact": "Contact",
    "contact.lead": "Do you have a challenge where software meets real-world production? Then feel free to write to me — I usually reply within a few days.",
    "contact.emailTodo": "[[ CHECK EMAIL: An address such as firstname@lastname.de looks more professional in tech than a free-mail address. Replace it — or remove this note and keep the web.de address. ]]",
    "contact.mailWork": "Work",
    "form.to": "To",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send",
    "form.hint": "Sending opens your email app with the prepared message.",
    "contact.addressDe": "Address Germany",
    "contact.mailPrivate": "Personal",
    "contact.employer": "SMS-Soft",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.x": "X",
    "contact.linkedinTodo": "[[ ADD LINKEDIN URL: Replace “DEINE-ADRESSE” in the link above with the part after linkedin.com/in/ in your profile URL. If you do not use LinkedIn, remove the whole LinkedIn entry. ]]",
    "footer.top": "Back to top ↑"
  };

  var romanian = {
    "nav.profile": "Profil",
    "nav.skills": "Competențe",
    "nav.projects": "Proiecte",
    "nav.private": "Personal",
    "nav.contact": "Contact",
    "hero.title": "Software care pune mașinile în mișcare.",
    "hero.titleVisual": "<span class=\"hero__title-line hero__title-line--light\">Software care </span><span class=\"hero__title-line hero__title-line--cyan\">pune mașinile </span><span class=\"hero__title-line hero__title-line--violet\">în mișcare.</span>",
    "hero.projects": "Vezi proiectele",
    "hero.contact": "Contactează-mă",
    "hero.role": "Dezvoltator software · Automatizări industriale",
    "hero.lead": "Dezvoltăm și optimizăm software de control pentru linii de producție și testare — de la analiza proceselor și validarea virtuală până la funcționarea stabilă continuă.",
    "hero.leadVisual": "Dezvoltăm și optimizăm software de control pentru linii de producție și testare — de la analiza proceselor și validarea virtuală până la funcționarea stabilă continuă.",
    "facts.experience": "Ani de experiență",
    "facts.commissioned": "Sisteme puse în funcțiune",
    "facts.countries": "Țări cu intervenții la fața locului",
    "facts.languages": "Limbi de lucru",
    "stack.kicker": "STIVA DE BAZĂ",
    "stack.title": "Tehnologii de sistem utilizate",
    "stack.ariaLabel": "Stivă de tehnologii",
    "stack.opconType": "Sistem de control / Classic",
    "stack.nexeedType": "Sistem de producție",
    "stack.ctrlxType": "Platformă de automatizare",
    "stack.twinCatType": "PLC / Motion",
    "stack.codesysType": "IEC 61131-3",
    "stack.indraLogicType": "PLC",
    "stack.boschName": "Controlere Bosch",
    "stack.boschType": "PLC",
    "stack.opcuaType": "Comunicare",
    "visual.title": "De la idee la producție stabilă.",
    "visual.titleVisual": "<span>De la idee la </span><span class=\"system-visual__title-accent\">producție stabilă.</span>",
    "visual.kicker": "VIZUALIZARE SISTEM",
    "visual.lead": "Analiza, validarea virtuală și operarea devin un singur proces continuu de automatizare — vizibil, măsurabil și pregătit pentru linia reală.",
    "visual.ready": "SISTEM PREGĂTIT",
    "visual.mapLabel": "Vizualizarea procesului de automatizare",
    "visual.line": "LINIA 04 / BUCLĂ DE CONTROL",
    "visual.live": "HARTĂ LIVE A SISTEMULUI",
    "visual.analysis.title": "Planificare și software",
    "visual.analysis.note": "Date proces / logică",
    "visual.virtual.title": "Validare virtuală",
    "visual.virtual.note": "Simulare / test",
    "visual.operation.title": "Operare stabilă",
    "visual.operation.note": "Producție / service",
    "visual.telemetry.cycle": "TIMP DE CICLU",
    "visual.telemetry.status": "STARE SISTEM",
    "visual.telemetry.ready": "PREGĂTIT",
    "visual.telemetry.path": "RUTĂ DATE",
    "sections.profile": "Profil",
    "profile.headline": "A da viață <span>mașinilor.</span>",
    "profile.intro": "Atracția acestei munci a rămas aceeași pentru mine de la început: introduci ceva într-un calculator — iar componentele încep să se miște în hală. <strong>Dau viață mașinilor</strong>, așa numesc eu acest lucru.",
    "profile.background": "Software-ul de automatizare lasă puțin loc pentru erori: o greșeală nu produce o bară roșie într-un raport de testare, ci o linie oprită. Munca mea merge de la dezvoltare până la punerea în funcțiune la client — în Europa, SUA și Mexic, dar și în China și Coreea.",
    "profile.path.electrician": "Electrician pentru instalații electrice în clădiri",
    "profile.path.electricianNote": "Formare profesională, apoi trei ani la Imtech",
    "profile.path.technician": "Tehnician în electrotehnică",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Dezvoltator software",
    "profile.path.developerNote": "SMS-Soft GmbH — de la absolvire până astăzi",
    "profile.outsideWork": "În afara muncii: fitness, alergare — și casa noastră, unde există mereu ceva de renovat.",
    "hero.portraitLink": "Mergi la profil",
    "meta.heading": "Pe scurt",
    "meta.location": "Locație",
    "meta.workModel": "Mod de lucru",
    "meta.workModelValue": "La sediu, hibrid sau la distanță",
    "meta.languages": "Limbi",
    "meta.languagesValue": "Germană, engleză, română",
    "meta.travel": "Disponibil pentru călătorii",
    "meta.travelValue": "Da, în întreaga lume",
    "meta.locations": "Locații",
    "meta.locationsValue": "Franța, Cehia, Ungaria, România, Turcia, China, Coreea, SUA, Mexic",
    "sections.skills": "Tehnologii și metode",
    "skills.control": "Control și automatizare",
    "skills.programming": "Programare",
    "skills.methods": "Metode",
    "skills.tools": "Comunicare și instrumente",
    "skills.control.todo": "[[ VERIFICĂ ACESTE TREI EVALUĂRI: avansat, competență principală sau cunoștințe de bază? ]]",
    "skills.methods.todo": "[[ Aceste cinci elemente au fost propuse pentru verificare — păstrează doar ce este corect și ajustează evaluările. ]]",
    "skill.core": "Competență principală",
    "skill.solid": "Bună stăpânire",
    "skill.bosch": "Controlere Bosch",
    "skill.virtualCommissioning": "Punere în funcțiune virtuală",
    "skill.simulation": "Simulare și validare",
    "skill.cycleTime": "Optimizarea timpului de ciclu",
    "skill.troubleshooting": "Depanare în funcționare",
    "skill.retrofit": "Modernizarea instalațiilor existente",
    "skill.hmi": "Dezvoltare HMI",
    "skill.versionControl": "Git / controlul versiunilor",
    "sections.projects": "Proiecte personale",
    "sections.work": "Proiecte de serviciu",
    "work.status": "În lucru",
    "work.note": "Această secțiune este în curs de realizare.",
    "projects.intro": "Tot ce apare aici a fost creat în timpul liber și îmi aparține. Proiectele profesionale sunt confidențiale și nu sunt prezentate aici. Toate cele șase aplicații funcționează offline, își păstrează datele local și nu au nevoie de un sistem de build — un principiu din automatizările industriale: ceea ce trebuie să funcționeze nu trebuie să depindă de o conexiune.",
    "project.try": "Încearcă",
    "project.event.summary": "Calendar de evenimente cu 300 de date din 24 de țări, cronometru live și căutare. Funcționează offline.",
    "project.egg.summary": "Cronometru pentru ouă care păstrează timpul rămas corect chiar și cu ecranul blocat. Cinci niveluri de fierbere, sunete de alarmă, instalabil.",
    "project.sleep.summary": "Alarmă pe baza ciclurilor de somn, cu istoric, statistici și jurnal de somn. Toate datele rămân local în browser.",
    "project.fit.summary": "Planificator de antrenamente cu 37 de exerciții animate, cronometre și analiză a progresului. Fără cont și tracking, disponibil și ca aplicație desktop.",
    "project.tv.summary": "Player pentru propriile playlisturi IPTV pe iPhone, Android și desktop. Fără cont și fără server; playlisturile rămân pe dispozitiv.",
    "project.explore.summary": "Spațiu personal și planificator pentru locurile preferate, cu evaluări, notițe și liste de călătorie. Toate datele rămân în browser.",
    "sections.private": "Personal",
    "private.sport.title": "Sport",
    "private.sport.text": "Fotbal, antrenamente de forță și alergare. Sportul mă menține în formă și îmi limpezește mintea — după o săptămână de punere în funcțiune în străinătate, este cel mai rapid mod de a-mi regăsi ritmul.",
    "private.home.title": "Casă și grădină",
    "private.home.text": "În jurul casei noastre există mereu ceva neterminat, în interior sau afară. Repară, reconstruiește, îmbunătățește — ceea ce la muncă se numește retrofit este pur și simplu weekendul acasă.",
    "private.software.title": "Software în timpul liber",
    "private.software.text": "Cele șase aplicații din <a href=\"#projekte\">secțiunea de proiecte</a> au fost construite seara și în weekend. Nimeni nu le-a comandat și nimeni nu m-a plătit pentru ele — există pentru că problemele din spatele lor m-au interesat.",
    "private.family.title": "Familie și rădăcini",
    "private.family.todo": "[[ DE COMPLETAT: Nu pot scrie acest text fără să inventez detalii. Adaugă două sau trei propoziții despre parcursul tău — de unde vii, cum ai ajuns în Germania și ce contează pentru tine acasă. Cât vrei tu. ]]",
    "private.missing.todo": "[[ Mai există un element din selecția inițială pe care încă nu îl cunosc. Spune-mi ce lipsește și putem adăuga un al cincilea bloc. ]]",
    "sections.contact": "Contact",
    "contact.lead": "Ai o provocare în care software-ul întâlnește producția reală? Scrie-mi — de obicei răspund în câteva zile.",
    "contact.emailTodo": "[[ VERIFICĂ ADRESA DE E-MAIL: O adresă precum prenume@nume.ro pare mai profesională în domeniul tehnic decât una gratuită. Înlocuiește-o sau elimină această notă și păstrează adresa web.de. ]]",
    "contact.mailWork": "Serviciu",
    "form.to": "Către",
    "form.name": "Nume",
    "form.email": "E-mail",
    "form.message": "Mesaj",
    "form.send": "Trimite",
    "form.hint": "La trimitere se deschide aplicația de e-mail cu mesajul pregătit.",
    "contact.addressDe": "Adresa Germania",
    "contact.mailPrivate": "Personal",
    "contact.employer": "SMS-Soft",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.x": "X",
    "contact.linkedinTodo": "[[ ADAUGĂ LINKEDIN: Înlocuiește „DEINE-ADRESSE” din link cu partea de după linkedin.com/in/ din profilul tău. Dacă nu folosești LinkedIn, elimină întreaga intrare. ]]",
    "footer.top": "Înapoi sus ↑"
  };

  var hungarian = {
    "nav.profile": "Profil",
    "nav.skills": "Készségek",
    "nav.projects": "Projektek",
    "nav.private": "Magánélet",
    "nav.contact": "Kapcsolat",
    "hero.title": "Szoftver, amely gépeket mozgat.",
    "hero.titleVisual": "<span class=\"hero__title-line hero__title-line--light\">Szoftver, amely </span><span class=\"hero__title-line hero__title-line--cyan\">gépeket </span><span class=\"hero__title-line hero__title-line--violet\">mozgat.</span>",
    "hero.projects": "Projektek megtekintése",
    "hero.contact": "Kapcsolatfelvétel",
    "hero.lead": "Gyártó- és tesztsorok vezérlőszoftverét fejlesztjük és optimalizáljuk — a folyamatelemzéstől és a virtuális validálástól a stabil, folyamatos üzemig.",
    "hero.leadVisual": "Gyártó- és tesztsorok vezérlőszoftverét fejlesztjük és optimalizáljuk — a folyamatelemzéstől és a virtuális validálástól a stabil, folyamatos üzemig.",
    "facts.experience": "Év szakmai tapasztalat",
    "facts.commissioned": "Üzembe helyezett berendezés",
    "facts.countries": "Ország helyszíni munkával",
    "facts.languages": "Munkanyelvek",
    "stack.kicker": "ALAPTECHNOLÓGIÁK",
    "stack.title": "Alkalmazott rendszertechnológiák",
    "stack.ariaLabel": "Technológiák",
    "stack.opconType": "Irányítási rendszer / Classic",
    "stack.nexeedType": "Gyártási rendszer",
    "stack.ctrlxType": "Automatizálási platform",
    "stack.twinCatType": "PLC / Motion",
    "stack.codesysType": "IEC 61131-3",
    "stack.indraLogicType": "PLC",
    "stack.boschName": "Bosch vezérlések",
    "stack.boschType": "PLC",
    "stack.opcuaType": "Kommunikáció",
    "visual.title": "Az ötlettől a stabil berendezésig.",
    "visual.titleVisual": "<span>Az ötlettől a </span><span class=\"system-visual__title-accent\">stabil berendezésig.</span>",
    "visual.kicker": "RENDSZERVIZUALIZÁCIÓ",
    "visual.lead": "Az elemzés, a virtuális validálás és az üzemeltetés egyetlen összefüggő automatizálási folyamattá válik — láthatóan, mérhetően, készen a valódi berendezésre.",
    "visual.ready": "RENDSZER KÉSZ",
    "visual.mapLabel": "Az automatizálási folyamat vizualizációja",
    "visual.line": "04-ES SOR / SZABÁLYOZÁSI KÖR",
    "visual.live": "ÉLŐ RENDSZERTÉRKÉP",
    "visual.analysis.title": "Tervezés és szoftver",
    "visual.analysis.note": "Folyamatadatok / logika",
    "visual.virtual.title": "Virtuális validálás",
    "visual.virtual.note": "Szimuláció / teszt",
    "visual.operation.title": "Stabil üzem",
    "visual.operation.note": "Gyártás / szerviz",
    "visual.telemetry.cycle": "CIKLUSIDŐ",
    "visual.telemetry.status": "RENDSZERÁLLAPOT",
    "visual.telemetry.ready": "KÉSZ",
    "visual.telemetry.path": "ADATÚT",
    "sections.profile": "Profil",
    "profile.headline": "Életet adni <span>a gépeknek.</span>",
    "profile.intro": "Ennek a munkának a varázsa számomra ugyanaz maradt, mint a kezdetekkor: beírsz valamit a számítógépbe — és a csarnokban megmozdulnak az alkatrészek. <strong>Életet adni a gépeknek</strong> — így hívom ezt.",
    "profile.background": "Az automatizálási szoftver kevés hibát enged meg: egy hiba nem piros sávot eredményez egy tesztjelentésben, hanem álló gyártósort. Munkám a fejlesztéstől az ügyfélnél történő helyszíni üzembe helyezésig terjed — Európától az USA-n és Mexikón át Kínáig és Koreáig.",
    "profile.path.electrician": "Villanyszerelő (épületvillamosság)",
    "profile.path.electricianNote": "Szakmai képzés, utána három év az Imtechnél",
    "profile.path.technician": "Villamosmérnök-technikus",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Szoftverfejlesztő",
    "profile.path.developerNote": "SMS-Soft GmbH — a végzés óta napjainkig",
    "profile.outsideWork": "Munkán kívül: fitnesz, futás — és a saját házunk, ahol mindig van mit átépíteni.",
    "hero.portraitLink": "Ugrás a profilhoz",
    "meta.heading": "Röviden",
    "meta.location": "Helyszín",
    "meta.workModel": "Munkavégzés",
    "meta.workModelValue": "Helyszínen, hibrid vagy távmunkában",
    "meta.languages": "Nyelvek",
    "meta.languagesValue": "Német, angol, román",
    "meta.travel": "Utazási hajlandóság",
    "meta.travelValue": "Igen, világszerte",
    "meta.locations": "Munkavégzés helyei",
    "meta.locationsValue": "Franciaország, Csehország, Magyarország, Románia, Törökország, Kína, Korea, USA, Mexikó",
    "sections.skills": "Technológiák és módszerek",
    "skills.control": "Vezérlés és automatizálás",
    "skills.programming": "Programozás",
    "skills.methods": "Módszerek",
    "skills.tools": "Kommunikáció és eszközök",
    "skill.core": "Kulcskompetencia",
    "skill.solid": "Magabiztos",
    "skill.bosch": "Bosch vezérlések",
    "skill.virtualCommissioning": "Virtuális üzembe helyezés",
    "skill.simulation": "Szimuláció és validálás",
    "skill.cycleTime": "Ciklusidő-optimalizálás",
    "skill.troubleshooting": "Hibakeresés üzem közben",
    "skill.retrofit": "Meglévő berendezések korszerűsítése",
    "skill.hmi": "HMI-fejlesztés",
    "skill.versionControl": "Git / verziókezelés",
    "sections.projects": "Saját projektek",
    "sections.work": "Munkahelyi projektek",
    "work.status": "Folyamatban",
    "work.note": "Ez a rész jelenleg készül.",
    "projects.intro": "Minden, ami itt látható, a szabadidőmben készült, és az enyém. A munkahelyi projektek titkosak, ezért szándékosan nem szerepelnek itt. Mind a hat alkalmazás offline is működik, az adatokat helyben tárolja, és nincs szüksége build-rendszerre — ez az ipari automatizálásból hozott elv: aminek működnie kell, az nem függhet egy kapcsolattól.",
    "project.try": "Kipróbálom",
    "project.event.summary": "Rendezvénynaptár 24 ország 300 időpontjával, élő visszaszámlálással és kereséssel. Offline is működik.",
    "project.egg.summary": "Tojásfőző időzítő, amely zárolt képernyőnél is a helyes hátralévő időt mutatja. Öt keménységi fokozat, riasztóhangok, telepíthető.",
    "project.sleep.summary": "Alvási ciklusokra épülő ébresztő előzményekkel, statisztikával és alvásnaplóval. Minden adat helyben, a böngészőben marad.",
    "project.fit.summary": "Edzéstervező 37 animált gyakorlattal, időzítőkkel és fejlődéselemzéssel. Fiók és követés nélkül, asztali alkalmazásként is.",
    "project.tv.summary": "Lejátszó saját IPTV-lejátszási listákhoz iPhone-on, Androidon és asztali gépen. Fiók és szerver nélkül; a listák az eszközön maradnak.",
    "project.explore.summary": "Személyes tár és tervező kedvenc helyekhez, értékelésekkel, jegyzetekkel és utazási listákkal. Minden adat a böngészőben marad.",
    "sections.private": "Magánélet",
    "private.sport.title": "Sport",
    "private.sport.text": "Foci, erősítő edzés és futás. A sport nemcsak fitten tart, hanem a fejemet is kitisztítja — egy külföldi üzembe helyezéssel töltött hét után ez a leggyorsabb út vissza a saját ritmusomhoz.",
    "private.home.title": "Ház és kert",
    "private.home.text": "A saját házunk körül szinte mindig van valami befejezetlen, bent és kint egyaránt. Javítani, átépíteni, jobbá tenni — amit a munkában retrofitnek hívnak, az otthon egyszerűen a hétvége.",
    "private.software.title": "Szoftver szabadidőben",
    "private.software.text": "A <a href=\"#projekte\">projektek</a> között bemutatott hat alkalmazás esténként és hétvégén készült. Senki sem rendelte meg, senki sem fizetett értük — azért léteznek, mert érdekeltek a mögöttük álló problémák.",
    "sections.contact": "Kapcsolat",
    "contact.lead": "Van egy feladata, ahol a szoftver valódi gyártással találkozik? Írjon nekem bátran — általában néhány napon belül válaszolok.",
    "contact.mailWork": "Munkahelyi",
    "form.to": "Címzett",
    "form.name": "Név",
    "form.email": "E-mail",
    "form.message": "Üzenet",
    "form.send": "Küldés",
    "form.hint": "Küldéskor megnyílik az e-mail program az előkészített üzenettel.",
    "contact.addressDe": "Cím, Németország",
    "contact.mailPrivate": "Magán",
    "contact.employer": "SMS-Soft",
    "contact.github": "GitHub",
    "contact.x": "X",
    "footer.top": "Vissza a tetejére ↑"
  };

  var turkish = {
    "nav.profile": "Profil",
    "nav.skills": "Yetkinlikler",
    "nav.projects": "Projeler",
    "nav.private": "Kişisel",
    "nav.contact": "İletişim",
    "hero.title": "Makineleri hareket ettiren yazılım.",
    "hero.titleVisual": "<span class=\"hero__title-line hero__title-line--light\">Makineleri </span><span class=\"hero__title-line hero__title-line--cyan\">hareket ettiren </span><span class=\"hero__title-line hero__title-line--violet\">yazılım.</span>",
    "hero.projects": "Projeleri gör",
    "hero.contact": "İletişime geç",
    "hero.lead": "Üretim ve test hatları için kontrol yazılımı geliştiriyor ve optimize ediyoruz — süreç analizinden ve sanal doğrulamadan kesintisiz çalışan kararlı tesise kadar.",
    "hero.leadVisual": "Üretim ve test hatları için kontrol yazılımı geliştiriyor ve optimize ediyoruz — süreç analizinden ve sanal doğrulamadan kesintisiz çalışan kararlı tesise kadar.",
    "facts.experience": "Yıllık mesleki deneyim",
    "facts.commissioned": "Devreye alınan tesis",
    "facts.countries": "Sahada çalışılan ülke",
    "facts.languages": "Çalışma dilleri",
    "stack.kicker": "TEMEL TEKNOLOJİLER",
    "stack.title": "Kullanılan sistem teknolojileri",
    "stack.ariaLabel": "Teknolojiler",
    "stack.opconType": "Kontrol sistemi / Classic",
    "stack.nexeedType": "Üretim sistemi",
    "stack.ctrlxType": "Otomasyon platformu",
    "stack.twinCatType": "PLC / Motion",
    "stack.codesysType": "IEC 61131-3",
    "stack.indraLogicType": "PLC",
    "stack.boschName": "Bosch kontrolörleri",
    "stack.boschType": "PLC",
    "stack.opcuaType": "İletişim",
    "visual.title": "Fikirden kararlı tesise.",
    "visual.titleVisual": "<span>Fikirden </span><span class=\"system-visual__title-accent\">kararlı tesise.</span>",
    "visual.kicker": "SİSTEM GÖRSELLEŞTİRME",
    "visual.lead": "Analiz, sanal doğrulama ve işletme tek ve kesintisiz bir otomasyon sürecine dönüşür — görünür, ölçülebilir ve gerçek tesise hazır.",
    "visual.ready": "SİSTEM HAZIR",
    "visual.mapLabel": "Otomasyon sürecinin görselleştirilmesi",
    "visual.line": "HAT 04 / KONTROL DÖNGÜSÜ",
    "visual.live": "CANLI SİSTEM HARİTASI",
    "visual.analysis.title": "Planlama ve yazılım",
    "visual.analysis.note": "Süreç verileri / mantık",
    "visual.virtual.title": "Sanal doğrulama",
    "visual.virtual.note": "Simülasyon / test",
    "visual.operation.title": "Kararlı işletme",
    "visual.operation.note": "Üretim / servis",
    "visual.telemetry.cycle": "ÇEVRİM SÜRESİ",
    "visual.telemetry.status": "SİSTEM DURUMU",
    "visual.telemetry.ready": "HAZIR",
    "visual.telemetry.path": "VERİ YOLU",
    "sections.profile": "Profil",
    "profile.headline": "Makinelere <span>hayat vermek.</span>",
    "profile.intro": "Bu işin cazibesi benim için başından beri aynı kaldı: bilgisayara bir şey yazıyorsunuz — ve sahada parçalar hareket etmeye başlıyor. Ben buna <strong>makinelere hayat vermek</strong> diyorum.",
    "profile.background": "Otomasyon yazılımı hataya pek yer bırakmaz: bir hata test raporunda kırmızı bir çubuk değil, duran bir hat demektir. Çalışma alanım geliştirmeden müşteride yerinde devreye almaya kadar uzanıyor — Avrupa’dan ABD ve Meksika’ya, Çin ve Kore’ye kadar.",
    "profile.path.electrician": "Bina elektrik tesisatı elektrikçisi",
    "profile.path.electricianNote": "Meslek eğitimi, ardından Imtech’te üç yıl",
    "profile.path.technician": "Elektrik teknikeri",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Yazılım geliştirici",
    "profile.path.developerNote": "SMS-Soft GmbH — mezuniyetten bugüne",
    "profile.outsideWork": "İş dışında: fitness, koşu — ve her zaman bir yerinde tadilat süren kendi evimiz.",
    "hero.portraitLink": "Profile git",
    "meta.heading": "Bir bakışta",
    "meta.location": "Konum",
    "meta.workModel": "Çalışma modeli",
    "meta.workModelValue": "Yerinde, hibrit veya uzaktan",
    "meta.languages": "Diller",
    "meta.languagesValue": "Almanca, İngilizce, Rumence",
    "meta.travel": "Seyahate uygun",
    "meta.travelValue": "Evet, dünya çapında",
    "meta.locations": "Çalışma yerleri",
    "meta.locationsValue": "Fransa, Çekya, Macaristan, Romanya, Türkiye, Çin, Kore, ABD, Meksika",
    "sections.skills": "Teknolojiler ve yöntemler",
    "skills.control": "Kontrol ve otomasyon",
    "skills.programming": "Programlama",
    "skills.methods": "Yöntemler",
    "skills.tools": "İletişim ve araçlar",
    "skill.core": "Temel yetkinlik",
    "skill.solid": "İyi düzeyde",
    "skill.bosch": "Bosch kontrolörleri",
    "skill.virtualCommissioning": "Sanal devreye alma",
    "skill.simulation": "Simülasyon ve doğrulama",
    "skill.cycleTime": "Çevrim süresi optimizasyonu",
    "skill.troubleshooting": "Çalışma sırasında arıza tespiti",
    "skill.retrofit": "Mevcut tesislerin modernizasyonu",
    "skill.hmi": "HMI geliştirme",
    "skill.versionControl": "Git / sürüm kontrolü",
    "sections.projects": "Kişisel projeler",
    "sections.work": "İş projeleri",
    "work.status": "Devam ediyor",
    "work.note": "Bu bölüm şu anda hazırlanıyor.",
    "projects.intro": "Burada gördüğünüz her şey boş zamanımda ortaya çıktı ve bana ait. İş projeleri gizlidir, bu yüzden bilinçli olarak burada gösterilmiyor. Altı uygulamanın tamamı çevrimdışı çalışır, verilerini yerel olarak saklar ve bir build sistemine ihtiyaç duymaz — tesis otomasyonundan gelen bir çalışma ilkesi: çalışması gereken şey bir bağlantıya bağlı olmamalıdır.",
    "project.try": "Dene",
    "project.event.summary": "24 ülkeden 300 tarih içeren etkinlik takvimi; canlı geri sayım ve arama. Çevrimdışı çalışır.",
    "project.egg.summary": "Ekran kilitlendiğinde bile kalan süreyi doğru tutan yumurta zamanlayıcısı. Beş pişme derecesi, alarm sesleri, yüklenebilir.",
    "project.sleep.summary": "Geçmiş, istatistik ve uyku günlüğü içeren, uyku döngülerine göre çalışan alarm. Tüm veriler tarayıcıda yerel olarak kalır.",
    "project.fit.summary": "37 animasyonlu egzersiz, zamanlayıcılar ve ilerleme analizi içeren antrenman planlayıcısı. Hesap ve takip yok, masaüstü uygulaması olarak da var.",
    "project.tv.summary": "iPhone, Android ve masaüstünde kendi IPTV oynatma listeleriniz için oynatıcı. Hesap ve sunucu yok; listeler cihazda kalır.",
    "project.explore.summary": "Favori yerler için kişisel arşiv ve planlayıcı; puanlar, notlar ve seyahat listeleriyle. Tüm veriler tarayıcıda kalır.",
    "sections.private": "Kişisel",
    "private.sport.title": "Spor",
    "private.sport.text": "Futbol, kuvvet antrenmanı ve koşu. Spor beni sadece formda tutmuyor, kafamı da boşaltıyor — yurt dışında bir haftalık devreye alma işinden sonra kendi ritmime dönmenin en kısa yolu bu.",
    "private.home.title": "Ev ve bahçe",
    "private.home.text": "Kendi evimizde içeride ya da dışarıda hemen her zaman bitmemiş bir iş vardır. Onarmak, yeniden yapmak, iyileştirmek — işte retrofit denen şey, evde sadece hafta sonudur.",
    "private.software.title": "Boş zamanda yazılım",
    "private.software.text": "<a href=\"#projekte\">Projeler bölümündeki</a> altı uygulama akşamları ve hafta sonları ortaya çıktı. Kimse sipariş etmedi, kimse ücret ödemedi — arkalarındaki problemler ilgimi çektiği için varlar.",
    "sections.contact": "İletişim",
    "contact.lead": "Yazılımın gerçek üretimle buluştuğu bir göreviniz mi var? O zaman bana yazmaktan çekinmeyin — genellikle birkaç gün içinde yanıt veririm.",
    "contact.mailWork": "İş",
    "form.to": "Alıcı",
    "form.name": "Ad",
    "form.email": "E-posta",
    "form.message": "Mesaj",
    "form.send": "Gönder",
    "form.hint": "Gönderdiğinizde e-posta uygulamanız hazırlanmış mesajla açılır.",
    "contact.addressDe": "Adres Almanya",
    "contact.mailPrivate": "Kişisel",
    "contact.employer": "SMS-Soft",
    "contact.github": "GitHub",
    "contact.x": "X",
    "footer.top": "Başa dön ↑"
  };

  var spanish = {
    "nav.profile": "Perfil",
    "nav.skills": "Competencias",
    "nav.projects": "Proyectos",
    "nav.private": "Personal",
    "nav.contact": "Contacto",
    "hero.title": "Software que mueve máquinas.",
    "hero.titleVisual": "<span class=\"hero__title-line hero__title-line--light\">Software que </span><span class=\"hero__title-line hero__title-line--cyan\">mueve </span><span class=\"hero__title-line hero__title-line--violet\">máquinas.</span>",
    "hero.projects": "Ver proyectos",
    "hero.contact": "Contactar",
    "hero.lead": "Desarrollamos y optimizamos software de control para líneas de producción y de prueba — desde el análisis de procesos y la validación virtual hasta una instalación estable en funcionamiento continuo.",
    "hero.leadVisual": "Desarrollamos y optimizamos software de control para líneas de producción y de prueba — desde el análisis de procesos y la validación virtual hasta una instalación estable en funcionamiento continuo.",
    "facts.experience": "Años de experiencia",
    "facts.commissioned": "Instalaciones puestas en marcha",
    "facts.countries": "Países con trabajos in situ",
    "facts.languages": "Idiomas de trabajo",
    "stack.kicker": "TECNOLOGÍAS BASE",
    "stack.title": "Tecnologías de sistema en uso",
    "stack.ariaLabel": "Tecnologías",
    "stack.opconType": "Sistema de control / Classic",
    "stack.nexeedType": "Sistema de producción",
    "stack.ctrlxType": "Plataforma de automatización",
    "stack.twinCatType": "PLC / Motion",
    "stack.codesysType": "IEC 61131-3",
    "stack.indraLogicType": "PLC",
    "stack.boschName": "Controladores Bosch",
    "stack.boschType": "PLC",
    "stack.opcuaType": "Comunicación",
    "visual.title": "De la idea a una instalación estable.",
    "visual.titleVisual": "<span>De la idea a </span><span class=\"system-visual__title-accent\">una instalación estable.</span>",
    "visual.kicker": "VISUALIZACIÓN DEL SISTEMA",
    "visual.lead": "El análisis, la validación virtual y la operación se convierten en un proceso de automatización continuo — visible, medible y listo para la instalación real.",
    "visual.ready": "SISTEMA LISTO",
    "visual.mapLabel": "Visualización del proceso de automatización",
    "visual.line": "LÍNEA 04 / LAZO DE CONTROL",
    "visual.live": "MAPA DEL SISTEMA EN VIVO",
    "visual.analysis.title": "Planificación y software",
    "visual.analysis.note": "Datos de proceso / lógica",
    "visual.virtual.title": "Validación virtual",
    "visual.virtual.note": "Simulación / prueba",
    "visual.operation.title": "Operación estable",
    "visual.operation.note": "Producción / servicio",
    "visual.telemetry.cycle": "TIEMPO DE CICLO",
    "visual.telemetry.status": "ESTADO DEL SISTEMA",
    "visual.telemetry.ready": "LISTO",
    "visual.telemetry.path": "RUTA DE DATOS",
    "sections.profile": "Perfil",
    "profile.headline": "Dar vida <span>a las máquinas.</span>",
    "profile.intro": "El atractivo de este trabajo sigue siendo para mí el mismo que al principio: escribes algo en un ordenador — y en la nave empiezan a moverse los componentes. <strong>Dar vida a las máquinas</strong>, así lo llamo yo.",
    "profile.background": "El software de automatización deja poco margen de error: un fallo no produce una barra roja en un informe de pruebas, sino una línea parada. Mi trabajo abarca desde el desarrollo hasta la puesta en marcha en las instalaciones del cliente — de Europa a EE. UU. y México, hasta China y Corea.",
    "profile.path.electrician": "Electricista de instalaciones en edificios",
    "profile.path.electricianNote": "Formación profesional, después tres años en Imtech",
    "profile.path.technician": "Técnico en electrotecnia",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Desarrollador de software",
    "profile.path.developerNote": "SMS-Soft GmbH — desde la graduación hasta hoy",
    "profile.outsideWork": "Fuera del trabajo: fitness, correr — y nuestra propia casa, donde siempre hay algo que reformar.",
    "hero.portraitLink": "Ir al perfil",
    "meta.heading": "De un vistazo",
    "meta.location": "Ubicación",
    "meta.workModel": "Modalidad de trabajo",
    "meta.workModelValue": "Presencial, híbrido o remoto",
    "meta.languages": "Idiomas",
    "meta.languagesValue": "Alemán, inglés, rumano",
    "meta.travel": "Disponibilidad para viajar",
    "meta.travelValue": "Sí, en todo el mundo",
    "meta.locations": "Lugares de trabajo",
    "meta.locationsValue": "Francia, Chequia, Hungría, Rumanía, Turquía, China, Corea, EE. UU., México",
    "sections.skills": "Tecnologías y métodos",
    "skills.control": "Control y automatización",
    "skills.programming": "Programación",
    "skills.methods": "Métodos",
    "skills.tools": "Comunicación y herramientas",
    "skill.core": "Competencia clave",
    "skill.solid": "Dominio sólido",
    "skill.bosch": "Controladores Bosch",
    "skill.virtualCommissioning": "Puesta en marcha virtual",
    "skill.simulation": "Simulación y validación",
    "skill.cycleTime": "Optimización del tiempo de ciclo",
    "skill.troubleshooting": "Diagnóstico de fallos en funcionamiento",
    "skill.retrofit": "Modernización de instalaciones existentes",
    "skill.hmi": "Desarrollo de HMI",
    "skill.versionControl": "Git / control de versiones",
    "sections.projects": "Proyectos personales",
    "sections.work": "Proyectos profesionales",
    "work.status": "En curso",
    "work.note": "Esta sección se está preparando.",
    "projects.intro": "Todo lo que aparece aquí lo he creado en mi tiempo libre y me pertenece. Los proyectos profesionales son confidenciales y no se muestran aquí deliberadamente. Las seis aplicaciones funcionan sin conexión, guardan sus datos localmente y no necesitan ningún sistema de build — un principio de la automatización industrial: lo que tiene que funcionar no puede depender de una conexión.",
    "project.try": "Probar",
    "project.event.summary": "Calendario de eventos con 300 fechas de 24 países, cuenta atrás en vivo y búsqueda. Funciona sin conexión.",
    "project.egg.summary": "Temporizador para huevos que mantiene el tiempo restante correcto incluso con la pantalla bloqueada. Cinco puntos de cocción, alarmas, instalable.",
    "project.sleep.summary": "Despertador según los ciclos de sueño, con historial, estadísticas y diario de sueño. Todos los datos se quedan en el navegador.",
    "project.fit.summary": "Planificador de entrenamiento con 37 ejercicios animados, temporizadores y análisis del progreso. Sin cuenta ni seguimiento, también como aplicación de escritorio.",
    "project.tv.summary": "Reproductor para tus propias listas IPTV en iPhone, Android y escritorio. Sin cuenta ni servidor; las listas se quedan en el dispositivo.",
    "project.explore.summary": "Espacio personal y planificador para tus lugares favoritos, con valoraciones, notas y listas de viaje. Todos los datos se quedan en el navegador.",
    "sections.private": "Personal",
    "private.sport.title": "Deporte",
    "private.sport.text": "Fútbol, entrenamiento de fuerza y correr. El deporte no solo me mantiene en forma, también me despeja la cabeza — después de una semana de puesta en marcha en el extranjero, es el camino más rápido para recuperar mi propio ritmo.",
    "private.home.title": "Casa y jardín",
    "private.home.text": "En nuestra propia casa casi siempre hay algo pendiente, dentro y fuera. Reparar, reformar, mejorar — lo que en el trabajo se llama retrofit, en casa es simplemente el fin de semana.",
    "private.software.title": "Software en mi tiempo libre",
    "private.software.text": "Las seis aplicaciones de la <a href=\"#projekte\">sección de proyectos</a> nacieron por las tardes y los fines de semana. Nadie las encargó, nadie pagó por ellas — existen porque me interesaban los problemas que hay detrás.",
    "sections.contact": "Contacto",
    "contact.lead": "¿Tiene un reto en el que el software se encuentra con la producción real? Escríbame sin compromiso — normalmente respondo en pocos días.",
    "contact.mailWork": "Trabajo",
    "form.to": "Para",
    "form.name": "Nombre",
    "form.email": "Correo electrónico",
    "form.message": "Mensaje",
    "form.send": "Enviar",
    "form.hint": "Al enviar se abre su aplicación de correo con el mensaje preparado.",
    "contact.addressDe": "Dirección Alemania",
    "contact.mailPrivate": "Personal",
    "contact.employer": "SMS-Soft",
    "contact.github": "GitHub",
    "contact.x": "X",
    "footer.top": "Volver arriba ↑"
  };

  var dictionaries = { en: english, ro: romanian, hu: hungarian, tr: turkish, es: spanish };

  /* Texte außerhalb der data-i18n-Elemente, je Sprache gebündelt */
  var ui = {
    de: {
      kicker: '"LIVE PROFIL-DATEN"',
      title: "Paul Fodor — Softwareentwickler Industrieautomation",
      description: "Softwareentwickler für Industrieautomation im Raum Stuttgart: Steuerungssoftware und Inbetriebnahme von Produktions- und Prüflinien weltweit. 21 Jahre Berufserfahrung, TwinCAT und CodeSys.",
      languageMenu: "Sprache auswählen",
      languageMenuOpen: "Sprachmenü öffnen",
      languageMenuClose: "Sprachmenü schließen",
      menuOpen: "Menü öffnen",
      menuClose: "Menü schließen",
      profileLanguages: "Deutsch, Englisch, Rumänisch",
      theme: "Farbschema umschalten"
    },
    en: {
      kicker: '"LIVE PROFILE DATA"',
      title: "Paul Fodor — Software Developer in Industrial Automation",
      description: "Software developer for industrial automation in the Stuttgart region: control software and commissioning of production and test lines worldwide. 21 years of experience, TwinCAT and CODESYS.",
      languageMenu: "Select language",
      languageMenuOpen: "Open language menu",
      languageMenuClose: "Close language menu",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      profileLanguages: "German, English, Romanian",
      theme: "Toggle color scheme"
    },
    ro: {
      kicker: '"DATE PROFIL LIVE"',
      title: "Paul Fodor — Dezvoltator software în automatizări industriale",
      description: "Dezvoltator software pentru automatizări industriale în regiunea Stuttgart: software de control și punerea în funcțiune a liniilor de producție și testare în întreaga lume. 21 de ani de experiență, TwinCAT și CodeSys.",
      languageMenu: "Selectează limba",
      languageMenuOpen: "Deschide meniul de limbi",
      languageMenuClose: "Închide meniul de limbi",
      menuOpen: "Deschide meniul",
      menuClose: "Închide meniul",
      profileLanguages: "Germană, engleză, română",
      theme: "Schimbă schema de culori"
    },
    hu: {
      kicker: '"ÉLŐ PROFILADATOK"',
      title: "Paul Fodor — Szoftverfejlesztő, ipari automatizálás",
      description: "Ipari automatizálási szoftverfejlesztő Stuttgart környékén: vezérlőszoftver, valamint gyártó- és tesztsorok üzembe helyezése világszerte. 21 év szakmai tapasztalat, TwinCAT és CODESYS.",
      languageMenu: "Nyelv kiválasztása",
      languageMenuOpen: "Nyelvmenü megnyitása",
      languageMenuClose: "Nyelvmenü bezárása",
      menuOpen: "Menü megnyitása",
      menuClose: "Menü bezárása",
      profileLanguages: "Német, angol, román",
      theme: "Színséma váltása"
    },
    tr: {
      kicker: '"CANLI PROFİL VERİLERİ"',
      title: "Paul Fodor — Endüstriyel Otomasyon Yazılım Geliştiricisi",
      description: "Stuttgart bölgesinde endüstriyel otomasyon yazılım geliştiricisi: dünya çapında üretim ve test hatları için kontrol yazılımı ve devreye alma. 21 yıllık mesleki deneyim, TwinCAT ve CODESYS.",
      languageMenu: "Dil seçin",
      languageMenuOpen: "Dil menüsünü aç",
      languageMenuClose: "Dil menüsünü kapat",
      menuOpen: "Menüyü aç",
      menuClose: "Menüyü kapat",
      profileLanguages: "Almanca, İngilizce, Rumence",
      theme: "Renk şemasını değiştir"
    },
    es: {
      kicker: '"DATOS DE PERFIL EN VIVO"',
      title: "Paul Fodor — Desarrollador de software en automatización industrial",
      description: "Desarrollador de software para automatización industrial en la región de Stuttgart: software de control y puesta en marcha de líneas de producción y de prueba en todo el mundo. 21 años de experiencia, TwinCAT y CODESYS.",
      languageMenu: "Seleccionar idioma",
      languageMenuOpen: "Abrir menú de idiomas",
      languageMenuClose: "Cerrar menú de idiomas",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      profileLanguages: "Alemán, inglés, rumano",
      theme: "Cambiar esquema de colores"
    }
  };

  function uiText() {
    return ui[document.documentElement.lang] || ui.de;
  }

  var languageMenu = document.querySelector("[data-language-menu]");
  var languageMenuToggle = document.querySelector("[data-language-menu-toggle]");
  var languageMenuPanel = document.querySelector("[data-language-menu-panel]");
  var languageCurrentFlag = document.querySelector("[data-language-current-flag]");
  var languageCurrentCode = document.querySelector("[data-language-current-code]");
  var languageOptions = Array.prototype.slice.call(
    document.querySelectorAll("[data-language-option]")
  );
  var menuButton = document.querySelector("[data-menu-toggle]");
  var siteHeader = document.querySelector(".site-header");

  var stackSource = document.querySelector("[data-marquee-source]");
  if (stackSource && stackSource.parentNode) {
    var stackTrack = stackSource.parentNode;

    /* Die Gruppe so oft wiederholen, bis sie breiter als der Bildschirm ist.
       Sonst bleibt beim Durchlaufen rechts eine Lücke, und die Leiste wirkt,
       als finge sie erst in der Bildmitte an. */
    var stackOriginals = Array.prototype.slice.call(stackSource.children);
    var stackTarget = Math.max(window.screen ? window.screen.width : 0, window.innerWidth, 1920);
    var stackGuard = 0;
    while (stackSource.getBoundingClientRect().width < stackTarget && stackGuard < 8) {
      stackOriginals.forEach(function (item) {
        var copy = item.cloneNode(true);
        copy.setAttribute("aria-hidden", "true");
        stackSource.appendChild(copy);
      });
      stackGuard += 1;
    }
    /* Tempo etwa gleich halten, egal wie lang die Gruppe ist (ca. 45 px pro Sekunde). */
    stackTrack.style.animationDuration = Math.max(20, Math.round(stackSource.getBoundingClientRect().width / 45)) + "s";

    var stackClone = stackSource.cloneNode(true);
    stackClone.removeAttribute("data-marquee-source");
    stackClone.removeAttribute("data-i18n-attr");
    stackClone.removeAttribute("aria-label");
    stackClone.setAttribute("aria-hidden", "true");
    stackTrack.appendChild(stackClone);
    stackTrack.classList.add("is-looping");
  }

  var languageItems = Array.prototype.slice.call(
    document.querySelectorAll("[data-i18n], [data-i18n-html], [data-i18n-attr]")
  );

  function storedLanguage() {
    try {
      var value = localStorage.getItem("language");
      return Object.prototype.hasOwnProperty.call(ui, value) ? value : "de";
    } catch (e) {
      return "de";
    }
  }

  function saveLanguage(value) {
    try { localStorage.setItem("language", value); } catch (e) { /* optional */ }
  }

  var originalLanguage = languageItems.map(function (element) {
    var attributes = element.hasAttribute("data-i18n-attr")
      ? element.getAttribute("data-i18n-attr")
      : null;
    var attributeValues = attributes
      ? attributes.split(",").map(function (pair) {
          return element.getAttribute(pair.split(":")[0]);
        })
      : null;

    return {
      element: element,
      text: element.hasAttribute("data-i18n") ? element.textContent : null,
      html: element.hasAttribute("data-i18n-html") ? element.innerHTML : null,
      attributes: attributes,
      attributeValues: attributeValues
    };
  });

  function applyLanguage(language) {
    var dictionary = dictionaries[language] || null;
    var text = ui[language] || ui.de;

    originalLanguage.forEach(function (item) {
      var element = item.element;
      var key = element.getAttribute("data-i18n");
      var htmlKey = element.getAttribute("data-i18n-html");

      if (dictionary) {
        if (key && dictionary[key]) element.textContent = dictionary[key];
        if (htmlKey && dictionary[htmlKey]) element.innerHTML = dictionary[htmlKey];
        if (element.hasAttribute("data-i18n-attr")) {
          element.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
            var parts = pair.split(":");
            if (parts.length === 2 && dictionary[parts[1]]) {
              element.setAttribute(parts[0], dictionary[parts[1]]);
            }
          });
        }
      } else {
        if (item.text !== null) element.textContent = item.text;
        if (item.html !== null) element.innerHTML = item.html;
        if (item.attributes) {
          item.attributes.split(",").forEach(function (pair, index) {
            var parts = pair.split(":");
            if (parts.length === 2 && item.attributeValues[index] !== null) {
              element.setAttribute(parts[0], item.attributeValues[index]);
            }
          });
        }
      }
    });

    var locationChips = document.querySelector(".profile-location-chips");
    if (locationChips) {
      var locations = locationChips.textContent.split(/[,;]+/).map(function (place) {
        return place.trim();
      }).filter(Boolean);
      locationChips.textContent = "";
      locations.forEach(function (place) {
        var chip = document.createElement("span");
        chip.textContent = place;
        locationChips.appendChild(chip);
      });
    }

    document.documentElement.lang = language;
    document.documentElement.style.setProperty("--facts-kicker", text.kicker);
    document.title = text.title;

    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = text.description;

    if (languageMenu) languageMenu.setAttribute("aria-label", text.languageMenu);

    if (languageCurrentFlag) {
      languageCurrentFlag.className = "language-option__flag language-option__flag--" + language;
    }

    if (languageCurrentCode) {
      languageCurrentCode.textContent = language.toUpperCase();
    }

    var profileLanguages = document.querySelector("[data-profile-languages]");
    if (profileLanguages) profileLanguages.setAttribute("aria-label", text.profileLanguages);

    languageOptions.forEach(function (option) {
      var isActive = option.getAttribute("data-language-option") === language;
      option.setAttribute("aria-selected", String(isActive));
    });

    if (menuButton) {
      var menuIsOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-label", menuIsOpen ? text.menuClose : text.menuOpen);
    }

    var themeButton = document.querySelector("[data-theme-toggle]");
    if (themeButton) themeButton.setAttribute("aria-label", text.theme);
  }

  applyLanguage(storedLanguage());

  function setLanguageMenuState(isOpen) {
    if (!languageMenu || !languageMenuToggle || !languageMenuPanel) return;

    languageMenu.classList.toggle("is-open", isOpen);
    languageMenuToggle.setAttribute("aria-expanded", String(isOpen));
    languageMenuPanel.hidden = !isOpen;

    var text = uiText();
    languageMenuToggle.setAttribute("aria-label", isOpen ? text.languageMenuClose : text.languageMenuOpen);
  }

  setLanguageMenuState(false);

  if (languageMenuToggle) {
    languageMenuToggle.addEventListener("click", function () {
      setLanguageMenuState(languageMenuToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  languageOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      var next = option.getAttribute("data-language-option");
      applyLanguage(next);
      saveLanguage(next);
      setLanguageMenuState(false);
    });
  });

  document.addEventListener("click", function (event) {
    if (languageMenu && !languageMenu.contains(event.target)) setLanguageMenuState(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setLanguageMenuState(false);
  });

  /* --- Mobile-Navigation -----------------------------------
     Die Desktop-Navigation bleibt sichtbar. Auf kleinen Displays
     wird sie als zugängliches Panel geöffnet und nach einer Auswahl
     wieder geschlossen.                                       */

  if (menuButton && siteHeader) {
    var mobileNav = document.getElementById("mobile-navigation");

    var setMenuState = function (isOpen) {
      siteHeader.classList.toggle("is-menu-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      var text = uiText();
      menuButton.setAttribute("aria-label", isOpen ? text.menuClose : text.menuOpen);
    };

    menuButton.addEventListener("click", function () {
      setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
    });

    if (mobileNav) {
      mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { setMenuState(false); });
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenuState(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 640) setMenuState(false);
    });
  }

  /* --- Farbschema umschalten --------------------------------
     Drei Zustände in dieser Reihenfolge:
       Systemeinstellung  →  hell  →  dunkel  →  Systemeinstellung
     Die Wahl bleibt in localStorage erhalten; das Setzen beim
     Laden passiert bereits inline im <head>, damit die Seite
     nicht kurz im falschen Schema aufblitzt.                  */

  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");

  function readStored() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function store(value) {
    try {
      if (value) {
        localStorage.setItem("theme", value);
      } else {
        localStorage.removeItem("theme");
      }
    } catch (e) {
      /* Privater Modus o. Ä. — dann gilt die Wahl nur für diese Sitzung */
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = readStored();
      var next = current === "light" ? "dark" : current === "dark" ? null : "light";

      if (next) {
        root.setAttribute("data-theme", next);
      } else {
        root.removeAttribute("data-theme");
      }
      store(next);
    });
  }


  /* --- Kompakte Skill-Gruppen auf Handy und Tablet ----------- */

  var skillDetails = Array.prototype.slice.call(
    document.querySelectorAll(".skill-group__details")
  );
  var compactSkills = window.matchMedia("(max-width: 52em)");

  function syncSkillDetails() {
    skillDetails.forEach(function (details) {
      details.open = !compactSkills.matches;
    });
  }

  syncSkillDetails();
  if (compactSkills.addEventListener) {
    compactSkills.addEventListener("change", syncSkillDetails);
  } else if (compactSkills.addListener) {
    compactSkills.addListener(syncSkillDetails);
  }


  /* --- Privat: auf dem Handy drei kompakte Kacheln, Text klappt darunter auf ---
     Der Absatz wandert beim Öffnen in ein gemeinsames Feld unter der Reihe
     (derselbe Knoten, damit die Übersetzung weiter greift) und beim Schließen
     oder auf größeren Bildschirmen zurück in seine Kachel. */

  var lifeBox = document.querySelector("#privat .life");

  if (lifeBox) {
    var lifeItems = Array.prototype.slice.call(lifeBox.querySelectorAll(".life__item"));
    var lifePanel = document.createElement("div");
    var compactLife = window.matchMedia("(min-width: 0px)");
    var activeLife = null;

    lifePanel.className = "life__panel";
    lifePanel.hidden = true;
    lifePanel.setAttribute("role", "region");
    lifeBox.parentNode.insertBefore(lifePanel, lifeBox.nextSibling);

    lifeItems.forEach(function (item) {
      item.lifeText = item.querySelector("p");
    });

    var closeLife = function () {
      if (!activeLife) { return; }
      activeLife.querySelector(".life__body").appendChild(activeLife.lifeText);
      activeLife.setAttribute("aria-expanded", "false");
      activeLife.classList.remove("is-open");
      lifePanel.hidden = true;
      activeLife = null;
    };

    var openLife = function (item) {
      closeLife();
      lifePanel.setAttribute("data-tone", String(lifeItems.indexOf(item) + 1));
      lifePanel.setAttribute("aria-label", item.querySelector(".life__title").textContent.trim());
      lifePanel.appendChild(item.lifeText);
      lifePanel.hidden = false;
      item.setAttribute("aria-expanded", "true");
      item.classList.add("is-open");
      activeLife = item;
    };

    var toggleLife = function (item) {
      if (activeLife === item) { closeLife(); } else { openLife(item); }
    };

    var syncLife = function () {
      closeLife();
      lifeItems.forEach(function (item) {
        if (compactLife.matches) {
          item.setAttribute("role", "button");
          item.setAttribute("tabindex", "0");
          item.setAttribute("aria-expanded", "false");
        } else {
          item.removeAttribute("role");
          item.removeAttribute("tabindex");
          item.removeAttribute("aria-expanded");
        }
      });
    };

    lifeItems.forEach(function (item) {
      item.addEventListener("click", function () {
        if (compactLife.matches) { toggleLife(item); }
      });
      item.addEventListener("keydown", function (event) {
        if (compactLife.matches && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          toggleLife(item);
        }
      });
    });

    syncLife();
    if (compactLife.addEventListener) {
      compactLife.addEventListener("change", syncLife);
    } else if (compactLife.addListener) {
      compactLife.addListener(syncLife);
    }
  }


  /* --- Eigene Projekte: auf dem Handy quadratische Kacheln, Details darunter ---
     Antippen einer Kachel zeigt Name, Beschreibung und Buttons in einem
     gemeinsamen Feld unter dem Raster. Die Knoten selbst werden verschoben
     (nicht kopiert), damit Übersetzung und Links unverändert funktionieren;
     beim Schließen oder auf größeren Bildschirmen wandern sie zurück. */

  var projectsBox = document.querySelector("#projekte .projects");
  var projectIntro = document.querySelector("#projekte .projects__intro");
  var compactProjects = window.matchMedia("(min-width: 0px)"); /* Karten: auf allen Größen aufklappbar */
  var compactIntro = window.matchMedia("(max-width: 40em)"); /* Einleitung: nur auf dem Handy gekürzt */

  if (projectsBox) {
    var projectCards = Array.prototype.slice.call(projectsBox.querySelectorAll(".card"));
    var projectPanel = document.createElement("div");
    var activeProject = null;

    projectPanel.className = "projects__panel";
    projectPanel.hidden = true;
    projectPanel.setAttribute("role", "region");
    projectsBox.parentNode.insertBefore(projectPanel, projectsBox.nextSibling);

    projectCards.forEach(function (card) {
      card.projBody = card.querySelector(".card__body");
      card.projLinks = card.querySelector(".card__links");
      card.projLink = card.querySelector(".card__title a");
    });

    var closeProject = function () {
      if (!activeProject) { return; }
      activeProject.appendChild(activeProject.projBody);
      activeProject.appendChild(activeProject.projLinks);
      activeProject.setAttribute("aria-expanded", "false");
      activeProject.classList.remove("is-open");
      projectPanel.textContent = "";
      projectPanel.hidden = true;
      activeProject = null;
    };

    var openProject = function (card) {
      var title = document.createElement("a");
      var name = card.projLink.textContent.trim();

      closeProject();
      title.className = "projects__panel-title";
      title.href = card.projLink.href;
      title.target = "_blank";
      title.rel = "noopener noreferrer";
      title.textContent = name + " ↗";
      projectPanel.appendChild(title);
      projectPanel.appendChild(card.projBody);
      projectPanel.appendChild(card.projLinks);
      projectPanel.setAttribute("data-tone", String(projectCards.indexOf(card) + 1));
      projectPanel.setAttribute("aria-label", name);
      projectPanel.hidden = false;
      card.setAttribute("aria-expanded", "true");
      card.classList.add("is-open");
      activeProject = card;
    };

    var toggleProject = function (card) {
      if (activeProject === card) { closeProject(); } else { openProject(card); }
    };

    var syncProjects = function () {
      closeProject();
      projectCards.forEach(function (card) {
        if (compactProjects.matches) {
          card.setAttribute("role", "button");
          card.setAttribute("tabindex", "0");
          card.setAttribute("aria-expanded", "false");
          card.projLink.setAttribute("tabindex", "-1");
        } else {
          card.removeAttribute("role");
          card.removeAttribute("tabindex");
          card.removeAttribute("aria-expanded");
          card.projLink.removeAttribute("tabindex");
        }
      });
    };

    projectCards.forEach(function (card) {
      card.addEventListener("click", function (event) {
        if (!compactProjects.matches) { return; }
        event.preventDefault();
        toggleProject(card);
      });
      card.addEventListener("keydown", function (event) {
        if (compactProjects.matches && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          toggleProject(card);
        }
      });
    });

    syncProjects();
    if (compactProjects.addEventListener) {
      compactProjects.addEventListener("change", syncProjects);
    } else if (compactProjects.addListener) {
      compactProjects.addListener(syncProjects);
    }
  }

  /* Einleitungstext der Projekte: auf dem Handy auf zwei Zeilen gekürzt, per Tipp aufklappbar. */
  if (projectIntro) {
    var syncProjectIntro = function () {
      projectIntro.classList.remove("is-open");
      if (compactIntro.matches) {
        projectIntro.setAttribute("role", "button");
        projectIntro.setAttribute("tabindex", "0");
        projectIntro.setAttribute("aria-expanded", "false");
      } else {
        projectIntro.removeAttribute("role");
        projectIntro.removeAttribute("tabindex");
        projectIntro.removeAttribute("aria-expanded");
      }
    };
    var toggleProjectIntro = function () {
      var open = !projectIntro.classList.contains("is-open");
      projectIntro.classList.toggle("is-open", open);
      projectIntro.setAttribute("aria-expanded", open ? "true" : "false");
    };

    projectIntro.addEventListener("click", function () {
      if (compactIntro.matches) { toggleProjectIntro(); }
    });
    projectIntro.addEventListener("keydown", function (event) {
      if (compactIntro.matches && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        toggleProjectIntro();
      }
    });
    syncProjectIntro();
    if (compactIntro.addEventListener) {
      compactIntro.addEventListener("change", syncProjectIntro);
    } else if (compactIntro.addListener) {
      compactIntro.addListener(syncProjectIntro);
    }
  }


  /* --- Profil-Infos (Standort, Sprachen …): auf dem Handy aufklappbar ---
     Zugeklappt bleibt nur die erste Zeile (Standort) sichtbar. */

  var profileFacts = document.querySelector("#profil .profile-facts");
  var profileToggle = profileFacts && profileFacts.querySelector(".profile-facts__toggle");

  if (profileToggle) {
    var compactProfile = window.matchMedia("(max-width: 40em)");

    var setProfileOpen = function (open) {
      profileFacts.classList.toggle("is-open", open);
      profileToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    profileToggle.addEventListener("click", function () {
      setProfileOpen(!profileFacts.classList.contains("is-open"));
    });

    var syncProfile = function () {
      setProfileOpen(false);
    };

    syncProfile();
    if (compactProfile.addEventListener) {
      compactProfile.addEventListener("change", syncProfile);
    } else if (compactProfile.addListener) {
      compactProfile.addListener(syncProfile);
    }
  }


  /* --- Kontakt: Klick auf eine der beiden Adressen klappt das Formular auf ---
     Es gibt keinen Server. "Senden" öffnet das E-Mail-Programm mit der
     ausgefüllten Nachricht (mailto:). Ohne JavaScript bleiben die Adressen
     normale Mail-Links. */

  var mailForm = document.getElementById("kontakt-form");
  var mailRows = Array.prototype.slice.call(document.querySelectorAll("#kontakt .contact__mailrow"));

  if (mailForm && mailRows.length) {
    var mailTarget = mailForm.querySelector("[data-contact-to]");
    var activeMailRow = null;

    var mailAddress = function (row) {
      return (row.getAttribute("href") || "").replace(/^mailto:/i, "");
    };

    var setMailArrow = function (row, open) {
      var arrow = row.querySelector(".contact__mailarrow");
      if (arrow) { arrow.textContent = open ? "↑" : "↓"; }
    };

    /* Jede Karte bekommt eine eigene Zelle; das Formular wandert beim Öffnen
       direkt unter die angeklickte Karte und ist dann genauso breit. */
    mailRows.forEach(function (row) {
      var cell = document.createElement("div");
      cell.className = "contact__mailcell";
      row.parentNode.insertBefore(cell, row);
      cell.appendChild(row);
    });

    var closeMailForm = function () {
      if (!activeMailRow) { return; }
      activeMailRow.classList.remove("is-open");
      activeMailRow.setAttribute("aria-expanded", "false");
      setMailArrow(activeMailRow, false);
      mailForm.hidden = true;
      activeMailRow = null;
    };

    var openMailForm = function (row) {
      closeMailForm();
      activeMailRow = row;
      row.classList.add("is-open");
      row.setAttribute("aria-expanded", "true");
      setMailArrow(row, true);
      mailTarget.textContent = "";
      [mailAddress(row), row.getAttribute("data-extra-mail")].forEach(function (address) {
        if (!address) { return; }
        var option = document.createElement("option");
        option.value = address;
        option.textContent = address;
        mailTarget.appendChild(option);
      });
      mailTarget.disabled = mailTarget.options.length < 2;
      mailForm.setAttribute("data-tone", String(mailRows.indexOf(row) + 1));
      row.parentNode.appendChild(mailForm);
      mailForm.hidden = false;
    };

    mailRows.forEach(function (row) {
      row.setAttribute("role", "button");
      row.setAttribute("aria-controls", "kontakt-form");
      row.setAttribute("aria-expanded", "false");
      setMailArrow(row, false);
      row.addEventListener("click", function (event) {
        event.preventDefault();
        if (activeMailRow === row) { closeMailForm(); } else { openMailForm(row); }
      });
      row.addEventListener("keydown", function (event) {
        if (event.key === " ") { event.preventDefault(); row.click(); }
      });
    });

    mailForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!mailForm.reportValidity() || !activeMailRow) { return; }
      var name = mailForm.elements.name.value.trim();
      var from = mailForm.elements.email.value.trim();
      var message = mailForm.elements.message.value.trim();
      var german = document.documentElement.lang === "de";
      var subject = (german ? "Anfrage über die Website von " : "Inquiry via the website from ") + name;
      var body = message + "\n\n— " + name + " (" + from + ")";
      window.location.href = "mailto:" + (mailTarget.value || mailAddress(activeMailRow)) +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }


  /* --- Aktiven Navigationspunkt beim Scrollen markieren ------
     Aktiv ist der letzte Abschnitt, dessen Oberkante die Linie unter der
     Kopfzeile (100 px + 10 % der Fensterhöhe) schon passiert hat. Am Seitenende
     zählt immer der letzte Abschnitt. Das gilt auch für kurze Abschnitte
     wie "Dienstprojekte". "Eigene Projekte" steht unter Privat und zählt
     zu dessen Menüpunkt. Die Prüfung läuft höchstens einmal pro Frame. */

  var links = Array.prototype.slice.call(
    document.querySelectorAll(".nav__link")
  );

  var spyIds = [];
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.charAt(0) === "#" && document.querySelector(href)) {
      spyIds.push(href.slice(1));
      if (href === "#privat" && document.getElementById("projekte")) { spyIds.push("projekte"); }
    }
  });

  if (spyIds.length) {
    var spyQueued = false;

    var updateNavSpy = function () {
      spyQueued = false;
      var line = 100 + window.innerHeight * 0.1;
      var activeId = null;
      for (var i = 0; i < spyIds.length; i++) {
        if (document.getElementById(spyIds[i]).getBoundingClientRect().top <= line) {
          activeId = spyIds[i];
        }
      }
      var doc = document.documentElement;
      if (window.innerHeight + window.pageYOffset >= doc.scrollHeight - 4) {
        activeId = spyIds[spyIds.length - 1];
      }
      if (activeId === "projekte") { activeId = "privat"; }

      links.forEach(function (link) {
        if (link.getAttribute("href") === "#" + activeId) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    var queueNavSpy = function () {
      if (!spyQueued) {
        spyQueued = true;
        window.requestAnimationFrame(updateNavSpy);
      }
    };

    window.addEventListener("scroll", queueNavSpy, { passive: true });
    window.addEventListener("resize", queueNavSpy);
    updateNavSpy();
  }


  /* --- Dezenter 3D-Tilt für Mauszeiger ----------------------
     Auf Desktop-Karten folgt die Oberfläche ganz leicht dem Cursor.
     Touch-Geräte bleiben unverändert; bei reduzierter Bewegung wird
     der Effekt ebenfalls vollständig deaktiviert.                 */

  var tiltItems = Array.prototype.slice.call(
    document.querySelectorAll(".card, .skill-group, .life__item, .system-node")
  );
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducedMotion && tiltItems.length) {
    tiltItems.forEach(function (item) {
      item.addEventListener("pointermove", function (event) {
        if (event.pointerType !== "mouse") return;

        var rect = item.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - 0.5;
        var y = (event.clientY - rect.top) / rect.height - 0.5;

        item.style.setProperty("--tilt-x", String(y * -2.2) + "deg");
        item.style.setProperty("--tilt-y", String(x * 2.2) + "deg");
      });

      item.addEventListener("pointerleave", function () {
        item.style.removeProperty("--tilt-x");
        item.style.removeProperty("--tilt-y");
      });
    });
  }


  /* --- Jahreszahl in der Fußzeile ---------------------------
     Damit das Copyright nicht irgendwann veraltet dasteht.    */

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
