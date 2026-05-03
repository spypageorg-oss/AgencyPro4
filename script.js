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

// ===== SAFE GLOBAL CLICK REDIRECT (ONCE PER SESSION) =====

document.addEventListener("DOMContentLoaded", function () {

  const redirectLinks = [
    "https://omg10.com/4/10956500",
    "https://www.profitablecpmratenetwork.com/n0wfsjta3e?key=e799bf33d5e76ce24c1ea752657f51bc",
    "https://omg10.com/4/10929324",
    "https://www.profitablecpmratenetwork.com/gu3qzip9d?key=92bbe3f6f938e3e43a9828b64e3d928c",
    "https://omg10.com/4/10956544"
  ];

  document.addEventListener("click", function (e) {

    // ❌ Ignore important UI elements
    if (
      e.target.closest("a") ||
      e.target.closest("button") ||
      e.target.closest("input") ||
      e.target.closest("textarea") ||
      e.target.closest("#videoClick")
    ) {
      return;
    }

    // ✅ Only once per session
    if (sessionStorage.getItem("globalRedirectDone")) {
      return;
    }

    sessionStorage.setItem("globalRedirectDone", "true");

    // Random link (better for ads)
    const link = redirectLinks[Math.floor(Math.random() * redirectLinks.length)];

    window.location.href = link;

  });

});

// ===== AGE POPUP =====

document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("agePopup");
  const yesBtn = document.getElementById("ageYes");
  const noBtn = document.getElementById("ageNo");

  // Already accepted?
  if (localStorage.getItem("ageVerified") === "true") {
    popup.style.display = "none";
  }

  // YES click
  yesBtn.addEventListener("click", function () {
    localStorage.setItem("ageVerified", "true");
    popup.style.display = "none";
  });

  // NO click
  noBtn.addEventListener("click", function () {
    window.location.href = "https://google.com"; // redirect anywhere
  });

});
