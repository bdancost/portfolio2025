// src/js/modules/smoothScroll.js
export class SmoothScroll {
  constructor(selector, offset = 100) {
    this.links = document.querySelectorAll(selector);
    this.offset = offset;
    this.init();
  }

  init() {
    this.links.forEach((link) => {
      link.addEventListener("click", (e) => this.handleClick(e));
    });
  }

  handleClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const finalPosition = targetPosition - this.offset;

      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      });
    }
  }
}
