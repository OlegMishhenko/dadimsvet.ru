<?php
    // *** Настройка обязательности полей, в случае если они присутствуют в вашей форме
 
    // Имя
    const NAMEISREQUIRED = true;
    const MSGSNAMEERROR = "Поле обязательно для заполнения";
 
    // Телефон
    const TELISREQUIRED = false;
    const MSGSTELERROR = "Поле обязательно для заполнения";
 
    // Email
    const EMAILISREQUIRED = false;
    const MSGSEMAILERROR = "Поле обязательно для заполнения";
    const MSGSEMAILINCORRECT = "Некорректный почтовый адрес";
 
    // Текстовое поле
    const TEXTISREQUIRED = false;
    const MSGSTEXTERROR = "Поле обязательно для заполнения";
 
    // Файл
    const FILEISREQUIRED = false;
    const MSGSFILEERROR = "Поле обязательно для заполнения";
 
    // Соглашение
    const AGGREMENTISREQUIRED = false;
    const MSGSAGGREMENTERROR = "Поле обязательно для заполнения"; 
 
    // Сообщение об успешной отправке
    const MSGSSUCCESS = "Сообщение успешно отправлено";
 
    // *** SMTP *** //
 
        require_once($_SERVER['DOCUMENT_ROOT'] . 'php/smtp.php');
        const HOST = 'mail.hosting.reg.ru:';
        const LOGIN = 'info@dadimsvet.ru';
        const PASS = '12345AaAaW';
        const PORT = '995';
 
    // *** /SMTP *** //
 
        // Почта с которой будет приходить письмо
    const SENDER = 'mail.dadimsvet.ru';
     
    // Почта на которую будет приходить письмо
    const CATCHER = 'mail.dadimsvet.ru';
     
    // Тема письма
    const SUBJECT = 'Заявка с сайта';
     
    // Кодировка
	const CHARSET = 'UTF-8';
?>