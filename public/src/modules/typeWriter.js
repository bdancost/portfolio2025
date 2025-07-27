// src/js/modules/typeWriter.js
export class TypeWriter {
  constructor(element, texts, options = {}) {
    this.element = element;
    this.texts = texts; // Array de objetos { text, colorClass }
    this.delay = options.delay || 100;
    this.wordDelay = options.wordDelay || this.delay;
    this.charIndex = 0;
    this.wordIndex = 0;
    this.isWriting = false;
    this.onComplete = null;
  }

  start() {
    if (this.isWriting) return;

    this.isWriting = true;
    this.element.innerHTML = ""; // Limpa o conteúdo
    this.typeWord();
  }

  typeWord() {
    if (this.wordIndex < this.texts.length) {
      const current = this.texts[this.wordIndex];

      if (this.charIndex < current.text.length) {
        const char = current.text.charAt(this.charIndex);

        if (current.colorClass) {
          this.element.innerHTML += `<span class="${current.colorClass}">${char}</span>`;
        } else {
          this.element.textContent += char;
        }

        this.charIndex++;
        setTimeout(() => this.typeWord(), this.delay);
      } else {
        this.nextWord();
      }
    } else {
      this.finish();
    }
  }

  nextWord() {
    this.wordIndex++;
    this.charIndex = 0;
    setTimeout(() => this.typeWord(), this.wordDelay);
  }

  finish() {
    this.isWriting = false;
    if (this.onComplete) {
      this.onComplete();
    }
  }
}
