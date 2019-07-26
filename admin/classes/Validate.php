<?php

class Validate
{
	private $_passed,
		$_errors = array(),
		$_db = null;

	public function __construct()
	{
		$this->_db = DB::getInstance();
	}

	public function check($source, $items = array())
	{
		foreach ($items as $item => $rules) {
			foreach ($rules as $rule => $rule_value) {
				$value = trim($source[$item]);
				$item = escape($item);
				if ($rule === 'required' && empty($value)) {
					$this->_addError("{$item} is required!<br>");
				} else if (!empty($value)) {
					switch ($rule) {
						case 'min':
							if (strlen($value) < $rule_value) {
								$this->_addError("{$item} must be a minimum of {$rule_value} characters");
							}
							break;
						case 'max':
							if (strlen($value) > $rule_value) {
								$this->_addError("{$item} must be a maximum of {$rule_value} characters");
							}
							break;
						case 'matches':
							if ($value != $source[$rule_value]) {
								$this->_addError("{$rule_value} must match {$item}");
							}
							break;
						case 'unique':
							$check = $this->_db->get($rule_value, array($item, '=', $value));
							if ($check->count()) {
								$this->_addError("{$item} already exists");
							}
							break;
					}
				}
			}
		}

		if (empty($this->_errors)) {
			$this->_passed = true;
		}
		return $this;
	}

	private function _addError($error)
	{
		$this->_errors[] = $error;
	}

	public function errors()
	{
		return $this->_errors;
	}

	public function passed()
	{
		return $this->_passed;
	}

}