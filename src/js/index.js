// import isAvifWebp from "avif-webp-checker";
// isAvifWebp({ mode: "webp", webpClass: "mywebpclass" });

import lazyLoad from "./modules/lazyLoad.js";
import Modal from "./modules/modal";
import steps from "./modules/steps";
import finalSteps from "./modules/finalSteps";
import inputMasks from "./modules/input-masks.js";
import requestForm from "./modules/requestForm.js";
import video from "./modules/video.js";

window.addEventListener("load", function () {
  // Переменные
  const body = document.querySelector("body");
  const dialog = document.querySelector(".js_dialog");

  steps();
  finalSteps();
  inputMasks();
  requestForm();
  lazyLoad();
  video();

  new Modal(dialog, {
    openBtn: document.querySelectorAll(".js_dialog_open"),
  });

  window.addEventListener("change", function () {
    body.classList.add("js_load");
    setTimeout(() => {
      body.classList.remove("js_load");
    }, 50);
  });

  // Показываем страницу после загрузки
  body.classList.remove("js_load");
  body.style.opacity = 1;
});
