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
  buttOP.style.transform = buttOP.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
}

let myDiv1 = document.querySelector(".dropdpwn-res");
let container1 = document.querySelector(".content-burger");
let buttOP1 = document.querySelector(".barImg");

function openBar() {
  myDiv1.style.display = myDiv1.style.display === "flex" ? "none" : "flex";
}


window.addEventListener("click", function (event) {
  if (!container.contains(event.target) && myDiv.style.display === "block") {
    myDiv.style.display = "none";
    buttOP.style.transform = "rotate(0deg)";
  }
  if (!container1.contains(event.target) && myDiv1.style.display === "flex") {
    myDiv1.style.display = "none";
  }

})


function closeMenu() {
  if (window.innerWidth > 320 && window.innerWidth <= 916) {
    myDiv.classList.remove('open');
    myDiv.style.display = 'none';
    myDiv1.classList.remove('open');
    myDiv1.style.display = 'none';
    buttOP.style.transform = "rotate(0deg)";
  } else if (window.innerWidth > 916) {
    myDiv.classList.remove('open');
    myDiv.style.display = 'none';
    myDiv1.classList.remove('open');
    myDiv1.style.display = 'none';

  }
} 

closeMenu();
window.addEventListener('resize', closeMenu);

