// Set2 snapshot copy after enhancements
(function () {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-navigation");
  if (!toggle || !nav) return;

  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") {
      toggle.checked = false;
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  toggle.addEventListener("change", () => {
    toggle.setAttribute("aria-expanded", toggle.checked ? "true" : "false");
  });

  const sectionIds = ["mission", "featured-tea", "locations"];
  const links = Array.from(nav.querySelectorAll("a[data-nav]"));
  const sectionMap = new Map();
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) sectionMap.set(id, el);
  });
  if (sectionMap.size && "IntersectionObserver" in window) {
    let activeId = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
            links.forEach((l) => l.removeAttribute("aria-current"));
            const current = links.find(
              (l) => l.getAttribute("data-nav") === activeId
            );
            if (current) current.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sectionMap.forEach((section) => observer.observe(section));
  }
})();
