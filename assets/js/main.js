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
    "hero.status": "Open to new opportunities",
    "hero.title": "Software that moves machines.",
    "hero.role": "Software Developer · Industrial Automation",
    "hero.lead": "We develop and optimize control software for production and test lines — from process analysis and virtual validation to stable continuous operation.",
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
    "profile.intro": "The appeal of this work has stayed the same for me from the beginning: you type something into a computer — and components start moving on the shop floor. <strong>Giving machines life</strong> is what I call it.",
    "profile.background": "Automation software leaves little room for error: a mistake does not produce a red bar in a test report, but a stopped line. My work ranges from development to commissioning at the customer’s site — across Europe, the USA and Mexico, as well as China and Korea.",
    "profile.path.electrician": "Electrician for residential & building systems",
    "profile.path.electricianNote": "Apprenticeship, then three years at Imtech",
    "profile.path.technician": "Electrical engineering technician",
    "profile.path.technicianNote": "Werner-Siemens School, Stuttgart",
    "profile.path.developer": "Software developer",
    "profile.path.developerNote": "SMS-Soft GmbH — from graduation to today",
    "profile.outsideWork": "Outside work: fitness, running — and our own house, where there is always something to rebuild.",
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
    "projects.intro": "Everything here was created in my spare time and belongs to me. Professional projects are confidential and are deliberately not shown here. All six run offline, store their data locally and require no build system — an engineering principle from industrial automation: what has to run must not depend on a connection.",
    "project.try": "Try it",
    "project.event.summary": "Event calendar with 300 dates from 24 countries, live countdown and search. Works offline.",
    "project.egg.summary": "Egg timer that keeps the correct remaining time even when the screen locks. Five doneness levels, alarm sounds, installable.",
    "project.sleep.summary": "Sleep-cycle alarm with history, statistics and sleep diary. All data stays local in the browser.",
    "project.fit.summary": "Workout planner with 37 animated exercises, timers and progress analysis. No account, no tracking, also as a desktop app.",
    "project.tv.summary": "Player for your own IPTV playlists on iPhone, Android and desktop. No account, no server; playlists stay on the device.",
    "project.explore.summary": "Personal store and planner for favourite places, with ratings, notes and trip lists. All data stays in the browser.",
    "sections.private": "Personal",
    "private.lead": "What I do when nobody is paying for it.",
    "private.sport.title": "Sport",
    "private.sport.text": "Football, strength training and running. Sport keeps me fit and clears my head — after a week of commissioning abroad, it is the fastest way back into my own rhythm.",
    "private.home.title": "House, workshop & garden",
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
    "hero.status": "Deschis pentru noi provocări",
    "hero.title": "Software care pune mașinile în mișcare.",
    "hero.role": "Dezvoltator software · Automatizări industriale",
    "hero.lead": "Dezvoltăm și optimizăm software de control pentru linii de producție și testare — de la analiza proceselor și validarea virtuală până la funcționarea stabilă continuă.",
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
    "profile.intro": "Atracția acestei munci a rămas aceeași pentru mine de la început: introduci ceva într-un calculator — iar componentele încep să se miște în hală. <strong>Dau viață mașinilor</strong>, așa numesc eu acest lucru.",
    "profile.background": "Software-ul de automatizare lasă puțin loc pentru erori: o greșeală nu produce o bară roșie într-un raport de testare, ci o linie oprită. Munca mea merge de la dezvoltare până la punerea în funcțiune la client — în Europa, SUA și Mexic, dar și în China și Coreea.",
    "profile.path.electrician": "Electrician pentru instalații electrice în clădiri",
    "profile.path.electricianNote": "Formare profesională, apoi trei ani la Imtech",
    "profile.path.technician": "Tehnician în electrotehnică",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Dezvoltator software",
    "profile.path.developerNote": "SMS-Soft GmbH — de la absolvire până astăzi",
    "profile.outsideWork": "În afara muncii: fitness, alergare — și casa noastră, unde există mereu ceva de renovat.",
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
    "projects.intro": "Tot ce apare aici a fost creat în timpul liber și îmi aparține. Proiectele profesionale sunt confidențiale și nu sunt prezentate aici. Toate cele șase aplicații funcționează offline, își păstrează datele local și nu au nevoie de un sistem de build — un principiu din automatizările industriale: ceea ce trebuie să funcționeze nu trebuie să depindă de o conexiune.",
    "project.try": "Încearcă",
    "project.event.summary": "Calendar de evenimente cu 300 de date din 24 de țări, cronometru live și căutare. Funcționează offline.",
    "project.egg.summary": "Cronometru pentru ouă care păstrează timpul rămas corect chiar și cu ecranul blocat. Cinci niveluri de fierbere, sunete de alarmă, instalabil.",
    "project.sleep.summary": "Alarmă pe baza ciclurilor de somn, cu istoric, statistici și jurnal de somn. Toate datele rămân local în browser.",
    "project.fit.summary": "Planificator de antrenamente cu 37 de exerciții animate, cronometre și analiză a progresului. Fără cont și tracking, disponibil și ca aplicație desktop.",
    "project.tv.summary": "Player pentru propriile playlisturi IPTV pe iPhone, Android și desktop. Fără cont și fără server; playlisturile rămân pe dispozitiv.",
    "project.explore.summary": "Spațiu personal și planificator pentru locurile preferate, cu evaluări, notițe și liste de călătorie. Toate datele rămân în browser.",
    "sections.private": "Personal",
    "private.lead": "Ce fac atunci când nimeni nu mă plătește pentru asta.",
    "private.sport.title": "Sport",
    "private.sport.text": "Fotbal, antrenamente de forță și alergare. Sportul mă menține în formă și îmi limpezește mintea — după o săptămână de punere în funcțiune în străinătate, este cel mai rapid mod de a-mi regăsi ritmul.",
    "private.home.title": "Casă, atelier și grădină",
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
    "hero.status": "Nyitott vagyok új feladatokra",
    "hero.title": "Szoftver, amely gépeket mozgat.",
    "hero.lead": "Gyártó- és tesztsorok vezérlőszoftverét fejlesztjük és optimalizáljuk — a folyamatelemzéstől és a virtuális validálástól a stabil, folyamatos üzemig.",
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
    "profile.intro": "Ennek a munkának a varázsa számomra ugyanaz maradt, mint a kezdetekkor: beírsz valamit a számítógépbe — és a csarnokban megmozdulnak az alkatrészek. <strong>Életet adni a gépeknek</strong> — így hívom ezt.",
    "profile.background": "Az automatizálási szoftver kevés hibát enged meg: egy hiba nem piros sávot eredményez egy tesztjelentésben, hanem álló gyártósort. Munkám a fejlesztéstől az ügyfélnél történő helyszíni üzembe helyezésig terjed — Európától az USA-n és Mexikón át Kínáig és Koreáig.",
    "profile.path.electrician": "Villanyszerelő (épületvillamosság)",
    "profile.path.electricianNote": "Szakmai képzés, utána három év az Imtechnél",
    "profile.path.technician": "Villamosmérnök-technikus",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Szoftverfejlesztő",
    "profile.path.developerNote": "SMS-Soft GmbH — a végzés óta napjainkig",
    "profile.outsideWork": "Munkán kívül: fitnesz, futás — és a saját házunk, ahol mindig van mit átépíteni.",
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
    "projects.intro": "Minden, ami itt látható, a szabadidőmben készült, és az enyém. A munkahelyi projektek titkosak, ezért szándékosan nem szerepelnek itt. Mind a hat alkalmazás offline is működik, az adatokat helyben tárolja, és nincs szüksége build-rendszerre — ez az ipari automatizálásból hozott elv: aminek működnie kell, az nem függhet egy kapcsolattól.",
    "project.try": "Kipróbálom",
    "project.event.summary": "Rendezvénynaptár 24 ország 300 időpontjával, élő visszaszámlálással és kereséssel. Offline is működik.",
    "project.egg.summary": "Tojásfőző időzítő, amely zárolt képernyőnél is a helyes hátralévő időt mutatja. Öt keménységi fokozat, riasztóhangok, telepíthető.",
    "project.sleep.summary": "Alvási ciklusokra épülő ébresztő előzményekkel, statisztikával és alvásnaplóval. Minden adat helyben, a böngészőben marad.",
    "project.fit.summary": "Edzéstervező 37 animált gyakorlattal, időzítőkkel és fejlődéselemzéssel. Fiók és követés nélkül, asztali alkalmazásként is.",
    "project.tv.summary": "Lejátszó saját IPTV-lejátszási listákhoz iPhone-on, Androidon és asztali gépen. Fiók és szerver nélkül; a listák az eszközön maradnak.",
    "project.explore.summary": "Személyes tár és tervező kedvenc helyekhez, értékelésekkel, jegyzetekkel és utazási listákkal. Minden adat a böngészőben marad.",
    "sections.private": "Magánélet",
    "private.lead": "Amit akkor csinálok, amikor senki sem fizet érte.",
    "private.sport.title": "Sport",
    "private.sport.text": "Foci, erősítő edzés és futás. A sport nemcsak fitten tart, hanem a fejemet is kitisztítja — egy külföldi üzembe helyezéssel töltött hét után ez a leggyorsabb út vissza a saját ritmusomhoz.",
    "private.home.title": "Ház, műhely és kert",
    "private.home.text": "A saját házunk körül szinte mindig van valami befejezetlen, bent és kint egyaránt. Javítani, átépíteni, jobbá tenni — amit a munkában retrofitnek hívnak, az otthon egyszerűen a hétvége.",
    "private.software.title": "Szoftver szabadidőben",
    "private.software.text": "A <a href=\"#projekte\">projektek</a> között bemutatott hat alkalmazás esténként és hétvégén készült. Senki sem rendelte meg, senki sem fizetett értük — azért léteznek, mert érdekeltek a mögöttük álló problémák.",
    "sections.contact": "Kapcsolat",
    "contact.lead": "Van egy feladata, ahol a szoftver valódi gyártással találkozik? Írjon nekem bátran — általában néhány napon belül válaszolok.",
    "contact.mailWork": "Munkahelyi",
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
    "hero.status": "Yeni görevlere açığım",
    "hero.title": "Makineleri hareket ettiren yazılım.",
    "hero.lead": "Üretim ve test hatları için kontrol yazılımı geliştiriyor ve optimize ediyoruz — süreç analizinden ve sanal doğrulamadan kesintisiz çalışan kararlı tesise kadar.",
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
    "profile.intro": "Bu işin cazibesi benim için başından beri aynı kaldı: bilgisayara bir şey yazıyorsunuz — ve sahada parçalar hareket etmeye başlıyor. Ben buna <strong>makinelere hayat vermek</strong> diyorum.",
    "profile.background": "Otomasyon yazılımı hataya pek yer bırakmaz: bir hata test raporunda kırmızı bir çubuk değil, duran bir hat demektir. Çalışma alanım geliştirmeden müşteride yerinde devreye almaya kadar uzanıyor — Avrupa’dan ABD ve Meksika’ya, Çin ve Kore’ye kadar.",
    "profile.path.electrician": "Bina elektrik tesisatı elektrikçisi",
    "profile.path.electricianNote": "Meslek eğitimi, ardından Imtech’te üç yıl",
    "profile.path.technician": "Elektrik teknikeri",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Yazılım geliştirici",
    "profile.path.developerNote": "SMS-Soft GmbH — mezuniyetten bugüne",
    "profile.outsideWork": "İş dışında: fitness, koşu — ve her zaman bir yerinde tadilat süren kendi evimiz.",
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
    "projects.intro": "Burada gördüğünüz her şey boş zamanımda ortaya çıktı ve bana ait. İş projeleri gizlidir, bu yüzden bilinçli olarak burada gösterilmiyor. Altı uygulamanın tamamı çevrimdışı çalışır, verilerini yerel olarak saklar ve bir build sistemine ihtiyaç duymaz — tesis otomasyonundan gelen bir çalışma ilkesi: çalışması gereken şey bir bağlantıya bağlı olmamalıdır.",
    "project.try": "Dene",
    "project.event.summary": "24 ülkeden 300 tarih içeren etkinlik takvimi; canlı geri sayım ve arama. Çevrimdışı çalışır.",
    "project.egg.summary": "Ekran kilitlendiğinde bile kalan süreyi doğru tutan yumurta zamanlayıcısı. Beş pişme derecesi, alarm sesleri, yüklenebilir.",
    "project.sleep.summary": "Geçmiş, istatistik ve uyku günlüğü içeren, uyku döngülerine göre çalışan alarm. Tüm veriler tarayıcıda yerel olarak kalır.",
    "project.fit.summary": "37 animasyonlu egzersiz, zamanlayıcılar ve ilerleme analizi içeren antrenman planlayıcısı. Hesap ve takip yok, masaüstü uygulaması olarak da var.",
    "project.tv.summary": "iPhone, Android ve masaüstünde kendi IPTV oynatma listeleriniz için oynatıcı. Hesap ve sunucu yok; listeler cihazda kalır.",
    "project.explore.summary": "Favori yerler için kişisel arşiv ve planlayıcı; puanlar, notlar ve seyahat listeleriyle. Tüm veriler tarayıcıda kalır.",
    "sections.private": "Kişisel",
    "private.lead": "Kimse para ödemediğinde yaptıklarım.",
    "private.sport.title": "Spor",
    "private.sport.text": "Futbol, kuvvet antrenmanı ve koşu. Spor beni sadece formda tutmuyor, kafamı da boşaltıyor — yurt dışında bir haftalık devreye alma işinden sonra kendi ritmime dönmenin en kısa yolu bu.",
    "private.home.title": "Ev, atölye ve bahçe",
    "private.home.text": "Kendi evimizde içeride ya da dışarıda hemen her zaman bitmemiş bir iş vardır. Onarmak, yeniden yapmak, iyileştirmek — işte retrofit denen şey, evde sadece hafta sonudur.",
    "private.software.title": "Boş zamanda yazılım",
    "private.software.text": "<a href=\"#projekte\">Projeler bölümündeki</a> altı uygulama akşamları ve hafta sonları ortaya çıktı. Kimse sipariş etmedi, kimse ücret ödemedi — arkalarındaki problemler ilgimi çektiği için varlar.",
    "sections.contact": "İletişim",
    "contact.lead": "Yazılımın gerçek üretimle buluştuğu bir göreviniz mi var? O zaman bana yazmaktan çekinmeyin — genellikle birkaç gün içinde yanıt veririm.",
    "contact.mailWork": "İş",
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
    "hero.status": "Abierto a nuevos retos",
    "hero.title": "Software que mueve máquinas.",
    "hero.lead": "Desarrollamos y optimizamos software de control para líneas de producción y de prueba — desde el análisis de procesos y la validación virtual hasta una instalación estable en funcionamiento continuo.",
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
    "profile.intro": "El atractivo de este trabajo sigue siendo para mí el mismo que al principio: escribes algo en un ordenador — y en la nave empiezan a moverse los componentes. <strong>Dar vida a las máquinas</strong>, así lo llamo yo.",
    "profile.background": "El software de automatización deja poco margen de error: un fallo no produce una barra roja en un informe de pruebas, sino una línea parada. Mi trabajo abarca desde el desarrollo hasta la puesta en marcha en las instalaciones del cliente — de Europa a EE. UU. y México, hasta China y Corea.",
    "profile.path.electrician": "Electricista de instalaciones en edificios",
    "profile.path.electricianNote": "Formación profesional, después tres años en Imtech",
    "profile.path.technician": "Técnico en electrotecnia",
    "profile.path.technicianNote": "Werner-Siemens-Schule, Stuttgart",
    "profile.path.developer": "Desarrollador de software",
    "profile.path.developerNote": "SMS-Soft GmbH — desde la graduación hasta hoy",
    "profile.outsideWork": "Fuera del trabajo: fitness, correr — y nuestra propia casa, donde siempre hay algo que reformar.",
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
    "projects.intro": "Todo lo que aparece aquí lo he creado en mi tiempo libre y me pertenece. Los proyectos profesionales son confidenciales y no se muestran aquí deliberadamente. Las seis aplicaciones funcionan sin conexión, guardan sus datos localmente y no necesitan ningún sistema de build — un principio de la automatización industrial: lo que tiene que funcionar no puede depender de una conexión.",
    "project.try": "Probar",
    "project.event.summary": "Calendario de eventos con 300 fechas de 24 países, cuenta atrás en vivo y búsqueda. Funciona sin conexión.",
    "project.egg.summary": "Temporizador para huevos que mantiene el tiempo restante correcto incluso con la pantalla bloqueada. Cinco puntos de cocción, alarmas, instalable.",
    "project.sleep.summary": "Despertador según los ciclos de sueño, con historial, estadísticas y diario de sueño. Todos los datos se quedan en el navegador.",
    "project.fit.summary": "Planificador de entrenamiento con 37 ejercicios animados, temporizadores y análisis del progreso. Sin cuenta ni seguimiento, también como aplicación de escritorio.",
    "project.tv.summary": "Reproductor para tus propias listas IPTV en iPhone, Android y escritorio. Sin cuenta ni servidor; las listas se quedan en el dispositivo.",
    "project.explore.summary": "Espacio personal y planificador para tus lugares favoritos, con valoraciones, notas y listas de viaje. Todos los datos se quedan en el navegador.",
    "sections.private": "Personal",
    "private.lead": "Lo que hago cuando nadie me paga por ello.",
    "private.sport.title": "Deporte",
    "private.sport.text": "Fútbol, entrenamiento de fuerza y correr. El deporte no solo me mantiene en forma, también me despeja la cabeza — después de una semana de puesta en marcha en el extranjero, es el camino más rápido para recuperar mi propio ritmo.",
    "private.home.title": "Casa, taller y jardín",
    "private.home.text": "En nuestra propia casa casi siempre hay algo pendiente, dentro y fuera. Reparar, reformar, mejorar — lo que en el trabajo se llama retrofit, en casa es simplemente el fin de semana.",
    "private.software.title": "Software en mi tiempo libre",
    "private.software.text": "Las seis aplicaciones de la <a href=\"#projekte\">sección de proyectos</a> nacieron por las tardes y los fines de semana. Nadie las encargó, nadie pagó por ellas — existen porque me interesaban los problemas que hay detrás.",
    "sections.contact": "Contacto",
    "contact.lead": "¿Tiene un reto en el que el software se encuentra con la producción real? Escríbame sin compromiso — normalmente respondo en pocos días.",
    "contact.mailWork": "Trabajo",
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


  /* --- Aktiven Navigationspunkt beim Scrollen markieren ------
     IntersectionObserver statt eines scroll-Handlers: Der Browser
     rechnet das selbst aus, statt bei jedem Scroll-Ereignis
     Layout-Werte abzufragen.                                  */

  var links = Array.prototype.slice.call(
    document.querySelectorAll(".nav__link")
  );

  var sections = links
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var visible = new Set();

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });

        /* Bei mehreren gleichzeitig sichtbaren Abschnitten gewinnt
           der oberste in der Dokumentreihenfolge. */
        var activeId = null;
        for (var i = 0; i < sections.length; i++) {
          if (visible.has(sections[i].id)) {
            activeId = sections[i].id;
            break;
          }
        }

        links.forEach(function (link) {
          var isActive = link.getAttribute("href") === "#" + activeId;
          if (isActive) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      {
        /* Oben um die Höhe der Kopfzeile einrücken, unten so weit,
           dass ein Abschnitt erst „aktiv" wird, wenn er wirklich
           den Blick füllt.
           Achtung: rootMargin erlaubt nur px und %, kein rem. */
        rootMargin: "-100px 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
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
