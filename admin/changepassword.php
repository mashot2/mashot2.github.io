<?php

require_once 'core/init.php';

$user = new User();

if (!$user->isLoggedIn()) {
	Redirect::to('index.php');
}

if (Input::exist()) {
	if (Token::check(Input::get('token'))) {
		$validate = new Validate();
		$validation = $validate->check($_POST, array(
			'password_current' => array(
				'required' => true,
				'min' => 6
			),
			'password_new' => array(
				'required' => true,
				'min' => 6
			),
			'password_new_again' => array(
				'required' => true,
				'min' => 6,
				'matches' => 'password_new'
			)
		));

		if ($validation->passed()) {
			if (Hash::make(Input::get('password_current'), $user->data()->salt) !== $user->data()->password) {
				echo 'Your Current Password Is Wrong!';
			} else {
				$salt = Hash::salt(16);
				try {
					$user->update(array(
						'password' => Hash::make(Input::get('password_new'), $salt),
						'salt' => $salt
					));
					Session::flash('home', 'Your password have been changed.');
					Redirect::to('index.php');
				} catch (Exception $e) {
					die($e->getMessage());
				}
			}
		} else {
			foreach ($validation->errors() as $error) {
				echo $error, '<br>';
			}
		}
	}
}

require_once 'header.php';
require_once 'navbar.php';
?>

<div class="container">

	<h4 class="">Изменить пароль</h4>
	<div class="row">
		<form class="col s12 m8 l6" action="" method="post">
			<div class="row">
				<div class="input-field col s12">
					<label for="password_current">Текуший пароль</label>
					<input id="password_current" name="password_current" type="password" class="validate" value=""
					       autocomplete="off">
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<label for="password_new">Новый пароль</label>
					<input id="password_new" name="password_new" type="password" class="validate" value=""
					       autocomplete="off">
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<label for="password_new_again">Повторите пароль</label>
					<input id="password_new_again" name="password_new_again" type="password" class="validate" value=""
					       autocomplete="off">
				</div>
			</div>
			<input type="hidden" name="token" value="<?= Token::generate() ?>">
			<button class="btn waves-effect" type="submit">Изменить</button>
		</form>
	</div>
</div>

<?php
require_once 'footer.php';