let Time1;
let Time2;

window.onscroll = function () {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	// Чистим старые таймеры функций, тем самым отменяем их выполнение.
	// Боремся с двойным срабатыванием условий if из-за "setTimeout".
	clearTimeout(Time2);
	clearTimeout(Time1);
	if (scrolled > 350) {
		Time1 = setTimeout('funkOpacity()', 0); // это был таймер 200, но работает и так
		document.querySelector('.menu').style.display = "flex";
	} else if (scrolled < 150) {
		Time2 = setTimeout('funkDisplay()', 200);
		document.querySelector('.menu').style.opacity = "0";
	}
}

function funkOpacity() {
	document.querySelector('.menu').style.opacity = '1';
}

function funkDisplay() {
	document.querySelector('.menu').style.display = 'none';
}