const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});


// ===== VIDEO CLICK REDIRECT LOGIC =====

const clickLayer = document.getElementById("videoClick");

if (clickLayer) {
  clickLayer.addEventListener("click", function () {

    const today = new Date().toDateString();
    const lastClick = localStorage.getItem("videoRedirectDate");

    // Only once per day
    if (lastClick !== today) {
      localStorage.setItem("videoRedirectDate", today);

      window.open("https://www.profitablecpmratenetwork.com/kx44g0py?key=f7d11d3548b9f86652ee979f380e9b93", "_blank");
    }

    // Remove layer so video becomes clickable
    clickLayer.style.display = "none";
  });
}
