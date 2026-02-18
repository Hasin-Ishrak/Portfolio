const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
const typedElement = document.querySelector("#element");

if (typedElement) {
  new Typed("#element", {
    strings: [
      "Web Developer",
      "Competitive Programmer",
      "Problem Solver",
      "Software Engineer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1200,
    startDelay: 500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|"
  });
}
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
