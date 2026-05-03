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

document.addEventListener("DOMContentLoaded", function () {

  const clickLayer = document.getElementById("videoClick");

  if (!clickLayer) return;

  clickLayer.addEventListener("click", function () {

    const today = new Date().toDateString();
    const lastClick = localStorage.getItem("videoRedirectDate");

    // First click of the day → redirect
    if (lastClick !== today) {
      localStorage.setItem("videoRedirectDate", today);

      // ✅ Direct redirect
      window.location.href = "https://www.profitablecpmratenetwork.com/kx44g0py?key=f7d11d3548b9f86652ee979f380e9b93";
    }

    // Remove layer → allow video play next click
    clickLayer.style.display = "none";
  });

});
