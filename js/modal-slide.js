let prevModalSlide = document.querySelector('.modal-slide-item-left'),
	nextModalSlide = document.querySelector('.modal-slide-item-right-right'),
	slideModalSlide = document.getElementsByClassName('gratitudes-block-item'),
	slideModalImg = document.querySelector('.modal-slide-item-img'),
	slideModalExit = document.querySelector('.modal-slide-item-right-exit'),
	ModalSlideIndex = 1;

slideModalExit.onclick = function () {
	document.querySelector('html').style.overflowY = null;
	setTimeout("document.querySelector('.modal-slide').style.opacity = '0'", 200);
	setTimeout("document.querySelector('.modal-slide').style.display = 'none'", 600);
};

for (let x = 0; x < slideModalSlide.length; x++) {
	slideModalSlide[x].onclick = function (e) {
		document.querySelector('.modal-slide').style.opacity = '0';
		document.querySelector('.modal-slide').style.display = 'flex';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal-slide').style.opacity = '1'", 100);
		for (let i = 0; i < slideModalSlide.length + 1; i++) {
			if (e.target.classList.contains('gratitudes-block-item') && e.target == slideModalSlide[i - 1] && i != ModalSlideIndex) {
				currentModalSlide(i);
				$(slideModalImg).css('background-image', $(slideModalSlide[i - 1]).css('background-image'));
			}
		}
	};

	function currentModalSlide(n) {
		showModalSlide(ModalSlideIndex = n);
	};

	function showModalSlide(n) {
		if (n < 1) {
			ModalSlideIndex = slideModalSlide.length;
		} else if (n > slideModalSlide.length) {
			ModalSlideIndex = 1;
		}
	};

	function plusModalSlide(n) {
		showModalSlide(ModalSlideIndex += n);
		$(slideModalImg).css('background-image', $(slideModalSlide[ModalSlideIndex - 1]).css('background-image'));
	};

	prevModalSlide.onclick = function () {
		plusModalSlide(-1);
	};
	nextModalSlide.onclick = function () {
		plusModalSlide(1);
	};
};

// for (let x = 0; x < slideModalSlideMin.length; x++) {
// 	slideModalSlideMin[x].onclick = function (e) {
// 		document.querySelector('.modal-slide').style.opacity = '0';
// 		document.querySelector('.modal-slide').style.display = 'flex';
// 		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
// 		setTimeout("document.querySelector('.modal-slide').style.opacity = '1'", 100);
// 		for (let i = 0; i < slideModalSlideMin.length + 1; i++) {
// 			if (e.target.classList.contains('case-slider-slid-text-img-slide') && e.target == slideModalSlideMin[i - 1] && i != ModalSlideIndexMin) {
// 				currentModalSlideMin(i);
// 				$(slideModalImg).css('background-image', $(slideModalSlideMin[i - 1]).css('background-image'));
// 			}
// 		}
// 	};

// 	function currentModalSlideMin(n) {
// 		showModalSlideMin(ModalSlideIndexMin = n);
// 	};

// 	function showModalSlideMin(n) {
// 		if (n < 1) {
// 			ModalSlideIndexMin = slideModalSlideMin.length;
// 		} else if (n > slideModalSlideMin.length) {
// 			ModalSlideIndexMin = 1;
// 		}
// 	};

// 	function plusModalSlideMin(n) {
// 		showModalSlideMin(ModalSlideIndexMin += n);
// 		$(slideModalImg).css('background-image', $(slideModalSlideMin[ModalSlideIndexMin - 1]).css('background-image'));
// 	};

// 	prevModalSlideMin.onclick = function () {
// 		plusModalSlideMin(-1);
// 	};
// 	nextModalSlideMin.onclick = function () {
// 		plusModalSlideMin(1);
// 	};
// };