import { Prost } from "./obj.esm.js";
import { Paletka } from "./paletka.esm.js";
class Main {
  constructor({ prostWrap, Mainwrap, time, timeWrap }) {
    this.prostWrap = prostWrap;
    this.Mainwrap = Mainwrap;
    this.time = time;
    this.timeWrap = timeWrap;
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
  drawPaletka() {
    const paletka = new Paletka({
      wrapperElement: document.querySelector(".prost"),
    });
    paletka.createPaletka();
  }

  timeCounter() {
    let div = this.timeWrap;
    let seconds1 = new Date().getSeconds();
    let seconds2 = new Date().getSeconds() + this.time;
    let sumS = seconds2 - seconds1;
    let minutes1 = seconds1 / 60;
    let minutes2 = seconds2 / 60;
    let sumM = minutes2 - minutes1;
    let counter = 0;
    setInterval(() => {
      sumS--;
      counter++;
      let sLeft = Math.floor(sumS % 60);
      let MLeft = Math.floor(sumM % 60);
      if (counter >= 60) {
        sumM--;
        counter = 0;
      }
      sLeft >= 10
        ? (div.textContent = `${MLeft}:${sLeft}`)
        : (div.textContent = `${MLeft}:0${sLeft}`);
    }, 1000);
  }
  drawMap() {
    this.timeCounter();
    this.drawPaletka();
    for (let i = 0; i < 24; i++) {
      let color = this.randomizeColor();
      if (window.innerWidth < 720) {
        this.prost = new Prost({
          width: "24.5vw",
          height: "20px",
          color: color,
          wrapperElement: document.querySelector(".prost"),
        });
      } else {
        this.prost = new Prost({
          width: "211.25px",
          height: "50px",
          color: color,
          wrapperElement: document.querySelector(".prost"),
        });
      }
      this.prost.createElement(i);
    }
  }
  deleteElement() {
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
  timeWrap: document.getElementById("nie"),
  time: 1500,
});
main.drawMap();
main.deleteElement();
