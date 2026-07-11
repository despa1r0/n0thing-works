const translations = {
  en: {
    skip: "Skip to content", theme: "Theme", availability: "Available for junior roles",
    heroLine1: "I BUILD", heroLine2: "USEFUL SYSTEMS.",
    heroIntro: "Python development, infrastructure and self-hosted services — built to solve real problems.",
    viewProjects: "View projects", roleLabel: "ROLE", roleValue: "PYTHON / DEVOPS", locationLabel: "LOCATION",
    educationLabel: "EDUCATION", languagesLabel: "LANGUAGES", aboutEyebrow: "ABOUT / APPROACH",
    aboutTitle: "Code that leaves the tutorial and enters the real world.",
    aboutText: "I am a Collegium Da Vinci student focused on Python and infrastructure. I build bots, data tools, deployment pipelines and self-hosted services, learning through complete working systems.",
    principle1: "01 / PRACTICAL", principle2: "02 / DOCUMENTED", principle3: "03 / DEPLOYABLE",
    projectsEyebrow: "SELECTED / WORK", projectsTitle: "Projects built end to end.",
    capabilitiesEyebrow: "CAPABILITIES / STACK", capabilitiesTitle: "Development meets operations.",
    backendTitle: "Python & backend", opsTitle: "Infrastructure", selfTitle: "Self-hosting",
    selfText: "Home server / Media / File storage / Device sync / Client-server systems",
    contactEyebrow: "CONTACT / NEXT STEP", contactTitle: "LET'S BUILD\nSOMETHING USEFUL.",
    contactText: "Open to junior Python, DevOps and system administration opportunities.",
    openGithub: "Open GitHub ↗", contactNote: "Email and custom domain can be added here before launch.",
    footer: "BUILT WITH INTENT / NO TRACKING", backTop: "BACK TO TOP ↑", source: "SOURCE ↗", private: "PRIVATE PROJECT"
  },
  pl: {
    skip: "Przejdź do treści", theme: "Motyw", availability: "Otwarty na stanowiska juniorskie",
    heroLine1: "TWORZĘ", heroLine2: "UŻYTECZNE SYSTEMY.",
    heroIntro: "Python, infrastruktura i usługi self-hosted — tworzone do rozwiązywania realnych problemów.",
    viewProjects: "Zobacz projekty", roleLabel: "ROLA", roleValue: "PYTHON / DEVOPS", locationLabel: "LOKALIZACJA",
    educationLabel: "EDUKACJA", languagesLabel: "JĘZYKI", aboutEyebrow: "O MNIE / PODEJŚCIE",
    aboutTitle: "Kod, który wychodzi poza tutorial i trafia do realnego świata.",
    aboutText: "Studiuję w Collegium Da Vinci i rozwijam się w Pythonie oraz infrastrukturze. Tworzę boty, narzędzia danych, procesy wdrożeniowe i usługi self-hosted, ucząc się przez kompletne, działające systemy.",
    principle1: "01 / PRAKTYCZNIE", principle2: "02 / DOKUMENTACJA", principle3: "03 / GOTOWE DO WDROŻENIA",
    projectsEyebrow: "WYBRANE / PROJEKTY", projectsTitle: "Projekty tworzone od początku do końca.",
    capabilitiesEyebrow: "UMIEJĘTNOŚCI / STACK", capabilitiesTitle: "Development spotyka operations.",
    backendTitle: "Python i backend", opsTitle: "Infrastruktura", selfTitle: "Self-hosting",
    selfText: "Serwer domowy / Media / Pliki / Synchronizacja urządzeń / Systemy klient-serwer",
    contactEyebrow: "KONTAKT / NASTĘPNY KROK", contactTitle: "ZBUDUJMY\nCOŚ UŻYTECZNEGO.",
    contactText: "Szukam możliwości rozwoju jako Junior Python Developer, DevOps lub Administrator Systemów.",
    openGithub: "Otwórz GitHub ↗", contactNote: "E-mail i własna domena zostaną dodane przed publikacją.",
    footer: "ZBUDOWANE ŚWIADOMIE / BEZ ŚLEDZENIA", backTop: "WRÓĆ NA GÓRĘ ↑", source: "KOD ↗", private: "PROJEKT PRYWATNY"
  },
  uk: {
    skip: "Перейти до вмісту", theme: "Тема", availability: "Відкритий до junior-позицій",
    heroLine1: "Я СТВОРЮЮ", heroLine2: "КОРИСНІ СИСТЕМИ.",
    heroIntro: "Python-розробка, інфраструктура та self-hosted сервіси — для вирішення реальних задач.",
    viewProjects: "Переглянути проєкти", roleLabel: "НАПРЯМОК", roleValue: "PYTHON / DEVOPS", locationLabel: "ЛОКАЦІЯ",
    educationLabel: "ОСВІТА", languagesLabel: "МОВИ", aboutEyebrow: "ПРО МЕНЕ / ПІДХІД",
    aboutTitle: "Код, який виходить за межі туторіалу в реальний світ.",
    aboutText: "Я навчаюся в Collegium Da Vinci та розвиваюся в Python й інфраструктурі. Створюю ботів, інструменти для даних, процеси розгортання та self-hosted сервіси, навчаючись на повноцінних робочих системах.",
    principle1: "01 / ПРАКТИЧНО", principle2: "02 / ДОКУМЕНТОВАНО", principle3: "03 / ГОТОВО ДО РОЗГОРТАННЯ",
    projectsEyebrow: "ОБРАНІ / ПРОЄКТИ", projectsTitle: "Проєкти, створені від початку до кінця.",
    capabilitiesEyebrow: "МОЖЛИВОСТІ / СТЕК", capabilitiesTitle: "Розробка зустрічається з експлуатацією.",
    backendTitle: "Python та backend", opsTitle: "Інфраструктура", selfTitle: "Self-hosting",
    selfText: "Домашній сервер / Медіа / Файли / Синхронізація пристроїв / Клієнт-серверні системи",
    contactEyebrow: "КОНТАКТ / НАСТУПНИЙ КРОК", contactTitle: "СТВОРІМО\nЩОСЬ КОРИСНЕ.",
    contactText: "Відкритий до Junior Python, DevOps та System Administration позицій.",
    openGithub: "Відкрити GitHub ↗", contactNote: "E-mail та власний домен можна додати перед запуском.",
    footer: "СТВОРЕНО СВІДОМО / БЕЗ ТРЕКІНГУ", backTop: "НАГОРУ ↑", source: "КОД ↗", private: "ПРИВАТНИЙ ПРОЄКТ"
  }
};

