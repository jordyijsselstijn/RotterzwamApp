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

// || isset($min_co) || isset($max_co)

if(isset($min_temp) || isset($max_temp) || isset($min_hum) || isset($max_hum)) {

    $result=$mysqli->query("UPDATE boundary SET min_temp = $min_temp, max_temp = $max_temp, min_hum = $min_hum,
                            max_hum = $max_hum, min_co = $min_co, max_co = $max_co WHERE boundary_id = 1");

}



if($boundary=="boundary"){

    if(isset($unit) || isset($room)) {

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

}


if(!isset($boundary)){

    if(isset($room) && empty($currentMonth) && !empty($unit)){

        $result=$mysqli->query("SELECT * FROM $unit WHERE arduinoId_FK=$room ORDER BY timeDate DESC LIMIT 1");	//selecteer alles uit de opgegeven eenheid tabel, waar de opgegeven room

        $arr= array();						//nieuwe array om waardes aan toe te voegen

        while($rows=$result->fetch_assoc()){	//een whileloop om door de resulaten van de query te loopen
            $arr[]=$rows;						//voegt alle resultaten toe aan de nieuw gemaakte array $arr.
        }

        $echoData = $arr;

    }else if(isset($room) && isset($currentMonth)){


        if($currentMonth == "this"){
            $result=$mysqli->query("SELECT * FROM $unit WHERE YEAR(timeDate) = YEAR(CURDATE()) AND MONTH(timeDate) = MONTH(CURDATE()) AND arduinoId_FK=$room"); // Selecteer alles van deze maand
        } else {
            $result=$mysqli->query("SELECT * FROM $unit WHERE YEAR(timeDate) = YEAR(CURDATE()) AND MONTH(timeDate) = $currentMonth AND arduinoId_FK=$room"); //Selecteer alles van de opgegeven maand
        }

        $arr= array();						//nieuwe array om waardes aan toe te voegen

        while($rows=$result->fetch_assoc()){	//een whileloop om door de resulaten van de query te loopen
            $arr[]=$rows;						//voegt alle resultaten toe aan de nieuw gemaakte array $arr.
        }

        $echoData = $arr;

    }

}



if($echoData != ""){
    echo json_encode($echoData);					//echo alle resultaten als een JSON geencodeerd format
} else {
    echo "Query did not work";
}










