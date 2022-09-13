// JS Test
console.log("Hello");

// SUBMIT & GO BACK BUTTON
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const goBackButton = document.getElementById("back");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hide");
  mainContainer.classList.add("hide");
  //   same as : mainContainer.style.display = "none"
});

goBackButton.addEventListener("click", () => {
  mainContainer.classList.remove("hide");
  thanksContainer.classList.add("hide");
});

// RATING DISPLAY
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

// LOCK SUBMIT BUTTON IF RATE BUTTON NOT SELECTED

