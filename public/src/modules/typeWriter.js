// src/js/modules/typeWriter.js
export class TypeWriter {
  constructor(element, texts, options = {}) {
    this.element = element;
    this.texts = Array.isArray(texts) ? texts : [texts];
    this.delay = options.delay || 100;
    this.onComplete = options.onComplete || null;
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.isWriting = false;
  }

  start() {
    if (this.isWriting || !this.element) return;

    this.isWriting = true;
    this.element.textContent = "";
    this.type();
  }

  type() {
    if (this.currentTextIndex < this.texts.length) {
      const current = this.texts[this.currentTextIndex];

      if (this.currentCharIndex < current.text.length) {
        const char = current.text[this.currentCharIndex];

        if (current.colorClass) {
          this.element.innerHTML += `<span class="${current.colorClass}">${char}</span>`;
        } else {
          this.element.textContent += char;
        }

        this.currentCharIndex++;
        setTimeout(() => this.type(), this.delay);
      } else {
        this.nextText();
      }
    } else {
      this.finish();
    }
  }

  nextText() {
    this.currentTextIndex++;
    this.currentCharIndex = 0;
    setTimeout(() => this.type(), this.delay);
  }

  finish() {
    this.isWriting = false;
    if (this.onComplete) this.onComplete();
  }
}
