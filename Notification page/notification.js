"use strict";
const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.getElementById("overlay");

const openModal = function () {
  modal.classList.add("active");
  overlay.classList.add("overlay-active");
};
const closeModal = function () {
  modal.classList.remove("active");
  overlay.classList.remove("overlay-active");
};

openBtn.addEventListener("click", function () {
  openModal();
});
closeBtn.addEventListener("click", function () {
  closeModal();
});
overlay.addEventListener("click", function () {
  closeModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
