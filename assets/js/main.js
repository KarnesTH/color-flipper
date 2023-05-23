"use strict";

(() => {
  // === DOM & VARS ===
  const DOM = {};

  DOM.body = document.querySelector("body");
  DOM.spanEl = document.querySelector("span.cf__headNameText");
  DOM.btnEl = document.querySelector("button.cf__btn");

  let pageColor = { r: 255, g: 255, b: 255 };

  // === INIT =========

  const init = () => {
    window.addEventListener("DOMContentLoaded", (e) => {
      DOM.body.style.backgroundColor = pageColor;
      DOM.spanEl.innerText = `rgb(${pageColor.r}, ${pageColor.g}, ${pageColor.b})`;
    });

    DOM.btnEl.addEventListener("click", setRndColor);
  };

  // === EVENTS / XHR =======

  const setRndColor = (e) => {
    e.preventDefault();

    pageColor.r = rndColorNumber();
    pageColor.g = rndColorNumber();
    pageColor.b = rndColorNumber();

    DOM.body.style.backgroundColor = `rgb(${pageColor.r}, ${pageColor.g}, ${pageColor.b})`;
    DOM.spanEl.innerText = `rgb(${pageColor.r}, ${pageColor.g}, ${pageColor.b})`;
  };

  // === FUNCTIONS ====

  const rndColorNumber = () => Math.floor(Math.random() * 256);

  init();
})();
