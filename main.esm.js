import { Prost } from "./obj.esm.js";
class Main {
  constructor({ prostWrap, Mainwrap }) {
    this.prostWrap = prostWrap;
    this.Mainwrap = Mainwrap;
  }
  randomizeColor() {
    const tabOfColors = [
      "F",
      "A",
      "D",
      "C",
      "B",
      "E",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let sum = "#";
    for (let j = 0; j < 6; j++) {
      sum += tabOfColors[Math.floor(Math.random() * tabOfColors.length)];
    }
    return sum;
  }

  drawProst() {
    for (let i = 0; i < 24; i++) {
      let color = this.randomizeColor();
      this.prost = new Prost({
        width: "200px",
        height: "80px",
        color: color,
        wrapperElement: document.querySelector(".prost"),
      });
      this.prost.createElement(i);
    }
  }
  deleteTask() {
    let divs = [...document.querySelectorAll(".prostDiv")];
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("click", () => {
        divs[i].classList.add("active");
      });
    }
  }
}

export const main = new Main({
  prostWrap: document.querySelector(".prost"),
  Mainwrap: document.querySelector(".MainWrap"),
});
main.drawProst();
main.deleteTask();
