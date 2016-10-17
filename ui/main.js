console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML ='New Value';

var maintext = document.getElementById('madi');
var mariginLeft = 0;

function moveRight() {
    marginLeft =marginLeft + 1;
    madi.style.marginLeft = marginLeft + 'px';
}

madi.onclick = function () {
    var interval = setInterval(moveRight,50);
}