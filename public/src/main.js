// src/js/main.js
import { TypeWriter } from "./modules/typeWriter.js";
import { SmoothScroll } from "./modules/smoothScroll.js";
import { MenuToggle } from "./modules/menuToggle.js";

class Portfolio {
  constructor() {
    this.init();
  }

  init() {
    this.initTypeWriter();
    this.initSmoothScroll();
    this.initMenuToggle();
  }

  initTypeWriter() {
    // Use tanto a classe quanto o ID como fallback
    const titleElement = document.querySelector(
      ".titulo-principal, #nome-autor"
    );
    const descElement = document.querySelector(".descricao-autor, #descricao");

    if (!titleElement || !descElement) {
      console.error("Elementos não encontrados:", {
        title: titleElement,
        description: descElement,
      });
      return;
    }

    console.log("Elementos encontrados para TypeWriter:", {
      title: titleElement,
      description: descElement,
    });

    const titleWriter = new TypeWriter(
      titleElement,
      [
        { text: "Daniel ", colorClass: null },
        { text: "Fernandes", colorClass: "texto-colorido" },
      ],
      {
        delay: 100,
        onComplete: () => {
          new TypeWriter(
            descElement,
            [
              {
                text: "Olá, sou Daniel, Analista de Sistemas formado em Análise e Desenvolvimento de Sistemas. Tenho conhecimento prático em HTML, CSS, JavaScript, Tailwind, TypeScript, React, Python e SQL. Estou em constante evolução, buscando aprimorar minhas habilidades para desenvolver soluções eficientes e inovadoras na área de Front-End.",
                colorClass: null,
              },
            ],
            { delay: 30 }
          ).start();
        },
      }
    );

    titleWriter.start();
  }

  initSmoothScroll() {
    new SmoothScroll('a[href^="#"]', 100);
  }

  initMenuToggle() {
    new MenuToggle("menu-toggle", "menu");
  }
}

// Inicialização segura
function initApp() {
  try {
    new Portfolio();
  } catch (error) {
    console.error("Falha ao inicializar portfolio:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
