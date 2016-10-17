console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML ='New Value';

var maintext = document.getElementById('main-tetx');
var mariginLeft = 0;

function moveRight() {
    marginLeft =marginLeft + 1;
    maintext.style.marginLeft = marginLeft + 'px';
}

maintext.onclick = function () {
    var interval = setInterval(moveRight,50);
}