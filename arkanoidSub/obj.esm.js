export class Prost {
  constructor({ width, height, color, wrapperElement }) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.wrapperElement = wrapperElement;
  }
  createElement(id) {
    let prostElement = document.createElement("div");
    prostElement.style.width = this.width;
    prostElement.style.height = this.height;
    prostElement.style.backgroundColor = this.color;
    prostElement.className = "prostDiv";
    prostElement.id = id;
    this.wrapperElement.appendChild(prostElement);
    return prostElement;
  }
}
