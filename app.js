
//Data
const PERSONAS = [
  {
    id: "invest",
    label: "Invest / VC",
    icon: "fa-chart-line",
    hint: "Find deal flow & targets",
    tours: [
      { title: "Identify New Investments", desc: "Find startups raising funds", minutes: 2, icon: "fa-seedling" },
      { title: "Monitor Your Portfolio", desc: "Track growth and performance", minutes: 2, icon: "fa-chart-area" },
      { title: "Build Target Lists", desc: "Screen companies with filters", minutes: 3, icon: "fa-compass" },
    ],
  },
  {
    id: "sales",
    label: "Sales & BD",
    icon: "fa-magnet",
    hint: "Discover high-intent leads",
    tours: [
      { title: "Find New Leads", desc: "Discover and target prospects", minutes: 2, icon: "fa-search" },
      { title: "Track Buying Signals", desc: "Use growth events as intent", minutes: 3, icon: "fa-bolt" },
      { title: "Share Shortlists", desc: "Align teams in one click", minutes: 2, icon: "fa-handshake" },
    ],
  },
  {
    id: "public",
    label: "Public Sector",
    icon: "fa-landmark",
    hint: "Measure ecosystems & impact",
    tours: [
      { title: "Track Ecosystems", desc: "Map clusters and innovation", minutes: 3, icon: "fa-map" },
      { title: "Monitor Program Outcomes", desc: "See impact signals over time", minutes: 3, icon: "fa-flask" },
      { title: "Export Reporting", desc: "Build dashboards and reports", minutes: 2, icon: "fa-file-export" },
    ],
  },
  {
    id: "corp",
    label: "Corp Strategy",
    icon: "fa-brain",
    hint: "Track competitors & innovation",
    tours: [
      { title: "Monitor the Market", desc: "Watch competitors and themes", minutes: 3, icon: "fa-globe" },
      { title: "Find Partners", desc: "Identify targets for collaboration", minutes: 2, icon: "fa-puzzle-piece" },
      { title: "Spot Trends Faster", desc: "Surface signals across sectors", minutes: 2, icon: "fa-wand-magic-sparkles" },
    ],
  },
  {
    id: "uni",
    label: "Universities",
    icon: "fa-graduation-cap",
    hint: "Identify spinouts & partners",
    tours: [
      { title: "Find University Spinouts", desc: "Track new ventures and founders", minutes: 3, icon: "fa-rocket" },
      { title: "Discover Partners", desc: "Match research with industry", minutes: 2, icon: "fa-link" },
      { title: "Measure Impact", desc: "Evidence outcomes and growth", minutes: 2, icon: "fa-book" },
    ],
  },
];


const state = {
  persona: "sales", // default selected which we can change later on
};

function $(sel) {
  return document.querySelector(sel);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m];
  });
}


//Render persona buttons
function renderPersonas() {
  const grid = $("#personaRow");
  grid.innerHTML = "";

  PERSONAS.forEach((p) => {
    const selected = p.id === state.persona;

    const btn = document.createElement("button");


    btn.setAttribute(
      "aria-label",
      `Select ${p.label} persona`,
      "aria-pressed", selected
    );


    btn.className = [
      "group text-left rounded-2xl border backdrop-blur-xl px-4 py-3 transition",
      selected
        ? "border-primary/50 bg-white/10 shadow-glow"
        : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20",
    ].join(" ");

    btn.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="h-10 w-10 rounded-xl border border-white/10 bg-white/10 grid place-items-center">
          <i class="fa-solid ${p.icon} text-lg text-primary"></i>
        </div>
        <div>
          <div class="font-semibold tracking-tight">${p.label}</div>
          <div class="mt-1 text-xs text-white/60">${p.hint}</div>
          
        </div>
      </div>
    `;

    btn.onclick = () => {
      state.persona = p.id;
      renderPersonas();
      renderTours(true);
    };

    grid.appendChild(btn);
  });
}


// Render tours
function renderTours(animateSwap = false) {
  const grid = $("#tourCards");
  const label = $("#tourContextLabel")

  const persona = PERSONAS.find((p) => p.id === state.persona) || PERSONAS[0];

  if(label){
    label.innerHTML = `
      Showing tours for
      <span class="text-primary font-semibold">
        ${persona.label}
      </span>
    `;

  }

  if (animateSwap) {
    grid.classList.add("opacity-60");
    grid.classList.add("scale-[0.99]");
    setTimeout(() => {
      grid.classList.remove("opacity-60");
      grid.classList.remove("scale-[0.99]");
    }, 160);
  }

  grid.innerHTML = "";

  persona.tours.forEach((t) => {
    const card = document.createElement("article");
    card.className =
      "rounded-2xl border border-white/10 bg-surface backdrop-blur-xl shadow-soft hover:shadow-glow transition overflow-hidden";

    card.innerHTML = `
      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="h-10 w-10 rounded-xl border border-white/10 bg-white/10 grid place-items-center">
              <i class="fa-solid ${t.icon} text-lg text-primary"></i>
            </div>
            <div>
              <h4 class="font-semibold">${escapeHtml(t.title)}</h4>
              <p class="mt-1 text-sm text-white/60">${escapeHtml(t.desc)}</p>
            </div>
          </div>
          <span class="text-xs text-white/60 whitespace-nowrap">${t.minutes} min</span>
        </div>

        <div class="mt-5 flex items-center justify-between">
          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold shadow-glow hover:bg-primary-hover transition"
          >
            Start Tour <span aria-hidden="true">›</span>
          </a>

          <span class="text-xs text-white/50">Recommended</span>
        </div>
      </div>
      <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="px-5 py-3 text-xs text-white/60">
        Tip: Use filters + alerts to stay ahead of new signals.
      </div>
    `;

    grid.appendChild(card);
  });
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

       
        if (entry.target.id === "proof") {
          animateCounters();
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((el) => observer.observe(el));
}



function setupHeaderScroll() {
  const headerShell = document.getElementById("navShell");
  console.log("hardershell: " + headerShell)

 

  if (!headerShell) return;
  console.log("hardershell: " + headerShell)

  const onScroll = () => {
    const scrolled = window.scrollY > 10;
    headerShell.classList.toggle("bg-glass/80", scrolled);
    headerShell.classList.toggle("shadow-glow", scrolled);
    headerShell.classList.toggle("border-white/15", scrolled);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupYear() {
  $("#year").textContent = new Date().getFullYear();
}

function bootFromQuery() {
  const url = new URL(window.location.href);
  const persona = url.searchParams.get("persona");
  if (persona && PERSONAS.some((p) => p.id === persona)) {
    state.persona = persona;
  }
}

function init() {
  bootFromQuery();
  setupYear();
  renderPersonas();
  renderTours(false);
  setupReveals();
  setupHeaderScroll();
  
}

document.addEventListener("DOMContentLoaded", init);
