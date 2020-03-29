$(document).ready(function () {
	$(".contact-form").submit(function () {
		var formID = $(this).attr('id');
		var formNm = $('#' + formID);
		var message = $(formNm).find(".contact-form__description");
		var formTitle = $(formNm).find(".contact-form__title");
		$.ajax({
			type: "POST",
			url: './php/mail-to-telegram.php',
			data: formNm.serialize(),
			success: function (data) {
				// Вывод сообщения об успешной отправке
				message.html(data);
				formTitle.css("display", "none");
				setTimeout(function () {
					formTitle.css("display", "block");
					message.html('');
					$('input').not(':input[type=submit], :input[type=hidden]').val('');
				}, 3000);
			},
			error: function (jqXHR, text, error) {
				// Вывод сообщения об ошибке отправки
				message.html(error);
				formTitle.css("display", "none");
				setTimeout(function () {
					formTitle.css("display", "block");
					message.html('');
					$('input').not(':input[type=submit], :input[type=hidden]').val('');
				}, 3000);
			}
		});
		return false;
	});
});