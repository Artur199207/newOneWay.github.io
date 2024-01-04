function changeColor(button) {
    const buttons = document.querySelectorAll('.order-bording button');
    buttons.forEach(btn => {
      btn.style.backgroundColor = 'var(--color-number18)';
      btn.style.color = 'var(--color-number9)';
      btn.querySelector('span').style.color = 'var(--color-number2)';
    });

    button.style.backgroundColor = 'var(--color-number2)';
    button.style.color = 'var(--color-number4)';
    button.querySelector('span').style.color = 'var(--color-number4)';
  }






    function openPopup1() {
        document.getElementById("overlay").style.display = "flex";
      }
      
      function closePopup() {
        document.getElementById("overlay").style.display = "none";
      }
      
      function addToPage() {
        
        var info = document.getElementById("infoInput").value;
      
        var newDiv = document.createElement("div");
        newDiv.innerHTML = info;
        document.getElementById("infoContainer").style.display = 'flex';
        document.getElementById("infoContainer").style.paddingInline = '120px';
        document.getElementById("infoContainer").style.gap = '20px';
        document.getElementById("infoContainer").appendChild(newDiv);
        document.querySelector('.order-background').style.display = 'none';
      
        closePopup();
      }
 



 