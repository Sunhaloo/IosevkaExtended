const toggleThemeButton = document.querySelector(".toggle-theme");
const toggleThemeIcon = document.querySelector(".toggle-theme i");
const root = document.documentElement;

let theme = localStorage.getItem("theme") ?? "light";

function applyTheme(newTheme) {
  theme = newTheme;

  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);

  toggleThemeIcon.classList.toggle("fa-moon", theme !== "dark");
  toggleThemeIcon.classList.toggle("fa-sun", theme === "dark");
}

applyTheme(theme);

toggleThemeButton.addEventListener("click", () => {
  applyTheme(theme === "dark" ? "light" : "dark");
});

const displayBox = document.querySelector(".display-box");
const userInput = document.querySelector(".user-input");
const increaseFontBtn = document.querySelector(".increase-font-btn");
const decreaseFontBtn = document.querySelector(".decrease-font-btn");

const MIN_FONT_SIZE = 10;
const MAX_FONT_SIZE = 72;
const FONT_STEP = 2;

let displayFontSize = parseFloat(getComputedStyle(displayBox).fontSize) || 16;

function setFontSize(size) {
  displayFontSize = Math.min(MAX_FONT_SIZE, Math.max(MIN_FONT_SIZE, size));

  displayBox.style.fontSize = `${displayFontSize}px`;

  decreaseFontBtn.disabled = displayFontSize <= MIN_FONT_SIZE;
  increaseFontBtn.disabled = displayFontSize >= MAX_FONT_SIZE;
}

setFontSize(displayFontSize);

increaseFontBtn.addEventListener("click", () => {
  setFontSize(displayFontSize + FONT_STEP);
});

decreaseFontBtn.addEventListener("click", () => {
  setFontSize(displayFontSize - FONT_STEP);
});

function syncDisplayText() {
  displayBox.textContent = userInput.value;
}

userInput.addEventListener("input", syncDisplayText);

syncDisplayText();
