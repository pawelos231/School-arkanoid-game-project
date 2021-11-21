setTimeout(() => {
  let paletka = document.querySelector(".paletkaTak");
  let moveBy = 10;
  window.addEventListener("load", () => {
    paletka.style.position = "absolute";
    paletka.style.left = "730px";
  });
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        paletka.style.left = parseInt(paletka.style.left) - moveBy + "px";
        break;
      case "ArrowRight":
        paletka.style.left = parseInt(paletka.style.left) + moveBy + "px";
        break;
    }
  });
}, 10);
