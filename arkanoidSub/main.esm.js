export default class Main {
  constructor({ prostWrap, Mainwrap, time, timeWrap }) {
    this.prostWrap = prostWrap;
    this.Mainwrap = Mainwrap;
    this.time = time;
    this.timeWrap = timeWrap;
  }
  drawPaletka() {
    const paletka = new Paletka({
      wrapperElement: document.querySelector(".prost"),
    });
    paletka.createPaletka();
  }
  randomColorPick() {
    console.log(randomizeColor());
    let randomGeneratedColor = document.querySelector(".randomColor");
    randomGeneratedColor.textContent = `kolor:${color}`;
  }
  drawMap() {
    this.timeCounter();
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
    let sumOfSecondsPlayed = 0;
    //let diiivs = [...document.querySelectorAll(".prostDiv")];
    //setInterval(() => {
    //  console.log(diiivs.length);
    // }, 1000);
    //  console.log(diiivs);
    setTimeout(() => {
      let interval = setInterval(() => {
        sumS--;
        counter++;
        sumOfSecondsPlayed++;
        let sLeft = Math.floor(sumS % 60);
        let MLeft = Math.floor(sumM % 60);
        if (counter >= 60) {
          sumM--;
          counter = 0;
        }
        sLeft >= 10
          ? (div.textContent = `${MLeft}:${sLeft}`)
          : (div.textContent = `${MLeft}:0${sLeft}`);
        // console.log(diiivs.length);
        if (
          (localStorage.getItem("wynik") && localStorage.getItem("zycia")) !=
            undefined &&
          sumS > 0
        ) {
          clearInterval(interval);
          localStorage.removeItem("stop");
          localStorage.setItem("czas", sumOfSecondsPlayed);
        }
      }, 1000);
    }, 3000);
  }
}
