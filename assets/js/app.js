"use strict";

const rating = document.querySelector(".rating-state");
const thanks = document.querySelector(".thank-you");
const submit = document.querySelector(".submit-btn");
const btns = document.querySelectorAll(".btns-container button");
const score = document.querySelector(".score");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    score.textContent = btn.textContent;
  });
});

submit.addEventListener("click", toggleResult);
thanks.addEventListener("click", toggleResult);

function toggleResult() {
  rating.classList.toggle("hidden");
  thanks.classList.toggle("hidden");
}
