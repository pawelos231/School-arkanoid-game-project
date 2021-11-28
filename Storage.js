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
  console.log("username");
});

let bruh = localStorage.getItem("username");
let time = localStorage.getItem("czas");
let points = localStorage.getItem("points");

localStorage.clear();

console.log(time, points);
PlayerStats.innerHTML = `punkty: ${
  (points * time) / 100
} <br> nazwa gracza: ${bruh}`;
