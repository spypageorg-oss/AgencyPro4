// ===== DOM READY =====
document.addEventListener("DOMContentLoaded", function () {

  // ===== MOBILE MENU =====
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }


  // ===== VIDEO CLICK REDIRECT (ONCE PER DAY) =====
  const clickLayer = document.getElementById("videoClick");

  if (clickLayer) {
    clickLayer.addEventListener("click", function () {

      const today = new Date().toDateString();
      const lastClick = localStorage.getItem("videoRedirectDate");

      if (lastClick !== today) {
        localStorage.setItem("videoRedirectDate", today);

        // 🔥 Video redirect link
        window.location.href = "https://www.profitablecpmratenetwork.com/kx44g0py?key=f7d11d3548b9f86652ee979f380e9b93";
      }

      // Remove layer → allow video play next click
      clickLayer.style.display = "none";
    });
  }


  // ===== BACK BUTTON REDIRECT (ONCE PER DAY) =====
  history.pushState(null, null, location.href);

  window.addEventListener("popstate", function () {

    const today = new Date().toDateString();
    const lastBackClick = localStorage.getItem("backRedirectDate");

    if (lastBackClick !== today) {
      localStorage.setItem("backRedirectDate", today);

      // 🔥 Back button redirect link
      window.location.href = "https://omg10.com/4/10952186";
    }

    // Prevent exit (push again)
    history.pushState(null, null, location.href);
  });

});
