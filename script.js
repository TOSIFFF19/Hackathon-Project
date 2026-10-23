const comingSoonMessage = document.querySelector("#coming-soon-message");
const exploreButtons = document.querySelectorAll("[data-coming-soon]");
const dismissButton = comingSoonMessage.querySelector(".toast-close");
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

exploreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    comingSoonMessage.hidden = false;
  });
});

dismissButton.addEventListener("click", () => {
  comingSoonMessage.hidden = true;
});
