// Создаю переменные
let dots = document.getElementsByClassName('case-control-buttons-item'),
	dotsArea = document.getElementsByClassName('case-control-buttons')[0],
	slides = document.getElementsByClassName('case-wrapper'),
	prevBtn = document.getElementById('case-control-left'),
	nextBtn = document.getElementById('case-control-right'),
	slideIndex = 1,
	beforeSlide;

// Скрываю все слайды и кнопки кроме первых на старте
for (let i = 1; i < slides.length; i++) {
	slides[i].style.display = 'none';
	slides[i].style.transform = 'translateX(100vw)';
}
for (let i = 1; i < dots.length; i++) {
	dots[i].classList.remove('case-control-buttons-item-active');
}

// Проверка на выход из количества слайдов
function showSlides (n) {
  if (n < 1) {
		slideIndex = slides.length;
	} else if (n > slides.length) {
		slideIndex = 1;
	}
}

// Анимация перехода слайда на стрелочки
function plusSlides (n) {
	beforeSlide = slideIndex - 1;
	setTimeout("slides[beforeSlide].style.transform = 'translateX(-100vw)'", 100);
	setTimeout("slides[beforeSlide].style.display = 'none'", 500);
	setTimeout("slides[beforeSlide].style.transform = 'translateX(100vw)'", 500);
	dots[slideIndex - 1].classList.remove('case-control-buttons-item-active');
	
	showSlides(slideIndex += n);

	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('case-control-buttons-item-active');
	setTimeout("slides[slideIndex - 1].style.transform = 'translateX(0%)'", 100);
}

// Анимация перехода слайда на кнопки
function currentSlide (n) {
	beforeSlide = slideIndex - 1;
	setTimeout("slides[beforeSlide].style.transform = 'translateX(-100vw)'", 100);
	setTimeout("slides[beforeSlide].style.display = 'none'", 500);
	setTimeout("slides[beforeSlide].style.transform = 'translateX(100vw)'", 500);
	dots[slideIndex - 1].classList.remove('case-control-buttons-item-active');

	showSlides(slideIndex = n);
	
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('case-control-buttons-item-active');
	setTimeout("slides[slideIndex - 1].style.transform = 'translateX(0%)'", 100);
}

// Левая кнопка делает все слайды, кроме активного невидимыми 
// и сдвигает вправо, после чего запускает анимацию
prevBtn.onclick = function () {
	for (let i = 0; i < slides.length; i++) {
		if (i != (slideIndex - 1)) {
			slides[i].style.display = 'none';
			slides[i].style.transform = 'translateX(100vw)';
		}
	}
	plusSlides(-1);
}

// Правая кнопка делает все слайды, кроме активного невидимыми 
// и сдвигает вправо, после чего запускает анимацию
nextBtn.onclick = function () {
	for (let i = 0; i < slides.length; i++) {
		if (i != (slideIndex - 1)) {
		  slides[i].style.display = 'none';
			slides[i].style.transform = 'translateX(100vw)';
		}
	}
	plusSlides(1);
}

// Кнопка делает все слайды, кроме активного невидимыми 
// и сдвигает вправо, после чего запускает анимацию
dotsArea.onclick = function (e) {
	for (let i = 0; i < slides.length; i++) {
		if (i != (slideIndex - 1)) {
			slides[i].style.display = 'none';
			slides[i].style.transform = 'translateX(100vw)';
		}
	}
	for (let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('case-control-buttons-item') && e.target == dots[i - 1] && i != slideIndex) {
			currentSlide(i);
		}
	}
}