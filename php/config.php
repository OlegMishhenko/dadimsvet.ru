<?
	// *** Настройка обязательности полей, в случае если они присутствуют в вашей форме

	// Имя
	const POWISREQUIRED = true;
	const MSGSPOWERROR = "Введите требуемую мощность в кВт";

	// Телефон
	const TELISREQUIRED = true;
	const MSGSTELERROR = "Введите контактный номер телефона";

	// Email
	const EMAILISREQUIRED = false;
	const MSGSEMAILERROR = "⚠ Поле обязательно для заполнения";
	const MSGSEMAILINCORRECT = "⚠ Некорректный почтовый адрес";

	// Текстовое поле
	const TEXTISREQUIRED = false;
	const MSGSTEXTERROR = "⚠ Поле обязательно для заполнения";

	// Файл
	const FILEISREQUIRED = false;
	const MSGSFILEERROR = "⚠ Поле обязательно для заполнения";

	// Соглашение
	const AGGREMENTISREQUIRED = false;
	const MSGSAGGREMENTERROR = "⚠ Поле обязательно для заполнения"; 

	// Сообщение об успешной отправке
	const MSGSSUCCESS = "Сообщение успешно отправлено";

	// *** SMTP *** //

		require_once($_SERVER['DOCUMENT_ROOT'] . '/phpmailer/smtp.php');
		const HOST = 'mail.hosting.reg.ru:';
		const LOGIN = 'info@dadimsvet.ru';
		const PASS = '12345AaAaW';
		const PORT = '465';

	// *** /SMTP *** //

  // Почта с которой будет приходить письмо
	const SENDER = 'info@dadimsvet.ru';
	
	// Почта на которую будет приходить письмо
	const CATCHER = '89529232173@mail.ru';
	
	// Тема письма
	const SUBJECT = 'Заявка с сайта';
	
	// Кодировка
  const CHARSET = 'UTF-8';
