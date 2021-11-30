const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 30;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const paddleHeight = 30;
const paddleWidth = 180;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 8;
const brickColumnCount = 3;
const brickWidth = 211;
const brickHeight = 40;
const brickPadding = 1;
const brickOffsetTop = 5;
const brickOffsetLeft = 5;
let playerPoints = document.querySelector(".playerPoints");
let score = 0;
let lives = 3;
let h1 = document.querySelector(".niewiem");
let mainWrap = document.querySelector(".MainWrap");
let statsWrap = document.querySelector(".statswrapper");

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}
function randomizeColor() {
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
let tab = [];
for (let i = 0; i < brickColumnCount * brickRowCount; i++) {
  tab.push(randomizeColor());
}

function createStatsTable() {
  let table = document.createElement("div");
  let p = document.createElement("p");
  table.style.width = "30vw";
  table.style.height = "80vh";
  table.style.backgroundColor = "white";
  p.style.color = "black";
  p.style.marginTop = "20px";
  let wynik = localStorage.getItem("wynik");
  let zycia = localStorage.getItem("zycia");
  let czas = localStorage.getItem("czas");
  let gra = localStorage.getItem("game");
  table.className = "flexCenter";
  let username = localStorage.getItem("username");
  let timeMultiplier = czas / 100;
  console.log(timeMultiplier);
  p.innerHTML = `punkty: ${wynik * zycia}
   <br> grałeś w: ${gra} <br> nazwa gracza: ${username} <br> <p class="time">czas:</p>  <h2 class="timeCount">${czas} sekund</h2>`;
  table.style.borderRadius = "8px";
  table.appendChild(p);
  statsWrap.appendChild(table);
}
function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}
if (window.innerWidth < 720) {
  function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth / 2;
    }
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score += 1;
          playerPoints.textContent = `Player Points: ${score}`;
          playerPoints.style.display = "block";
          if (score == 4) {
            let gameName = "Arkanoid";
            localStorage.setItem("wynik", score);
            localStorage.setItem("zycia", lives);
            localStorage.setItem("game", gameName);
            console.log(localStorage.getItem("wynik"));
            console.log(localStorage.getItem("zycia"));
            h1.textContent = `Gratulacje, Wygrałeś`;
            h1.style.color = "green";
            mainWrap.classList.add("blur");
            createStatsTable();
            return;
          } else {
            localStorage.removeItem("wynik");
            localStorage.removeItem("zycia");
            localStorage.removeItem("game");
          }
        }
      }
    }
  }
}

function drawBall() {
  let username = localStorage.getItem("username");
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fillText(username, 0, 0);
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = tab[c];
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawLives() {
  ctx.font = "24px lato";
  ctx.fillStyle = "white";
  ctx.fillText("Lives: " + lives, canvas.width - 80, 200);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawLives();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        return;
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}
setTimeout(() => {
  draw();
}, 4000);
