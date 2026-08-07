(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  const mobile = document.getElementById("mobile-nav");
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a[href^='#'], .mobile-nav a[href^='#']")];

  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    const y = window.scrollY + 120;
    let active = "";
    for (const s of sections) {
      if (s.offsetTop <= y) active = s.id;
    }
    for (const a of navLinks) {
      const id = a.getAttribute("href")?.slice(1);
      a.classList.toggle("is-active", id === active);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = mobile.hasAttribute("hidden") === false;
      if (open) {
        mobile.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      } else {
        mobile.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close menu");
      }
    });
    mobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobile.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
