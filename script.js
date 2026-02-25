const CONFIG_PATH = "./resume.config.json";

function createChip(text) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = text;
  return span;
}

function fillChipRow(targetId, values) {
  const row = document.getElementById(targetId);
  row.innerHTML = "";
  (values || []).forEach((value) => row.appendChild(createChip(value)));
}

function renderMetrics(metrics = []) {
  const root = document.getElementById("metrics");
  const template = document.getElementById("metricTemplate");
  root.innerHTML = "";
  if (!metrics || metrics.length === 0) {
    root.style.display = "none";
    return;
  }
  root.style.display = "grid";

  (metrics || []).slice(0, 4).forEach((entry) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".metric-label").textContent = entry.label || "Metric";
    node.querySelector(".metric-value").textContent = entry.value || "-";
    root.appendChild(node);
  });
}

function renderList(targetId, links) {
  const list = document.getElementById(targetId);
  list.innerHTML = "";
  (links || []).forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.label;
    a.target = "_blank";
    a.rel = "noreferrer";
    li.appendChild(a);
    list.appendChild(li);
  });
}

function renderItems(targetId, items, mapFn) {
  const target = document.getElementById(targetId);
  const template = document.getElementById("itemTemplate");
  target.innerHTML = "";

  (items || []).forEach((entry) => {
    const node = template.content.cloneNode(true);
    const item = node.querySelector(".item");
    const titleEl = node.querySelector(".item-title");
    const metaEl = node.querySelector(".item-meta");
    const subtitleEl = node.querySelector(".item-subtitle");
    const bulletsEl = node.querySelector(".item-bullets");
    const chipsEl = node.querySelector(".item-chips");

    const mapped = mapFn(entry);
    titleEl.textContent = mapped.title || "";
    metaEl.textContent = mapped.meta || "";
    subtitleEl.textContent = mapped.subtitle || "";

    (mapped.bullets || []).slice(0, 3).forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      bulletsEl.appendChild(li);
    });

    if (!(mapped.bullets || []).length) bulletsEl.remove();

    (mapped.chips || []).slice(0, 6).forEach((chip) => chipsEl.appendChild(createChip(chip)));
    if (!(mapped.chips || []).length) chipsEl.remove();

    if (!mapped.subtitle) subtitleEl.remove();

    target.appendChild(item);
  });
}

function applyTheme(theme = {}) {
  const root = document.documentElement;
  if (theme.accent) root.style.setProperty("--accent", theme.accent);
  if (theme.accent2) root.style.setProperty("--accent-2", theme.accent2);
}

function updateSeo(seo = {}, basics = {}) {
  document.title = seo.title || `${basics.name || "Resume"} | AI Resume`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", seo.description || basics.headline || "Personal resume website");
  }
}

async function loadResume() {
  try {
    const response = await fetch(CONFIG_PATH);
    if (!response.ok) {
      throw new Error(`Cannot load ${CONFIG_PATH}`);
    }

    const config = await response.json();
    const basics = config.basics || {};

    applyTheme(config.theme);
    updateSeo(config.seo, basics);

    document.documentElement.lang = config.lang || "zh-CN";
    document.getElementById("name").textContent = basics.name || "Your Name";
    document.getElementById("headline").textContent = basics.headline || "";
    document.getElementById("location").textContent = [basics.location, basics.phone].filter(Boolean).join(" | ");
    document.getElementById("summary").textContent = config.summary || "";

    const emailLink = document.getElementById("emailLink");
    emailLink.href = basics.email ? `mailto:${basics.email}` : "#";
    emailLink.textContent = basics.email || "Contact";

    const cvLink = document.getElementById("cvLink");
    cvLink.href = basics.cvUrl || "#";

    fillChipRow("highlights", config.highlights);
    renderMetrics(config.metrics);

    fillChipRow("skillsCore", config.skills?.core);
    fillChipRow("skillsTools", config.skills?.tools);
    fillChipRow("skillsLanguages", config.skills?.languages);

    renderList("socialList", config.socials);

    renderItems("experienceList", config.experience, (entry) => ({
      title: [entry.company || "Company", entry.role || "Role"].filter(Boolean).join(" | "),
      meta: entry.period || "",
      subtitle: entry.location || "",
      bullets: entry.achievements || [],
      chips: entry.tech || [],
    }));

    renderItems("projectList", config.projects, (entry) => ({
      title: entry.name || "Project",
      meta: entry.period || "",
      subtitle: entry.description || "",
      bullets: entry.highlights || [],
      chips: entry.tech || [],
    }));

    renderItems("educationList", config.education, (entry) => ({
      title: entry.school || "School",
      meta: entry.period || "",
      subtitle: [entry.degree, entry.major].filter(Boolean).join(" | "),
      bullets: entry.highlights || [],
      chips: [],
    }));
  } catch (error) {
    const app = document.getElementById("app");
    const msg = document.createElement("p");
    msg.className = "notice";
    msg.textContent = "无法加载 resume.config.json。请确认文件路径正确，并通过本地服务或 GitHub Pages 打开页面。";
    app.appendChild(msg);
    console.error(error);
  }
}

loadResume();
