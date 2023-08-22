"use strict";

// Määritellään index.htmlän classit helpommin käytettäviksi
const contact = document.querySelector(".contact");
const overlay = document.querySelector(".overlay");
const btnCloseContact = document.querySelector(".close-contact");
const btnOpenContact = document.querySelector(".show-contact");

// Funktio joka ottaa contact classista hidden pois, jolloin Contact ikkuna aukeaa. On määritetty sitemmin CSS tiedostossa onko se hidden vai ei.
const openContact = function () {
  contact.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Funktio jolla laitetaan contact ikkuna kiinni, eli lisätään classiin hidden jolloin CSS tiedostosta tulleiden arvojen mukaan se on sitemmin hidden.
const closeContact = function () {
  contact.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Kun painetaan buttonia "Contact me" (.show-contact), Aukeaa contact div joka on hidden.
btnOpenContact.addEventListener("click", openContact);

// Kun painetaan contact me divin X-Buttonia laitetaan Contact me Div pois päältä
btnCloseContact.addEventListener("click", closeContact);
// Kun overlaytä eli contact divin ulkopuolelta niin contact me ruutu menee pois päältä
overlay.addEventListener("click", closeContact);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !contact.classList.contains("hidden")) {
    closeContact();
  }
});

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648437#content
