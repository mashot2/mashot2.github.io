<?php

class Request
{
  private $_db,
    $_data,
    $_lastId;

  public function __construct($contact = null)
  {
    $this->_db = DB::getInstance();
  }

  public function data()
  {
    return $this->_data;
  }

  public function create($fields = array())
  {
    try {
      $this->_db->insert('requests', $fields);
//      $this->_lastId = $this->_db->lastId();
    } catch (Exception $e) {
      die($e->getMessage());
    }
  }

  public function delete($contact_id)
  {
    $this->_db->delete('numbers', array('contact_id', '=', $contact_id));
    $this->_db->delete('contacts', array('id', '=', $contact_id));
  }

  public function showRequests()
  {
    $result = $this->_db->get('requests', array('id', '>', 0));
    return $result;
  }

  public function getAll($u)
  {

  }

  public function lastId()
  {
    return $this->_db->lastId();
  }

  public function exists()
  {
    return (!empty($this->_data)) ? true : false;
  }
}
