"use strict";

const contact = document.querySelector(".contact");
const overlay = document.querySelector(".overlay");
const btnCloseContact = document.querySelector(".close-contact");
const btnOpenContact = document.querySelector(".show-contact");

// Kun painetaan buttonia ".show-contact"
btnOpenContact.addEventListener("click", function () {
  console.log("Button works!");
  contact.classList.remove("hidden");
});

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648437#content
