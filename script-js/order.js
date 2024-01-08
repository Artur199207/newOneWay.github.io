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

  const info = document.getElementById("infoInput").value;
  const info1 = document.getElementById("infoInput1").value;
  const newDiv = document.createElement("div");
  newDiv.setAttribute('class', 'content-div');
  document.getElementById("infoContainer").style.display = 'flex';
  document.getElementById("infoContainer").style.paddingInline = '120px';
  document.getElementById("infoContainer").appendChild(document.querySelector('.infocontentleft'));
  document.querySelector('.infocontentleft').appendChild(newDiv)
  document.querySelector('.order-background').style.display = 'none';
  const div1 = document.createElement('div');
  newDiv.appendChild(div1);
  div1.setAttribute('class', 'wrapper-div1');
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'new-order-div');
  const div3 = document.createElement('div');
  div1.appendChild(div2);
  div1.appendChild(div3);
  const chck = document.createElement('img');
  chck.src = document.querySelector('.custom-checkbox img').src;
  chck.setAttribute('style', 'width:32px;')
  const div5 = document.createElement('div');
  div5.setAttribute('class', 'order-image');
  div2.appendChild(div5);
  div5.append(chck);
  const air = document.createElement('img');
  air.src = './image/AirplaneTilt.svg';
  div5.append(air);
  const div6 = document.createElement('div');
  const text = document.createElement('h1');
  div2.appendChild(div6);
  div6.appendChild(text);
  text.innerHTML += info1;
  text.setAttribute('class', 'order-text-track');
  const div11 = document.createElement('div');
  const div12 = document.createElement('div');
  div3.appendChild(div11);
  div3.appendChild(div12);
  div11.innerHTML = info;
  div11.setAttribute('class', 'name-order');
  div12.innerHTML += '140.000 RUB';
  div12.setAttribute('class', 'order-mony');
  div3.setAttribute('class', 'colum-order')
  closePopup();
}


const toOrder = document.getElementById('order-to');
toOrder.addEventListener('click',function(){
  document.querySelector(".infocontentrigth").style.display = 'block'
  document.querySelector('.order-background').style.display = 'none';
})

