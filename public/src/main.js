// src/js/main.js
import { TypeWriter } from "./modules/typeWriter.js";
import { SmoothScroll } from "./modules/smoothScroll.js";
import { MenuToggle } from "./modules/menuToggle.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Animação de Digitação
  const titleWriter = new TypeWriter(
    document.querySelector(".home__title"),
    [
      { text: "Daniel ", colorClass: null },
      { text: "Fernandes", colorClass: "texto-colorido" },
    ],
    { delay: 100 }
  );

  const descWriter = new TypeWriter(
    document.querySelector(".home__description"),
    [
      {
        text: "Olá, sou Daniel, estudante do 5º semestre de Análise e Desenvolvimento de Sistemas (ADS) tenho 36 anos. Tenho conhecimento prático com HTML, CSS, Javascript, Tailwind, TypeScript, React, Python e SQL, e estou em constante aprendizado para me aperfeiçoar como desenvolvedor Front-End.",
        colorClass: null,
      },
    ],
    { delay: 30 }
  );

  // Inicia automaticamente ao carregar a página
  titleWriter.start();
  titleWriter.onComplete = () => descWriter.start();

  // 2. Navegação Suave
  new SmoothScroll('a[href^="#"]', 100);

  // 3. Menu Mobile
  new MenuToggle("menu-toggle", "menu");

  // Ativar observador de elementos
  initIntersectionObserver();
});

function initIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
}
