import Main from "./main.esm.js";
import checkLevelNames from "./checkFuc.esm.js";
const objectArray = [
  {
    id: 0,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 1500,
  },
  {
    id: 1,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 1300,
  },
  {
    id: 2,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 1100,
  },
  {
    id: 3,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 900,
  },
  {
    id: 4,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 700,
  },
  {
    id: 5,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 600,
  },
  {
    id: 6,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 500,
  },
  {
    id: 7,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 400,
  },
  {
    id: 8,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 300,
  },
  {
    id: 9,
    prostWrap: document.querySelector(".prost"),
    Mainwrap: document.querySelector(".MainWrap"),
    timeWrap: document.getElementById("nie"),
    time: 60,
  },
];
let what = 0;
for (let i = 0; i < 10; i++) {
  if (localStorage.getItem(`Thing${i}`) == objectArray[i].id) {
    what = i;
  }
}
checkLevelNames(objectArray);

export const main1 = new Main({
  prostWrap: objectArray[0].prostWrap,
  Mainwrap: objectArray[0].Mainwrap,
  timeWrap: objectArray[0].timeWrap,
  time: objectArray[what].time,
});
for (let i = 0; i < 10; i++) {
  localStorage.removeItem(`Thing${i}`);
}
for (let i = 0; i < 10; i++) {
  console.log("nie");
}
main1.drawMap();
console.log("nie");
