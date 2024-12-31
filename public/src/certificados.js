import { cursos } from "./utilidades.js";

document.addEventListener("DOMContentLoaded", () => {
  const exibirCursos = () => {
    const certificadosSection = document.querySelector(".certificados");

    const certificadoHTML = cursos
      .map((curso) => {
        return `
      <div class="certificado">
        <h2>Curso: ${curso.curso}</h2>
        <p><strong>Estado:</strong> ${curso.estado}</p>
        <p><strong>Data de Conclusão:</strong> ${curso.data}</p>
        <p><strong>Duração:</strong> ${curso.duracao}</p>
        <p><strong>Descrição:</strong> ${curso.descricao}</p>
        <a href="${curso.url}" target="_blank" class="link-certificado">Ver Certificado</a>
      </div>
      `;
      })
      .join("");

    certificadosSection.innerHTML = certificadoHTML;
  };

  exibirCursos(); // Chama a função para exibir os cursos
});
