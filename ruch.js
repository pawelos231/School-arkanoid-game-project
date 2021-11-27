setTimeout(() => {
  let paletka = document.querySelector(".paletkaTak");
  let playerPoints = document.querySelector(".playerPoints");
  let moveBy = 25;
  if (window.innerWidth < 720) {
    window.addEventListener("load", () => {
      paletka.style.position = "absolute";
      paletka.style.left = "35vw";
      moveBy = 10;
    });
  } else {
    window.addEventListener("load", () => {
      paletka.style.position = "absolute";
      paletka.style.left = "730px";
    });
  }
  window.addEventListener("keypress", (e) => {
    switch (e.code) {
      case "KeyA":
        paletka.style.left = parseInt(paletka.style.left) - moveBy + "px";
        break;
      case "KeyD":
        paletka.style.left = parseInt(paletka.style.left) + moveBy + "px";
        break;
    }
  });
  setTimeout(() => {
    paletka.style.display = "block";
    playerPoints.style.display = "block";
  }, 4000);
}, 40);