const projects = [
  {
    id: "tgob", glyph: "TG/01", year: "2026", href: "https://github.com/despa1r0/TGOB-fin",
    tags: ["Python", "aiogram", "PostgreSQL", "Docker"],
    title: { en: "TGOB-fin", pl: "TGOB-fin", uk: "TGOB-fin" },
    description: {
      en: "Multi-user Telegram finance tracker with async currency conversion, detailed statistics, PDF exports and a Docker Compose deployment.",
      pl: "Wieloużytkownikowy tracker finansów w Telegramie z asynchronicznym przeliczaniem walut, statystykami, eksportem PDF i wdrożeniem Docker Compose.",
      uk: "Багатокористувацький фінансовий Telegram-бот з асинхронною конвертацією валют, статистикою, PDF-звітами та Docker Compose."
    }
  },
  {
    id: "market", glyph: "ML/02", year: "2026", href: "https://github.com/despa1r0/Trump-market-prediction-model",
    tags: ["Python", "ML", "Flask", "Pandas"],
    title: { en: "Market prediction pipeline", pl: "Pipeline predykcji rynku", uk: "Пайплайн прогнозування ринку" },
    description: {
      en: "Modular ML system connecting social posts with S&P 500 data, feature engineering, model comparison and a Flask inference interface.",
      pl: "Modularny system ML łączący posty społecznościowe z danymi S&P 500, feature engineering, porównanie modeli i interfejs Flask.",
      uk: "Модульна ML-система, що поєднує соціальні дописи з даними S&P 500, feature engineering, порівняння моделей та Flask-інтерфейс."
    }
  },
  {
    id: "jobhunt", glyph: "JH/03", year: "2026", href: "https://github.com/despa1r0/jobHunt",
    tags: ["Playwright", "PostgreSQL", "Telegram", "Docker"],
    title: { en: "jobHunt automation", pl: "Automatyzacja jobHunt", uk: "Автоматизація jobHunt" },
    description: {
      en: "Vacancy scraper with Playwright, PostgreSQL persistence, Telegram filters and a container-ready headless worker.",
      pl: "Scraper ofert pracy z Playwright, bazą PostgreSQL, filtrami Telegram i kontenerowym workerem headless.",
      uk: "Скрапер вакансій на Playwright з PostgreSQL, Telegram-фільтрами та контейнерним headless worker."
    }
  },
  {
    id: "hdrezka", glyph: "HD/04", year: "2026", href: null,
    tags: ["Full stack", "CI/CD", "Monitoring", "VPS"],
    title: { en: "HDrezka Search", pl: "HDrezka Search", uk: "HDrezka Search" },
    description: {
      en: "Media search service used as a complete deployment exercise: application stack, VPS operations, monitoring and CI/CD workflows.",
      pl: "Serwis wyszukiwania mediów rozwijany jako kompletne ćwiczenie wdrożeniowe: stack aplikacji, VPS, monitoring i CI/CD.",
      uk: "Сервіс пошуку медіа як повний deployment-проєкт: стек застосунку, VPS, моніторинг та CI/CD."
    }
  }
];

const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentLanguage = localStorage.getItem("portfolio-language") || "en";
let currentTheme = localStorage.getItem("portfolio-theme") || (systemDark.matches ? "dark" : "light");

function renderProjects() {
  const dictionary = translations[currentLanguage];
  document.querySelector("#projects-grid").innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <div class="project-meta"><span>PROJECT / ${String(index + 1).padStart(2, "0")}</span><span>${project.year}</span></div>
      <div class="project-visual" aria-hidden="true"><span class="project-glyph">${project.glyph}</span></div>
      <h3>${project.title[currentLanguage]}</h3>
      <p>${project.description[currentLanguage]}</p>
      <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      ${project.href
        ? `<a class="project-link" href="${project.href}" target="_blank" rel="noreferrer">${dictionary.source}</a>`
        : `<span class="project-link">${dictionary.private}</span>`}
    </article>
  `).join("");
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem("portfolio-language", currentLanguage);
  root.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const value = translations[currentLanguage][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll(".language-button").forEach(button => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderProjects();
}

function setTheme(theme) {
  currentTheme = theme === "light" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", currentTheme);
  root.dataset.theme = currentTheme;
  document.querySelector('meta[name="theme-color"]').content = currentTheme === "dark" ? "#090909" : "#f3f3ef";
  document.querySelector(".theme-button").setAttribute("aria-pressed", String(currentTheme === "light"));
}

document.querySelectorAll(".language-button").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.querySelector(".theme-button").addEventListener("click", () => setTheme(currentTheme === "dark" ? "light" : "dark"));
document.querySelector("#year").textContent = new Date().getFullYear();
setTheme(currentTheme);
setLanguage(currentLanguage);
