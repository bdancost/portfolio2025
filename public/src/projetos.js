import { projetos } from "./utilidades.js";

/**
 * Gera e renderiza os projetos na seção designada
 * @param {HTMLElement} container - Elemento DOM onde os projetos serão renderizados
 * @param {Array} projetosList - Lista de projetos a serem exibidos
 */
const renderizarProjetos = (container, projetosList) => {
  if (!container || !projetosList?.length) return;

  const projetosHTML = projetosList.map((projeto) => {
    const {
      linkDemo,
      imagem,
      nome,
      descricao,
      funcionalidades,
      github,
      emoji,
      tecnologias,
    } = projeto;

    // Criar lista de tecnologias
    const tecnologiasHTML = tecnologias
      .map((tech) => `<li><span class="tech-tag">${tech}</span></li>`)
      .join("");

    return `
        <div class="projeto">
          <a href="${linkDemo}" target="_blank" rel="noopener noreferrer">
          <h2>${emoji} ${nome}</h2>
            <img 
              src="${imagem}" 
              alt="${nome}" 
              loading="lazy"
            />
            
            <div class="descricao-projeto">
              <p><strong>${descricao}</strong></p>
              <ul>
                <li>${funcionalidades}</li>
              </ul>
            </div>
          </a>
          <div class="tecnologias-container">
            <ul class="tecnologias-lista">
              <li>
                <h4>Tecnologias utilizadas:</h4>
                ${tecnologiasHTML}
              </li>
            </ul>  
          </div>
          <div class="github-btn">
            <a href="${github}" target="_blank" rel="noopener noreferrer">
              <button type="button" class="github-button" aria-label="Ver projeto ${nome} no GitHub">
                <i class="bx bxl-github"></i> Ver código no GitHub
              </button>
            </a>
          </div>
        </div>
      `;
  });

  container.innerHTML = projetosHTML;
};

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  const projetosContainer = document.querySelector("#projetos .projetos-lista");
  renderizarProjetos(projetosContainer, projetos);
});
