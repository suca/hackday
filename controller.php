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
                  PRT_MAP_DATA,
                  PRT_RANKING
                ) VALUES (
                  :PRT_UID,
                  :PRT_NOMBRE,
                  :PRT_EMAIL,
                  :PRT_TITULO,
                  :PRT_DESCRIPCION,
                  :PRT_MAP_DATA,
                  0
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

        break;

      case 'getList':
        $vQ = " SELECT
                  PRT_UID,
                  PRT_TITULO,
                  PRT_DESCRIPCION,
                  PRT_MAP_DATA,
                  PRT_RANKING
                FROM PROTESTA";
        $vR = $vC->executeQuery($vQ);
        echo json_encode($vR);
        break;

      case 'saveVote':

        if($_POST['action'] == 'plus')
          $vQ = " UPDATE PROTESTA
                  SET PRT_RANKING = PRT_RANKING + 1
                  WHERE PRT_UID = :PRT_UID";
        else if($_POST['action'] == 'minus')
          $vQ = " UPDATE PROTESTA
                  SET PRT_RANKING = PRT_RANKING - 1
                  WHERE PRT_UID = :PRT_UID";
        if(isset($vQ)) $vR = $vC->executeQuery($vQ, array("PRT_UID" => $_POST['uid']));

        $vQ = " SELECT PRT_RANKING
                FROM PROTESTA
                WHERE PRT_UID = :PRT_UID";
        $vR = $vC->executeQuery($vQ, array("PRT_UID" => $_POST['uid']));
        
        echo $vR[0]['PRT_RANKING'];
        break;
    }
  }