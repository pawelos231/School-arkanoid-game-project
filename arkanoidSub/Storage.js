const divWrapper = document.querySelector(".scoreTable");
let PlayerStats = document.createElement("div");
const button = document.querySelector(".start");

PlayerStats.className = "ScorePlayer";
PlayerStats.style.color = "white";
divWrapper.appendChild(PlayerStats);

const input = document.getElementById("username");
let username = "";

input.addEventListener("input", (e) => {
  username = e.target.value;
  console.log(e.target.value);
});
button.addEventListener("click", () => {
  localStorage.setItem("username", username);
});

let UserName = localStorage.getItem("username");
let time = localStorage.getItem("czas");
let points = localStorage.getItem("wynik");
let gameName = localStorage.getItem("game");
let lives = localStorage.getItem("zycia");
let timeMultiplier = time / 100;
console.log(timeMultiplier);
console.log(((points * lives) / timeMultiplier).toFixed(1));
console.log(time, points);
PlayerStats.innerHTML = `punkty: ${(
  ((points * lives) / timeMultiplier) *
  100
).toFixed(1)} <br> nazwa gracza: ${UserName} <br> Gra: ${gameName}`;
