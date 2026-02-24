// /assets/includes.js
(async function () {
  async function inject(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load " + url);
      el.innerHTML = await res.text();
    } catch (e) {
      // If partial fails, leave whatever is already in the page (or empty)
      // Optional: console.warn(e);
    }
  }

  await inject("#site-header", "/partials/header.html");
  await inject("#site-footer", "/partials/footer.html");
})();
