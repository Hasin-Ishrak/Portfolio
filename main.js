const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  }
});
const typedElement = document.querySelector("#element");
if (typedElement) {
  new Typed("#element", {
    strings: [
      "Web Developer",
      "Competitive Programmer",
      "Problem Solver",
      "Software Engineer",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1200,
    startDelay: 500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|",
  });
}
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
const counter = document.getElementById("problemCount");
function animateCounter() {
  let count = 0;
  const target = 1600;
  const speed = 2;
  const updateCounter = () => {
    if (count < target) {
      count += 10;
      counter.textContent = count;
      setTimeout(updateCounter, speed);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
}
window.addEventListener("scroll", () => {
  if (counter) {
    const position = counter.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100 && !counter.classList.contains("counted")) {
      counter.classList.add("counted");
      animateCounter();
    }
  }
});

// ===== Scroll Progress Bar =====
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  document.querySelector(".scroll-progress").style.width =
    scrollPercent + "%";
});
