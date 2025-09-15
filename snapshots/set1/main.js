// Snapshot Set1 copy of main.js
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
})();
