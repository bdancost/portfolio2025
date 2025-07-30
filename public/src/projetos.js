import { projetos } from "./utilidades.js";

/**
 * Gera e renderiza os projetos na seção designada
 * @param {HTMLElement} container - Elemento DOM onde os projetos serão renderizados
 * @param {Array} projetosList - Lista de projetos a serem exibidos
 */
const renderizarProjetos = (container, projetosList) => {
  if (!container || !projetosList?.length) return;

  const projetosHTML = projetosList
    .map((projeto) => {
      const { link, imagem, nome, descricao, github } = projeto;

      return `
        <div class="projeto">
          <a href="${link}" target="_blank" rel="noopener noreferrer">
            <img 
              src="${imagem}" 
              alt="${nome}" 
              loading="lazy"
            />
            <h2>${nome}</h2>
            <p>${descricao}</p>
          </a>
          <div class="github-btn">
            <a href="${github}" target="_blank" rel="noopener noreferrer">
              <button type="button" class="github-button" aria-label="Ver projeto ${nome} no GitHub">
                <i class="bx bxl-github"></i> Ver projeto no GitHub
              </button>
            </a>
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = projetosHTML;
};

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  const projetosContainer = document.querySelector("#projetos .projetos-lista");
  renderizarProjetos(projetosContainer, projetos);
});
