// plik scripts.js
function clickEvent() {
	var elements = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item ' + elements + '</li>';
}

var list = document.getElementById('Lista');
var add = document.getElementById('addElem');


add.addEventListener('click', clickEvent);

