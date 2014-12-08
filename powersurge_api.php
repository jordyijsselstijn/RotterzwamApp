<?php


include_once "includes/DB_class.php";					//maakt gebruik van de DB_class.php file

header("content-type:application/json");	//Geeft aan bij de request dat het om een json applicatie gaat

$powerSurgeRequest = $_GET["powersurge"];

if(isset($_GET["powersurge"])){

    $result=$mysqli->query("SELECT `arduinoId`,`name`,`location`,`powerstatus` FROM `Arduino` WHERE `powerstatus` = 0");

    $arr = array();                        //nieuwe array om waardes aan toe te voegen

    while ($rows = $result->fetch_assoc()) {    //een whileloop om door de resulaten van de query te loopen
        $arr[] = $rows;                        //voegt alle resultaten toe aan de nieuw gemaakte array $arr.
    }

    if(count($arr) == 0) {
        $echoData = array("powerstatus" => "true");

    } else {
        $echoData = array("powerstatus" => "false");
    }

}

if($echoData != ""){
    echo json_encode($echoData);					//echo alle resultaten als een JSON geencodeerd format
} else {
    echo "Query did not work";
}
