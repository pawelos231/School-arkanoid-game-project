export default function checkLevelNames() {
  let divsElements = document.querySelectorAll(".level");
  divsElements.forEach((item, index) => {
    item.id = index;
    item.addEventListener("click", () => {
      localStorage.setItem(`Thing${index}`, item.id);
    });
  });
}

checkLevelNames();
//localStorage.removeItem('Item')
