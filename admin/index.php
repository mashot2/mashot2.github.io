<?php
require_once 'core/init.php';
// Login Start------------------------------------------------------------------------------------------
if (Input::exist()) {
  if (Token::check(Input::get('token'))) {
    $validate = new Validate();
    $validation = $validate->check($_POST, array(
      'username' => array("required" => true),
      'password' => array("required" => true)
    ));
    if ($validation->passed()) {
      $user = new User();
      $remember = (Input::get('remember') === 'on') ? true : false;
      $login = $user->login(Input::get('username'), Input::get('password'), $remember);
      if ($login) {
        Redirect::to('index.php');
      } else {
        echo 'Sorry, logging in error.';
      }
    } else {
      foreach ($validation->errors() as $error) {
        echo $error, '<br>';
      }
    }
  }
}
// Login End------------------------------------------------------------------------------------------

$request = new Request();
$user = new User();
require_once 'header.php';
require_once 'navbar.php';
if ($user->isLoggedIn()) {
	?>
	<div class="container">
		<?php
		if (Session::exists('delete')) {
			echo '<h4 class="red-text"> ' . Session::get('delete')  . '</h4>';
			Session::delete('delete');
		}
    ?>
		<table>
			<thead>
			<tr>
				<th>Имя</th>
				<th>Email</th>
				<th>Телефон</th>
				<th>Удалить</th>
			</tr>
			</thead>

			<tbody>
      <?php

      $results = $request->showRequests()->results();
      foreach ($results as $result) {
        echo '
        <tr>
          <td>' . $result->name . '</td>
          <td>' . $result->email . '</td>
          <td>' . $result->telephone . '</td>
          <td><a class="waves-effect waves-light btn-small deleteBtn red" href="/admin/delete.php?id=' . $result->id . '">Удалить</a></td>
        </tr>
        ';
      }
      ?>

			</tbody>
		</table>

	</div>
	<?php
} else {
	?>
	<div class="container">
		<h4 class="">ВХОД В ПАНЕЛЬ УПРАВЛЕНИЯ</h4>
		<div class="row">
			<form class="col s12 m8 l6" action="" method="post">
				<div class="row">
					<div class="input-field col s12">
						<label for="username">Логин*</label>
						<input id="username" name="username" type="text" class="validate" value="<?= escape(Input::get('username')) ?>"
						       autocomplete="off">
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<label for="password">Пароль*</label>
						<input id="password" name="password" type="password" class="validate">
					</div>
				</div>
				<p>
					<label>
						<input type="checkbox" name="remember" />
						<span>запомнить меня</span>
					</label>
				</p>
				<input type="hidden" name="token" value="<?= Token::generate() ?>">
				<button class="btn waves-effect" type="submit">Войти</button>
			</form>
		</div>
	</div>
	<?php
}
?>
<?php
require_once 'footer.php';

?>


