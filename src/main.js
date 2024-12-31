"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let textoH1 = ["Daniel ", "Fernandes"];
  let textoP =
    "Olá, sou Daniel, estudante do 5º semestre de Análise e Desenvolvimento de Sistemas (ADS) tenho 36 anos. Tenho conhecimento prático com HTML, CSS, Javascript, Tailwind, TypeScript, React, Python e SQL, e estou em constante aprendizado para me aperfeiçoar como desenvolvedor Front-End.";

  let tituloElemento = document.querySelector(".titulo-principal");
  let paragrafoElemento = document.querySelector(".descricao-autor");

  let atraso = 100;
  let atrasoParagrafo = 30;

  let contadorDeLetras = 0;
  let palavraAtual = 0;
  function escreverTextoH1() {
    if (palavraAtual < textoH1.length) {
      if (contadorDeLetras < textoH1[palavraAtual].length) {
        if (palavraAtual === 1) {
          tituloElemento.innerHTML += `<span class="texto-colorido">${textoH1[
            palavraAtual
          ].charAt(contadorDeLetras)}</span>`;
        } else {
          tituloElemento.innerHTML +=
            textoH1[palavraAtual].charAt(contadorDeLetras);
        }

        contadorDeLetras++;
        setTimeout(escreverTextoH1, atraso);
      } else {
        palavraAtual++;
        contadorDeLetras = 0;
        setTimeout(escreverTextoH1, atraso);
      }
    } else {
      setTimeout(escreverTextoP, atraso);
    }
  }

  function escreverTextoP() {
    if (contadorDeLetras < textoP.length) {
      paragrafoElemento.textContent += textoP.charAt(contadorDeLetras);
      contadorDeLetras++;
      setTimeout(escreverTextoP, atrasoParagrafo);
    }
  }

  escreverTextoH1();

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
