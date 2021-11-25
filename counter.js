let div = document.getElementById("nie");
let seconds1 = new Date().getSeconds();
let seconds2 = new Date().getSeconds() + 1140;
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
