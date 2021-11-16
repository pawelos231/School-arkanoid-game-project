let mainDiv = document.querySelector(".LevelSelectContainer")
let count = 5;
document.querySelector("button").addEventListener("click", () => {
    count++;
    let div = document.createElement("div");
    div.textContent = count
    div.className = "level"
    mainDiv.appendChild(div)
})