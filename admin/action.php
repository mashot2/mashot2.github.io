<?php

require_once 'core/init.php';

if (Input::exist()) {
  $validate = new Validate();
  $validation = $validate->check($_POST, array(
    'name' => array(
      'required' => true,
      'min' => 1,
      'max' => 60
    ),
    'email' => array(
      'required' => true,
      'min' => 1,
      'max' => 60
    ),
    'telephone' => array(
      'required' => true,
      'min' => 1,
      'max' => 60
    )
  ));
  if ($validate->passed()) {
    $request = new Request();
    $request->create(array(
      'name' => Input::get('name'),
      'email' => Input::get('email'),
      'telephone' => Input::get('telephone'),
    ));
    Session::flash('success', '<div style="text-align: center"><h1>Спасибо, ваша заявка принята!</h1><h2>Мы свяжемся с вами в ближайшее время</h2> <a href="/">Назад в Главное</a></div>');
    Redirect::to('success.php');
  } else {
    Session::flash('success', '<div style="text-align: center"><h1>Произошла ошибка.</h1><h2>пожалуйста попробуйте немного позже</h2> <a href="/">Назад в Главное</a></div>');
    Redirect::to('success.php');
  }
} else {
  Redirect::to('/');
}