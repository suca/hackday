<?php
  if(isset($_POST['do'])){
    
    include_once("classes/class.base.php");

    $vC = new base();

    switch($_POST['do']){
      case 'guardarReclamo':
        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $tema = $_POST['tema'];
        $descripcion = $_POST['descripcion'];
        $lugar = $_POST['lugar'];

        $vQ = " INSERT INTO PROTESTA (
                  PRT_UID,
                  PRT_NOMBRE,
                  PRT_EMAIL,
                  PRT_TITULO,
                  PRT_DESCRIPCION,
                  PRT_MAP_DATA
                ) VALUES (
                  :PRT_UID,
                  :PRT_NOMBRE,
                  :PRT_EMAIL,
                  :PRT_TITULO,
                  :PRT_DESCRIPCION,
                  :PRT_MAP_DATA
                )";
        $vD = array(
          'PRT_UID' => uniqid('', true),
          'PRT_NOMBRE' => $nombre,
          'PRT_EMAIL' => $correo,
          'PRT_TITULO' => $tema,
          'PRT_DESCRIPCION' => $descripcion,
          'PRT_MAP_DATA' => $lugar
        );

        $vC->executeQuery($vQ, $vD);

        echo 'OK';
    }
  }