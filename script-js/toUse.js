function setupModal(modalId, openBtnId, closeBtnClass) {
    var modal = document.getElementById(modalId);
    var openBtn = document.getElementById(openBtnId);
    var closeBtn = document.querySelector('.' + closeBtnClass);
  
    openBtn.onclick = function() {
      modal.style.display = "block";
    }
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
  setupModal("myModal", "openModalBtn", "close");
  setupModal("myModal1", "openModalBtn1", "close1");
  