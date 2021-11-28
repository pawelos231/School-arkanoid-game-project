export class Paletka {
  constructor({ wrapperElement }) {
    this.wrapperElement = wrapperElement;
  }
  createPaletka() {
    let paletka = document.createElement("div");
    paletka.className = "paletkaTak";
    this.wrapperElement.appendChild(paletka);
  }
  checkCollision() {}
}
