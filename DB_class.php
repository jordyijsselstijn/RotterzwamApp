<?php

$db="Rotterzwam";				//databasenaam
$db_user="rotterzwam";			//username van database
$db_server="localhost";			//servernaam
$db_pass="blokhut";				//server password

$mysqli = new mysqli($db_server, $db_user, $db_pass, $db);		//connectie string



if ($mysqli->connect_errno) {
    printf("DB connect failed: %s\n", $mysqli->connect_error);	//print een error wanneer de connectie niet kan worden gemaakt.
    exit;	
}
