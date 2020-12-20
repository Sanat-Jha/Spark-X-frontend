"use strict";
const modal = document.querySelector(".followers__container");
const modal2 = document.querySelector(".following__container");
const overlay = document.getElementById("overlay");
const btnCloseModal = document.querySelector(".close-button");
const btnOpenModal = document.querySelector(".open-button");
const btnCloseModal2 = document.querySelector(".close-button-2");
const btnOpenModal2 = document.querySelector(".open-button-2");

const openModal = function () {
  modal.classList.add("followers__active");
  overlay.classList.add("active");
};
const openModal2 = function () {
  modal2.classList.add("followers__active");
  overlay.classList.add("active");
};

const closeModal = function () {
  modal.classList.remove("followers__active");
  overlay.classList.remove("active");
};

const closeModal2 = function () {
  modal2.classList.remove("followers__active");
  overlay.classList.remove("active");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

btnOpenModal2.addEventListener("click", openModal2);
btnCloseModal2.addEventListener("click", closeModal2);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

overlay.addEventListener("click", closeModal2);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal2();
  }
});
