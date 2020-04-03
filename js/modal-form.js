let click;
document.addEventListener("click", function (e) {
	click = e.target;
	if (click.className == "navbar-contacts-button" || click.className == "menu-phone-button" || click.className == "contacts-block-text-phone-button" || click.className == "footer-block-phone-button") { 
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Заказ звонка';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер телефона, мы перезвоним (в рабочее время)';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать звонок';
	};
	if (click.className == "main-button" || click.className == "problems-buttom-button") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Заказ расчета';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения и составления расчета';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать расчет';
	};
	if (click.id == "button-50kVt") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Подключение мощности от 50 до 300 кВт';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать подключение';
		document.querySelector('.contact-form__input_name').value = 'Подключение мощности от 50 до 300 кВт';
	};
	if (click.id == "button-300kVt") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Подключение мощности от 300 до 670 кВт';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать подключение';
	};
	if (click.id == "button-670kVt") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Подключение мощности более 670 кВт';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать подключение';
	};
	if (click.id == "button-snij") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Снижение стоимости подключения';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Снизить стоимость';
	};
	if (click.id == "button-yvel") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Увеличение мощности';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Увеличить мощность';
	};
	if (click.id == "button-otkaz") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Подключение при получении отказа';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать подключение';
	};
	if (click.id == "button-proekt") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Выполнение проекта и согласования';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать услугу';
	};
	if (click.id == "button-uskor") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Ускорение процесса подключения';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать услугу';
	};
	if (click.id == "button-key") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Подключение<br>«Под Ключ»';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать подключение';
	};
	if (click.className == "connection-button") {
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		document.querySelector('.modal').style.opacity = '0';
		document.querySelector('.modal').style.display = 'block';
		setTimeout("document.querySelector('html').style.overflowY = 'hidden'", 300);
		setTimeout("document.querySelector('.modal').style.opacity = '1'", 100);
		setTimeout("document.querySelector('.modal-form').style.transform = 'translateX(0%)'", 300);
		document.querySelector('.contact-form__title').innerHTML = 'Подключение к электросетям';
		document.querySelector('.contact-form__description').innerHTML = 'Оставьте свой номер, вам перезвонит специалист (в рабочее время) для уточнения деталей вашего подключения';
		document.querySelector('.contact-form__button').innerHTML = 'Заказать подключение';
	};
	if (click.className == "modal" || click.className == "modal-form-exit") {
		document.querySelector('html').style.overflowY = null;
		document.querySelector('.modal-form').style.transform = 'translateX(100%)';
		setTimeout("document.querySelector('.modal').style.opacity = '0'", 200);
		setTimeout("document.querySelector('.modal').style.display = 'none'", 600);
		setTimeout("document.querySelector('.contact-form__description-status').innerHTML = ''", 600);
	};
});
