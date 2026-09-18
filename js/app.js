(function () {
  const feedEl = document.getElementById("feed");
  const emptyEl = document.getElementById("emptyState");
  const countEl = document.getElementById("resultCount");
  const searchEl = document.getElementById("search");
  const heroEl = document.getElementById("hero");
  const topicGridEl = document.getElementById("topicGrid");
  const recentListEl = document.getElementById("recentList");
  const footerCategoriesEl = document.getElementById("footerCategories");
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterNote = document.getElementById("newsletterNote");

  const CAT_VAR = {
    mercado: ["--cat-mercado", "--cat-mercado-bg"],
    "ia-llm": ["--cat-ia", "--cat-ia-bg"],
    "engenharia-dados": ["--cat-eng", "--cat-eng-bg"],
    ferramentas: ["--cat-ferr", "--cat-ferr-bg"],
    carreira: ["--cat-carreira", "--cat-carreira-bg"],
    regulacao: ["--cat-reg", "--cat-reg-bg"]
  };

  const CATEGORIES = [
    { value: "mercado", label: "Mercado & Negócios" },
    { value: "ia-llm", label: "IA & LLMs" },
    { value: "engenharia-dados", label: "Engenharia de Dados" },
    { value: "ferramentas", label: "Ferramentas & BI" },
    { value: "carreira", label: "Carreira" },
    { value: "regulacao", label: "Regulação & Ética" }
  ];

  const TOPIC_COLUMNS = [
    { title: "Engenharia de Dados", category: "engenharia-dados" },
    { title: "Ciência de Dados & IA", category: "ia-llm" },
    { title: "Análise de Dados & BI", category: "ferramentas" }
  ];

  const MONTHS_PT = [
    "jan.", "fev.", "mar.", "abr.", "maio", "jun.",
    "jul.", "ago.", "set.", "out.", "nov.", "dez."
  ];

  const state = {
    category: "all",
    year: "all",
    query: ""
  };

  const sortedByDateDesc = NEWS.slice().sort((a, b) => b.date.localeCompare(a.date));

  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return `${d} ${MONTHS_PT[m - 1]} ${y}`;
  }

  function badgeStyle(category) {
    const [colorVar, bgVar] = CAT_VAR[category] || [];
    return colorVar ? `style="--cat-color: var(${colorVar}); --cat-bg: var(${bgVar})"` : "";
  }

  function matches(item) {
    if (state.category !== "all" && item.category !== state.category) return false;
    if (state.year !== "all" && String(item.year) !== state.year) return false;
    if (state.query) {
      const haystack = (item.title + " " + item.summary + " " + item.categoryLabel).toLowerCase();
      if (!haystack.includes(state.query)) return false;
    }
    return true;
  }

  function cardTemplate(item) {
    return `
      <article class="card" id="article-${item.id}">
        <div class="card-meta">
          <span class="badge" ${badgeStyle(item.category)}>${item.categoryLabel}</span>
          <span class="card-date">${formatDate(item.date)}</span>
        </div>
        <h2>${item.title}</h2>
        <p class="summary">${item.summary}</p>
        <button class="reference-toggle" type="button" aria-expanded="false">Ver referência (ABNT)</button>
        <p class="reference" hidden>${item.reference}</p>
      </article>
    `;
  }

  function renderFeed() {
    const items = sortedByDateDesc.filter(matches);

    feedEl.innerHTML = items.map(cardTemplate).join("");
    emptyEl.hidden = items.length !== 0;

    const total = NEWS.length;
    countEl.textContent = items.length === total
      ? `${total} artigos`
      : `${items.length} de ${total} artigos`;
  }

  function renderHero() {
    const item = sortedByDateDesc[0];
    heroEl.innerHTML = `
      <a class="hero-card" href="#article-${item.id}">
        <div class="hero-panel">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 19V10M10 19V5M16 19V13M22 19V8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <div class="hero-eyebrow">
            <span class="badge" ${badgeStyle(item.category)}>${item.categoryLabel}</span>
            <span class="card-date">${formatDate(item.date)}</span>
          </div>
          <h1>${item.title}</h1>
          <p>${item.summary}</p>
          <span class="hero-link">Ler mais →</span>
        </div>
      </a>
    `;
  }

  function renderTopicColumns() {
    topicGridEl.innerHTML = TOPIC_COLUMNS.map((col) => {
      const items = sortedByDateDesc.filter((i) => i.category === col.category).slice(0, 3);
      const cards = items.map((item) => `
        <a class="mini-card" href="#article-${item.id}">
          <span class="card-date">${formatDate(item.date)}</span>
          <h4>${item.title}</h4>
          <p>${item.summary.slice(0, 90)}${item.summary.length > 90 ? "…" : ""}</p>
        </a>
      `).join("");
      return `
        <div class="topic-column">
          <h3>${col.title}</h3>
          ${cards}
        </div>
      `;
    }).join("");
  }

  function renderRecentList() {
    recentListEl.innerHTML = sortedByDateDesc.slice(0, 5).map((item) => `
      <li><a href="#article-${item.id}">${item.title}</a></li>
    `).join("");
  }

  function renderFooterCategories() {
    footerCategoriesEl.innerHTML = CATEGORIES.map((cat) => `
      <li><button type="button" data-goto-category="${cat.value}">${cat.label}</button></li>
    `).join("");
  }

  function setCategoryFilter(value) {
    state.category = value;
    document
      .querySelectorAll('.chip[data-filter="category"]')
      .forEach((el) => el.classList.toggle("is-active", el.dataset.value === value));
    renderFeed();
    document.getElementById("artigos").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function render() {
    renderHero();
    renderTopicColumns();
    renderRecentList();
    renderFooterCategories();
    renderFeed();
  }

  feedEl.addEventListener("click", (event) => {
    const btn = event.target.closest(".reference-toggle");
    if (!btn) return;
    const ref = btn.nextElementSibling;
    const isHidden = ref.hasAttribute("hidden");
    if (isHidden) {
      ref.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = "Ocultar referência (ABNT)";
    } else {
      ref.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Ver referência (ABNT)";
    }
  });

  document.querySelectorAll('.chip[data-filter]').forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;
      const value = chip.dataset.value;
      state[filter] = value;

      document
        .querySelectorAll(`.chip[data-filter="${filter}"]`)
        .forEach((el) => el.classList.toggle("is-active", el === chip));

      renderFeed();
    });
  });

  footerCategoriesEl.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-goto-category]");
    if (!btn) return;
    setCategoryFilter(btn.dataset.gotoCategory);
  });

  searchEl.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderFeed();
  });

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterNote.textContent = "Obrigado! Isso é uma demonstração estática — nenhum e-mail foi enviado.";
    newsletterForm.reset();
  });

  render();
})();
