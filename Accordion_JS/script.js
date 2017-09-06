"use strict";

var acc = document.getElementsByClassName('accordion');

for (var i = 0, max = acc.length; i < max; i++) {
	
	function toggle() {
		this.classList.toggle('active');
		this.nextElementSibling.classList.toggle('show');
	};
	
	acc[i].addEventListener('click', toggle);
}