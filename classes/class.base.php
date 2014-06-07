<?php
  class base{

    private $link;
    
    public function __construct(){
      $link = 
    }

    private createLink(){
      $dsn = 'mysql:dbname=' . $this->dbName . ';host=' . $this->dbHost;
      try{
        $this->link = new PDO($dsn, $this->dbUser, $this->dbPassword);
      }catch(PDOException $e){
        error_log('Connection failed: ' . $e->getMessage());
      }
    }

    public function executeQuery($sql, $data = array()){
      $sth = $this->link->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
      $sth->execute($data);
      return $sth->fetchAll();
    }

  }
  