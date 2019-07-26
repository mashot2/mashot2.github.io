<?php
$user = new User();
if ($user->isLoggedIn()) {
	?>
	<nav>
		<div class="nav-wrapper blue">
			<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			<a href="#" style="padding-left: 5px" class="brand-logo">LinguaSky</a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li><a href="/admin/index.php">Запросы</a></li>
				<li><a href="/admin/changepassword.php">Изменить Пароль</a></li>
				<li><a href="/admin/logout.php">Выход</a></li>
			</ul>
		</div>
	</nav>

	<div id="slide-out" class="sidenav white">
		<h4 class="center">
			<a href="#" style="padding-left: 5px" class="black-text">LinguaSky</a>
		</h4>
		<ul>
			<li><a href="/admin/index.php">Запросы</a></li>
			<li><a href="/admin/changepassword.php">Изменить Пароль</a></li>
			<li><a href="/admin/logout.php">Выход</a></li>
		</ul>
	</div>
	<?php
} else {
	?>
	<nav>
		<div class="nav-wrapper blue">
			<a href="#" style="padding-left: 5px" class="brand-logo">LinguaSky</a>
		</div>
	</nav>
	<div id="slide-out" class="sidenav blue lighten-2">
		<h4 class="center">
			<a href="#" style="padding-left: 5px" class="black-text">LinguaSky</a>
		</h4>
	</div>
	<?php
}
?>
