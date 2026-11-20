// script.js: two small features, each explained in plain comments.

// 1. Dark mode toggle.
//    Clicking the button adds or removes the "dark" class on <html>.
//    style.css swaps the colors when that class is present.
//    localStorage remembers the choice the next time the page loads.
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
root.classList.add("js"); // tells style.css that JavaScript is running

// Keep the button label in sync with the current theme.
function updateLabel() {
  toggle.textContent = root.classList.contains("dark") ? "Light mode" : "Dark mode";
}

try {
  if (localStorage.getItem("theme") === "dark") root.classList.add("dark");
} catch (e) { /* storage blocked; the default light theme is fine */ }
updateLabel();

toggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  updateLabel();
  try {
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  } catch (e) { /* ignore */ }
});

// 2. Fade project cards in as they scroll into view.
//    IntersectionObserver tells us when an element appears on screen.
const cards = document.querySelectorAll(".card");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach((card) => observer.observe(card));
} else {
  cards.forEach((card) => card.classList.add("visible"));
}
