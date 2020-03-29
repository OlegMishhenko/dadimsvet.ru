let prevModalSlideMin = document.querySelector('.modal-slide-min-item-left'),
	nextModalSlideMin = document.querySelector('.modal-slide-min-item-right-right'),
	slideModalSlideMin = document.getElementsByClassName('case-slider-slid-text-img-slide'),
	slideModalImgMin = document.querySelector('.modal-slide-min-item-img'),
	slideModalExitMin = document.querySelector('.modal-slide-min-item-right-exit'),
	ModalSlideIndexMin = 1;

slideModalExitMin.onclick = function () {
	document.querySelector('html').style.overflowY = null;
	setTimeout("document.querySelector('.modal-slide-min').style.opacity = '0'", 200);
	setTimeout("document.querySelector('.modal-slide-min').style.display = 'none'", 600);
};

for (let x = 0; x < slideModalSlideMin.length; x++) {
	slideModalSlideMin[x].onclick = function (e) {
		document.querySelector('.modal-slide-min').style.opacity = '0';
		document.querySelector('.modal-slide-min').style.display = 'flex';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal-slide-min').style.opacity = '1'", 100);
		for (let i = 0; i < slideModalSlideMin.length + 1; i++) {
			if (e.target.classList.contains('case-slider-slid-text-img-slide') && e.target == slideModalSlideMin[i - 1] && i != ModalSlideIndexMin) {
				currentModalSlideMin(i);
				$(slideModalImgMin).css('background-image', $(slideModalSlideMin[i - 1]).css('background-image'));
			}
		}
	};

	function currentModalSlideMin(n) {
		showModalSlideMin(ModalSlideIndexMin = n);
	};

	function showModalSlideMin(n) {
		if (n < 1) {
			ModalSlideIndexMin = slideModalSlideMin.length;
		} else if (n > slideModalSlideMin.length) {
			ModalSlideIndexMin = 1;
		}
	};

	function plusModalSlideMin(n) {
		showModalSlideMin(ModalSlideIndexMin += n);
		$(slideModalImgMin).css('background-image', $(slideModalSlideMin[ModalSlideIndexMin - 1]).css('background-image'));
	};

	prevModalSlideMin.onclick = function () {
		if (ModalSlideIndexMin % 2 == 0) {
			plusModalSlideMin(-1);
		} else if (ModalSlideIndexMin % 2 == 1) {
			plusModalSlideMin(1);
		}
	};
	nextModalSlideMin.onclick = function () {
		if (ModalSlideIndexMin % 2 == 0) {
			plusModalSlideMin(-1);
		} else if (ModalSlideIndexMin % 2 == 1) {
			plusModalSlideMin(1);
		}
	};
};