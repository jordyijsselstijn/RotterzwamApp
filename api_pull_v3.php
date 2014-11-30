<?php
/*
HOW TO USE

Data van een maand terug krijgen:
http://rotterzwam.nickderonde.nl/api_pull_v2.php?room=2&month=this&unit=Temperature

month = this of 1,2,3,4,5,6,7,8,9,10,11,12
unit = Temperature of Humidity
room = 1 of 2 enz.

Deze is ook nog mogelijk:
http://rotterzwam.nickderonde.nl/api_pull_v2.php?room=2&unit=Temperature
dan krijg je de nieuwste row terug van de room en temp
*/


include_once "includes/DB_class.php";					//maakt gebruik van de DB_class.php file

header("content-type:application/json");	//Geeft aan bij de request dat het om een json applicatie gaat

$room = $_GET["room"];
$currentMonth = $_GET["month"];
$unit = $_GET["unit"];
$echoData = "";

$boundary = $_GET["boundary"];
$min_temp = $_GET["min_temp"];
$max_temp = $_GET["max_temp"];
$min_hum = $_GET["min_hum"];
$max_hum = $_GET["max_hum"];
$min_co = $_GET["min_co"];
$max_co = $_GET["max_co"];


if(isset($boundary) || isset($unit) || isset($room)) {

    if($unit=="Temperature"){


        $result=$mysqli->query("SELECT * FROM boundary INNER JOIN Temperature ON boundary.boundary_id=Temperature.arduinoId_FK WHERE boundary_id=$room AND YEAR(timeDate) = YEAR(CURDATE()) AND MONTH(timeDate) = MONTH(CURDATE())");    //selecteer alles uit de opgegeven eenheid tabel

        $arr = array();                        //nieuwe array om waardes aan toe te voegen

        while ($rows = $result->fetch_assoc()) {    //een whileloop om door de resulaten van de query te loopen
            $arr[] = $rows;                        //voegt alle resultaten toe aan de nieuw gemaakte array $arr.
        }

        $echoData = $arr;

    }else if($unit=="Humidity"){

        $result=$mysqli->query("SELECT * FROM boundary INNER JOIN Humidity ON boundary.boundary_id=Humidity.arduinoId_FK WHERE boundary_id=$room AND YEAR(timeDate) = YEAR(CURDATE()) AND MONTH(timeDate) = MONTH(CURDATE())");    //selecteer alles uit de opgegeven eenheid tabel

        $arr = array();                        //nieuwe array om waardes aan toe te voegen

        while ($rows = $result->fetch_assoc()) {    //een whileloop om door de resulaten van de query te loopen
            $arr[] = $rows;                        //voegt alle resultaten toe aan de nieuw gemaakte array $arr.
        }

        $echoData = $arr;

    }
}



if($echoData != ""){
    echo json_encode($echoData);					//echo alle resultaten als een JSON geencodeerd format
} else {
    echo "Query did not work";
}










