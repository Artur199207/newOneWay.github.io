


function openOverlay() {
    document.getElementById("overlay").style.display = "block";
  }

  function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
  }

  function openMenu(){
    const menuOpen = document.querySelector(".openMenu");
    menuOpen.style.display="flex";
    document.getElementById('buttOp').style.transform = 'rotate(180deg)';
  }



  