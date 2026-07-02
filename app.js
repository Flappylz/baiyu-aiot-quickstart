const deviceButtons = document.querySelectorAll(".device-button");
const heroName = document.querySelector("#hero-name");
const wakeWord = document.querySelector("#wake-word");
const inlineWake = document.querySelector("#inline-wake");

deviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    deviceButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    heroName.textContent = button.dataset.device;
    wakeWord.textContent = button.dataset.wake;
    inlineWake.textContent = button.dataset.wake;
  });
});
