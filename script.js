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

        window.location.href = "https://www.profitablecpmratenetwork.com/kx44g0py?key=f7d11d3548b9f86652ee979f380e9b93";
      }

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

      window.location.href = "https://omg10.com/4/10952186";
    }

    // push again to trap back
    history.pushState(null, null, location.href);
  });


  // ===== IMAGE LINK TRACKING (ONCE PER DAY PER LINK) =====
  const links = document.querySelectorAll(".track-link");

  links.forEach(link => {
    link.addEventListener("click", function (e) {

      e.preventDefault();

      const id = link.getAttribute("data-id");
      const realLink = link.getAttribute("data-link");

      const today = new Date().toDateString();
      const key = "linkClick_" + id;
      const lastClick = localStorage.getItem(key);

      if (lastClick === today) {
        return;
      }

      localStorage.setItem(key, today);

      window.location.href = realLink;
    });
  });

});
