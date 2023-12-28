const changeSettings = document.querySelector('.settings-text span');
changeSettings.addEventListener('click', function(){
    window.location.href = 'changeSettings.html'
})
changeSettings.style.cursor = 'pointer';
const passChange = document.getElementById('change');
passChange.addEventListener('click',function(){
    window.location.href = 'passwordChange.html'
})