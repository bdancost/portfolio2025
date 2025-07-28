/**
 * Classe TypeWriter - Simula o efeito de máquina de escrever para exibição de textos
 *
 * Funcionalidades:
 * - Exibe textos caractere por caractere com efeito de digitação
 * - Suporta múltiplos textos em sequência
 * - Permite formatação de partes do texto (como cores diferentes)
 * - Oferece callback quando a animação é completada
 *
 * Uso básico:
 * const writer = new TypeWriter(element, texts, options);
 * writer.start();
 */
export class TypeWriter {
  /**
   * Construtor da classe TypeWriter
   * @param {HTMLElement} element - Elemento DOM onde o texto será renderizado
   * @param {Array|Object} texts - Texto(s) a ser(em) exibido(s). Pode ser um objeto único ou array de objetos
   * @param {Object} options - Opções de configuração
   * @param {number} [options.delay=100] - Tempo entre caracteres (em ms)
   * @param {Function} [options.onComplete] - Callback executado ao terminar a animação
   */
  constructor(element, texts, options = {}) {
    // Armazena o elemento DOM onde o texto será exibido
    this.element = element;

    // Garante que texts seja sempre um array (permite passar texto único ou array)
    this.texts = Array.isArray(texts) ? texts : [texts];

    // Configura o delay entre caracteres (com fallback padrão de 100ms)
    this.delay = options.delay || 100;

    // Callback para quando a animação terminar
    this.onComplete = options.onComplete || null;

    // Controle do estado atual da animação
    this.currentTextIndex = 0; // Índice do texto atual no array
    this.currentCharIndex = 0; // Índice do caractere atual no texto
    this.isWriting = false; // Flag para controlar se a animação está em andamento
  }

  /**
   * Inicia o efeito de máquina de escrever
   *
   * Verifica se já não está em execução e se o elemento é válido antes de começar
   * Limpa o conteúdo do elemento antes de iniciar a animação
   */
  start() {
    // Previne múltiplas inicializações simultâneas
    if (this.isWriting || !this.element) return;

    this.isWriting = true;
    this.element.textContent = ""; // Limpa o elemento
    this.type(); // Inicia o processo de digitação
  }

  /**
   * Método principal que controla a exibição caractere por caractere
   *
   * Gerencia:
   * - A exibição progressiva do texto
   * - Aplicação de formatação quando especificado
   * - Transição entre textos quando há múltiplos textos
   * - Finalização da animação
   */
  type() {
    // Verifica se ainda há textos para exibir
    if (this.currentTextIndex < this.texts.length) {
      const current = this.texts[this.currentTextIndex];

      // Verifica se ainda há caracteres no texto atual
      if (this.currentCharIndex < current.text.length) {
        const char = current.text[this.currentCharIndex];

        // Aplica formatação se especificado (usando innerHTML)
        if (current.colorClass) {
          this.element.innerHTML += `<span class="${current.colorClass}">${char}</span>`;
        } else {
          // Sem formatação (usa textContent por segurança)
          this.element.textContent += char;
        }

        this.currentCharIndex++;
        // Agenda o próximo caractere
        setTimeout(() => this.type(), this.delay);
      } else {
        // Passa para o próximo texto
        this.nextText();
      }
    } else {
      // Todos os textos foram exibidos
      this.finish();
    }
  }

  /**
   * Prepara a exibição do próximo texto no array
   *
   * Reinicia o índice de caracteres e incrementa o índice de textos
   * Mantém o mesmo delay para continuidade visual
   */
  nextText() {
    this.currentTextIndex++;
    this.currentCharIndex = 0;
    // Continua a animação com o próximo texto
    setTimeout(() => this.type(), this.delay);
  }

  /**
   * Finaliza a animação e executa o callback (se existir)
   *
   * Reseta o estado e chama a função onComplete
   */
  finish() {
    this.isWriting = false;
    if (this.onComplete) this.onComplete();
  }
}
