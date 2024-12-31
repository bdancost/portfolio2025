import { projetos } from "./utilidades.js";

document.addEventListener("DOMContentLoaded", () => {
  const projetosSection = document.querySelector("#projetos .projetos-lista");

  const gerarProjetos = () => {
    const projetosHTML = projetos
      .map((projeto) => {
        return `
      <div class="projeto">
        <a href="${projeto.link}" target="_blank">
          <img src="${projeto.imagem}" alt="${projeto.nome}" />
          <h2>${projeto.nome}</h2>
          <p>${projeto.descricao}</p>
        </a>
        <div class="github-btn">
          <a href="${projeto.github}" target="_blank">
            <button class="github-button">
              <i class="bx bxl-github"></i> Ver projeto no GitHub
            </button>
          </a>
        </div>
      </div>
    `;
      })
      .join(""); // Unindo todos os projetos em uma string

    projetosSection.innerHTML = projetosHTML; // Injetando o HTML gerado na seção de projetos
  };

  gerarProjetos(); // Chama a função para gerar os projetos
});
