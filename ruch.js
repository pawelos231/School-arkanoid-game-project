setTimeout(() => {
  let paletka = document.querySelector(".paletkaTak");
  let moveBy = 10;
  window.addEventListener("load", () => {
    paletka.style.position = "absolute";
    paletka.style.left = "730px";
  });
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
}, 10);
