"use strict";
const modal = document.querySelector(".followers__container");
const overlay = document.getElementById("overlay");
const btnCloseModal = document.querySelector(".close-button");
const btnOpenModal = document.querySelector(".open-button");

const openModal = function () {
  modal.classList.add("followers__active");
  overlay.classList.add("active");
};

const closeModal = function () {
  modal.classList.remove("followers__active");
  overlay.classList.remove("active");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
