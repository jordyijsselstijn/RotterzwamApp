<?php

include 'DB_class.php';


header("content-type:application/json");

$result=$mysqli->query("SELECT * FROM alerts ORDER BY 'date'");


$arr = array();

while($rows=$result->fetch_assoc()){	//een whileloop om door de resulaten van de query te loopen
    $arr[]=$rows;						//voegt alle resultaten toe aan de nieuw gemaakte array $arr.
}


$echoData =$arr;

if($echoData != ""){

    echo json_encode($echoData);					//echo alle resultaten als een JSON geencodeerd format
} else {
    echo "Query did not work";
}