const input = document.getElementById("username");
let username = "";
input.addEventListener("input", (e) => {
  username = e.target.value;
  console.log(e.target.value);
});
localStorage.setItem("username", username);
