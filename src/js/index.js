// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

import inputMasks from "./modules/input-masks.js";
import Modal from "./modules/modal";
import LazyLoad from "./modules/lazyLoad.js";

window.addEventListener("load", function () {
  // Переменные
  const body = document.querySelector("body");

  inputMasks();

  // Задаем текущий год в футере
  const currentYear = document.querySelector(".js_current_year");
  if (currentYear) currentYear.innerHTML = new Date().getFullYear();

  // Ленивая загрузка
  const images = document.querySelectorAll("img[data-src]");
  if (images)
    new LazyLoad(images, {
      root: null,
      // За сколько px или % загружать изображения
      rootMargin: "100px",
    });

  // Модальные окна
  const dialog1 = document.querySelector(".js_dialog1");
  if (dialog1) {
    new Modal(dialog1, {
      openBtn: document.querySelectorAll(".js_dialog1_open"),
    });
  }
  // Показываем страницу после загрузки
  body.classList.remove("js_load");
  body.style.opacity = 1;
});
