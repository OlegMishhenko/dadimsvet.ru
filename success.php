<? if ($_GET['status'] == 'success') { ?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="shortcut icon" href="img/fav.ico">
	<title>Заказ принят</title>
	<link rel="stylesheet" href="css/style.css">
	<meta http-equiv="Refresh" content="5; URL=/">
	<!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
            m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(54368968, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/54368968" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
</head>
<body>
	<header class="thank-you-page">
		<div class="container">
			<div class="thank-you-page-flex">
				<div class="navbar">
					<a class="navbar-logo" href="/">
						<div class="navbar-logo-img">
							<img src="img/logo.svg">
						</div>
						<div class="navbar-logo-text">
							<span class="navbar-logo-text-1">Группа компаний</span>
							<span class="navbar-logo-text-2">технологии</span>
							<span class="navbar-logo-text-3">энергоснабжения</span>
						</div>
					</a>
					<div class="navbar-contacts">
						<div class="navbar-contacts-info">
							<!-- <a class="navbar-contacts-info-phone" href="tel:+78002225965">8 (800) 222-59-65</a> -->
							<p class="navbar-contacts-info-p">Напишите нам:</p>
							<a class="navbar-contacts-info-mail" href="mailto:info@dadimsvet.ru">info@dadimsvet.ru</a>
						</div>
					</div>
				</div>
				<!-- /.navbar -->
				<div class="thank-you-page-text">
					<h1 class="thank-you-page-text-title">Заявка принята!</h1>
					<h2 class="thank-you-page-text-title-2">ожидайте звонка специалиста</h2>
					<p class="thank-you-page-text-descriptor">
						Мы работаем с Пн по Пт: с 6:00 до 16:00 (по Мск). Заявки
						оставленные в нерабочее время будут обработаны на следующий
						рабочий день
					</p>
					<a class="thank-you-page-text-button" href="/">Вернуться на главную</a>
				</div>
				<!-- /.thank-you-page-text -->
				<div class="thank-you-page-null"></div>
				<!-- /.thank-you-page-null -->
			</div>
			<!-- /.thank-you-page-flex -->
		</div>
		<!-- /.contain -->
	</header>
</body>
</html>

<? } else {
    header ("Location: /"); // главная страница вашего лендинга
} ?>