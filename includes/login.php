<?php
require 'DB_class.php'; // maak connectie met de database

session_start();

if(isset($_POST['login'])) //als de verzendknop is ingedrukt
{
    $admin_name = $mysqli->real_escape_string($_POST['username']); //pak de gebruikersnaam
    $admin_pass = $mysqli->real_escape_string($_POST['password']); //pak het wachtwoord
    
	
//    $encrypt_name = md5($admin_name);   //md5 beveiligd
//    $encrypt_pass = md5($admin_pass);   //md5 beveiligd
    
    //selecteer de data  die gelijk is aan de gebruikersnaam en het wachtwoord

    
    $run=$mysqli->query("SELECT * FROM admin WHERE admin_name='$admin_name' AND admin_pass='$admin_pass'");
    
    

    if(mysqli_num_rows($run)>0) // als er gelijke data wordt gevonden
    {
        $_SESSION['loggedIn'] = true; // ingelogd

       echo "<script>window.open('index.php', '_self');</script>";
    }
    else //geen gelijke data wordt gevonden
    {
       $error= "*Uw gebruikersnaam of wachtwoord is onjuist!*"; //foutmelding
    }
}

?>


