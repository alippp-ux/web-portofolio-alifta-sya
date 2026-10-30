// Small interactions for Alifta's portfolio
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☾" : "☼";
  });
}

const sayHiButton = document.querySelector("#sayHiButton");
const hiResponse = document.querySelector("#hiResponse");
if (sayHiButton && hiResponse) {
  sayHiButton.addEventListener("click", () => {
    hiResponse.textContent = "Hey there! 👋 Thanks for stopping by my portfolio!";
    hiResponse.classList.remove("pop-in");
    void hiResponse.offsetWidth;
    hiResponse.classList.add("pop-in");
  });
}

const randomMessages = [
  "Sometimes, a small step is still a big achievement.",
  "You don't have to know everything to begin learning.",
  "Give yourself time to grow at your own pace.",
  "Curiosity can take you to unexpected places.",
  "A little progress is still progress. Keep going!",
  "Rest is part of the journey, too."
];
const randomButton = document.querySelector("#randomButton");
const randomMessage = document.querySelector("#randomMessage");
if (randomButton && randomMessage) {
  randomButton.addEventListener("click", () => {
    const current = randomMessage.textContent;
    let next = current;
    while (randomMessages.length > 1 && next === current) {
      next = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    }
    randomMessage.textContent = next;
    randomMessage.classList.remove("pop-in");
    void randomMessage.offsetWidth;
    randomMessage.classList.add("pop-in");
  });
}

const loveButton = document.querySelector("#loveButton");
const loveCount = document.querySelector("#loveCount");
const loveThanks = document.querySelector("#loveThanks");
let loves = 0;
if (loveButton && loveCount && loveThanks) {
  loveButton.addEventListener("click", () => {
    loves += 1;
    loveCount.textContent = String(loves);
    loveThanks.textContent = loves === 1 ? "Thank you for the love! ♡" : "Aww, thank you again! ♡";
    loveButton.innerHTML = "<span>♥</span> Loved!";
  });
}
