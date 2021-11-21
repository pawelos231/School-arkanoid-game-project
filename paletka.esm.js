export class Paletka {
  constructor({ wrapperElement }) {
    this.wrapperElement = wrapperElement;
  }
  createPaletka() {
    let paletka = document.createElement("div");
    paletka.className = "paletkaTak";
    this.wrapperElement.appendChild(paletka);
  }
  movePaletka(y, keycode, paletka) {
    if (keycode === 37) {
      paletka.style.left = y;
    } else if (keycode === 39) {
      paletka.style.left = -y;
    }
  }
  checkCollision() {}
}
