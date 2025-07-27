// src/js/modules/menuToggle.js
export class MenuToggle {
  constructor(buttonId, menuId) {
    this.button = document.getElementById(buttonId);
    this.menu = document.getElementById(menuId);
    this.isOpen = false;
    this.init();
  }

  init() {
    if (!this.button || !this.menu) return;

    this.button.addEventListener("click", () => this.toggleMenu());
    this.menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => this.closeMenu());
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menu.classList.toggle("show");
    this.button.setAttribute("aria-expanded", this.isOpen);
  }

  closeMenu() {
    this.isOpen = false;
    this.menu.classList.remove("show");
    this.button.setAttribute("aria-expanded", "false");
  }
}
