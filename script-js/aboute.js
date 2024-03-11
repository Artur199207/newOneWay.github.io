function openOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

let myDiv = document.querySelector(".openMenu");
let container = document.querySelector(".downDv");
let buttOP = document.getElementById("buttOp");

function openMenu() {
    myDiv.style.display = myDiv.style.display === "block" ? "none" : "block";
    buttOP.style.transform = buttOP.style.transform ==="rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
}

window.addEventListener("click", function (event) {
  if(!container.contains(event.target) && myDiv.style.display === "block") {
    myDiv.style.display = "none";
    buttOP.style.transform = "rotate(0deg)";
  }
})