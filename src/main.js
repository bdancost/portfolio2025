"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      // Obtém o ID do elemento de destino
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offset = 100;
      const elementPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Fecha o menu após clicar no link (em telas pequenas)
      const menu = document.getElementById("menu");
      if (menu && menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});
//Scroll na página
