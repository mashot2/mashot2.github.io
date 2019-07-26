<?php
require_once 'core/init.php';

if (Session::exists('success')) {
  echo Session::get('success');
  Session::delete('success');
} else {
  Redirect::to('/');
}