/* =============================================================
   Persönliche Website — Interaktion

   Bewusst ohne Bibliotheken und bewusst klein. Alles hier ist
   Zutat, nicht Fundament: Fällt JavaScript aus, bleibt die Seite
   vollständig lesbar und navigierbar.
   ============================================================= */

(function () {
  "use strict";

  /* --- Sprache umschalten ----------------------------------
     Deutsch bleibt die Standardsprache. Die englischen Texte sitzen
     zentral hier, damit das HTML nicht doppelt gepflegt werden muss. */

  var english = {
    "nav.profile": "Profile",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.private": "Personal",
    "nav.contact": "Contact",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "hero.status": "Open to new opportunities",
    "hero.title": "Software that moves machines.",
    "hero.role": "Software Developer · Industrial Automation",
    "hero.lead": "I develop and optimize control software for production and test lines — from process analysis and virtual validation to stable continuous operation.",
    "hero.projectsCta": "View projects",
    "hero.contactCta": "Get in touch",
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
    "tag.localStorage": "Local storage",
    "sections.projects": "Personal Projects",
    "projects.intro": "Everything here was created in my spare time and belongs to me. Professional projects are confidential and are deliberately not shown here. All four run offline, store their data locally and require no build system — an engineering principle from industrial automation: what has to run must not depend on a connection.",
    "project.problem": "Problem",
    "project.solution": "Solution",
    "project.result": "Result",
    "project.try": "Try it",
    "project.event.problem": "Anyone looking for the next city festival in Prague or Seville has to search through dozens of organizer websites.",
    "project.event.solution": "300 events from 24 countries across eight categories, selected through a cascade from country to region to city. The search tolerates missing umlauts, a live countdown shows the next event and changes color as it approaches.",
    "project.event.result": "Runs offline, without a backend or build system. Bilingual, with light and dark mode, and packaged as an Android app.",
    "project.egg.problem": "A kitchen timer in the browser has a hidden flaw: when the screen locks, the countdown stops — while the egg keeps cooking.",
    "project.egg.solution": "The timer does not count down; it stores the target time. After waking up, the remaining time is still correct. It also includes five cooking levels and an animated egg whose yolk visibly sets during cooking.",
    "project.egg.result": "Installable app with offline operation, five alarm sounds with vibration, and optional push notifications through a Cloudflare Worker.",
    "project.sleep.problem": "An alarm that rings in the middle of deep sleep wakes you less effectively than one that rings a few minutes later at the end of a cycle.",
    "project.sleep.solution": "The app records sleep locally and calculates favorable wake-up times from the cycles. It also includes an alarm, an editable history with statistics and a sleep diary.",
    "project.sleep.result": "Pure HTML, CSS and JavaScript without a single dependency. All data stays in the browser; nothing is sent to a server.",
    "project.fit.problem": "Training plans usually end up in a spreadsheet nobody maintains — or in an app that requires an account and collects data.",
    "project.fit.solution": "37 exercises with animations for six muscle groups, workout timers, a journey mode with a world map and experience points, plus progress analysis. Data can be exported as Markdown.",
    "project.fit.result": "No account, no tracking, no backend. Built in pure JavaScript without a framework; also available as a desktop app with .NET 10 and WebView2. The Android version is in preparation.",
    "sections.private": "Personal",
    "private.lead": "What I do when nobody is paying for it.",
    "private.sport.title": "Sport",
    "private.sport.text": "Football, strength training and running. Sport keeps me fit and clears my head — after a week of commissioning abroad, it is the fastest way back into my own rhythm.",
    "private.home.title": "House, workshop & garden",
    "private.home.text": "There is always something unfinished around our own house, inside and out. Repair, rebuild, improve — what is called retrofit at work is simply the weekend at home.",
    "private.software.title": "Software in my spare time",
    "private.software.text": "The four applications in the <a href=\"#projekte\">projects section</a> were built in the evenings and on weekends. Nobody commissioned them, nobody paid for them — they exist because the problems behind them interested me.",
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
    "menu.open": "Deschide meniul",
    "menu.close": "Închide meniul",
    "hero.status": "Deschis pentru noi provocări",
    "hero.title": "Software care pune mașinile în mișcare.",
    "hero.role": "Dezvoltator software · Automatizări industriale",
    "hero.lead": "Dezvolt și optimizez software de control pentru linii de producție și testare — de la analiza proceselor și validarea virtuală până la funcționarea stabilă continuă.",
    "hero.projectsCta": "Vezi proiectele",
    "hero.contactCta": "Ia legătura",
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
    "tag.localStorage": "Stocare locală",
    "sections.projects": "Proiecte personale",
    "projects.intro": "Tot ce apare aici a fost creat în timpul liber și îmi aparține. Proiectele profesionale sunt confidențiale și nu sunt prezentate aici. Toate cele patru aplicații funcționează offline, își păstrează datele local și nu au nevoie de un sistem de build — un principiu din automatizările industriale: ceea ce trebuie să funcționeze nu trebuie să depindă de o conexiune.",
    "project.problem": "Problemă",
    "project.solution": "Soluție",
    "project.result": "Rezultat",
    "project.try": "Încearcă",
    "project.event.problem": "Cine vrea să afle când are loc următorul festival din Praga sau Sevilla trebuie să caute pe zeci de site-uri ale organizatorilor.",
    "project.event.solution": "300 de evenimente din 24 de țări și opt categorii, selectate de la țară la regiune și apoi la oraș. Căutarea tolerează umlauturi lipsă, iar un cronometru live afișează următorul eveniment și își schimbă culoarea pe măsură ce se apropie.",
    "project.event.result": "Funcționează offline, fără backend și fără sistem de build. Bilingvă, cu mod luminos și întunecat, împachetată ca aplicație Android.",
    "project.egg.problem": "Un cronometru de bucătărie în browser are un defect ascuns: când ecranul se blochează, numărătoarea se oprește — în timp ce oul continuă să fiarbă.",
    "project.egg.solution": "Cronometrul nu numără pur și simplu în jos; memorează ora țintă. După revenirea ecranului, timpul rămas este încă corect. Include cinci niveluri de fierbere și un ou animat al cărui gălbenuș se întărește vizibil.",
    "project.egg.result": "Aplicație instalabilă cu funcționare offline, cinci sunete de alarmă cu vibrații și notificări push opționale printr-un Cloudflare Worker.",
    "project.sleep.problem": "O alarmă care sună în mijlocul somnului profund te trezește mai greu decât una care sună câteva minute mai târziu, la sfârșitul unui ciclu.",
    "project.sleep.solution": "Aplicația memorează somnul local și calculează momente potrivite pentru trezire pe baza ciclurilor. Include și alarmă, istoric editabil cu statistici și jurnal de somn.",
    "project.sleep.result": "HTML, CSS și JavaScript pur, fără nicio dependență. Toate datele rămân în browser; nimic nu este trimis către un server.",
    "project.fit.problem": "Planurile de antrenament ajung de obicei într-un tabel pe care nimeni nu îl mai întreține — sau într-o aplicație care cere cont și colectează date.",
    "project.fit.solution": "37 de exerciții animate pentru șase grupe musculare, cronometre pentru antrenamente, un mod de parcurs cu hartă și puncte de experiență, plus analiză a progresului. Datele pot fi exportate ca Markdown.",
    "project.fit.result": "Fără cont, fără tracking și fără backend. Construit în JavaScript pur, fără framework; disponibil și ca aplicație desktop cu .NET 10 și WebView2. Versiunea Android este în pregătire.",
    "sections.private": "Personal",
    "private.lead": "Ce fac atunci când nimeni nu mă plătește pentru asta.",
    "private.sport.title": "Sport",
    "private.sport.text": "Fotbal, antrenamente de forță și alergare. Sportul mă menține în formă și îmi limpezește mintea — după o săptămână de punere în funcțiune în străinătate, este cel mai rapid mod de a-mi regăsi ritmul.",
    "private.home.title": "Casă, atelier și grădină",
    "private.home.text": "În jurul casei noastre există mereu ceva neterminat, în interior sau afară. Repară, reconstruiește, îmbunătățește — ceea ce la muncă se numește retrofit este pur și simplu weekendul acasă.",
    "private.software.title": "Software în timpul liber",
    "private.software.text": "Cele patru aplicații din <a href=\"#projekte\">secțiunea de proiecte</a> au fost construite seara și în weekend. Nimeni nu le-a comandat și nimeni nu m-a plătit pentru ele — există pentru că problemele din spatele lor m-au interesat.",
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
      return value === "en" || value === "ro" ? value : "de";
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
    var dictionary = language === "en" ? english : language === "ro" ? romanian : null;

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
    document.documentElement.style.setProperty(
      "--facts-kicker",
      language === "en"
        ? '"LIVE PROFILE DATA"'
        : language === "ro" ? '"DATE PROFIL LIVE"' : '"LIVE PROFIL-DATEN"'
    );
    document.title = language === "en"
      ? "Paul Fodor — Software Developer in Industrial Automation"
      : language === "ro"
        ? "Paul Fodor — Dezvoltator software în automatizări industriale"
        : "Paul Fodor — Softwareentwickler Industrieautomation";

    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === "en"
      ? "Software developer for industrial automation in the Stuttgart region: control software and commissioning of production and test lines worldwide. 21 years of experience, TwinCAT and CODESYS."
      : language === "ro"
        ? "Dezvoltator software pentru automatizări industriale în regiunea Stuttgart: software de control și punerea în funcțiune a liniilor de producție și testare în întreaga lume. 21 de ani de experiență, TwinCAT și CodeSys."
        : "Softwareentwickler für Industrieautomation im Raum Stuttgart: Steuerungssoftware und Inbetriebnahme von Produktions- und Prüflinien weltweit. 21 Jahre Berufserfahrung, TwinCAT und CodeSys.";

    if (languageMenu) {
      languageMenu.setAttribute("aria-label",
        language === "en" ? "Select language" : language === "ro" ? "Selectează limba" : "Sprache auswählen"
      );
    }

    if (languageCurrentFlag) {
      languageCurrentFlag.className = "language-option__flag language-option__flag--" + language;
    }

    if (languageCurrentCode) {
      languageCurrentCode.textContent = language.toUpperCase();
    }

    var profileLanguages = document.querySelector("[data-profile-languages]");
    if (profileLanguages) profileLanguages.setAttribute("aria-label",
      language === "en"
        ? "German, English, Romanian"
        : language === "ro" ? "Germană, engleză, română" : "Deutsch, Englisch, Rumänisch"
    );

    languageOptions.forEach(function (option) {
      var isActive = option.getAttribute("data-language-option") === language;
      option.setAttribute("aria-selected", String(isActive));
    });

    if (menuButton) {
      var menuIsOpen = menuButton.getAttribute("aria-expanded") === "true";
      var menuDictionary = dictionary || { "menu.open": "Menü öffnen", "menu.close": "Menü schließen" };
      menuButton.setAttribute("aria-label", menuIsOpen ? menuDictionary["menu.close"] : menuDictionary["menu.open"]);
    }

    var themeButton = document.querySelector("[data-theme-toggle]");
    if (themeButton) themeButton.setAttribute("aria-label",
      language === "en" ? "Toggle color scheme" : language === "ro" ? "Schimbă schema de culori" : "Farbschema umschalten"
    );
  }

  applyLanguage(storedLanguage());

  function setLanguageMenuState(isOpen) {
    if (!languageMenu || !languageMenuToggle || !languageMenuPanel) return;

    languageMenu.classList.toggle("is-open", isOpen);
    languageMenuToggle.setAttribute("aria-expanded", String(isOpen));
    languageMenuPanel.hidden = !isOpen;

    var currentLanguage = document.documentElement.lang;
    var labels = currentLanguage === "en"
      ? { open: "Open language menu", close: "Close language menu" }
      : currentLanguage === "ro"
        ? { open: "Deschide meniul de limbi", close: "Închide meniul de limbi" }
        : { open: "Sprachmenü öffnen", close: "Sprachmenü schließen" };
    languageMenuToggle.setAttribute("aria-label", isOpen ? labels.close : labels.open);
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
      var currentLanguage = document.documentElement.lang;
      var menuDictionary = currentLanguage === "en"
        ? english
        : currentLanguage === "ro" ? romanian : { "menu.open": "Menü öffnen", "menu.close": "Menü schließen" };
      menuButton.setAttribute("aria-label", isOpen ? menuDictionary["menu.close"] : menuDictionary["menu.open"]);
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
