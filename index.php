<?php
include("includes/login.php");
include("includes/logout.php");

?>

<!DOCTYPE html>
<html>
<head lang="nl">
    <meta charset="UTF-8">
    <meta name="description" content="Rotterzwam"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">

    <link rel="stylesheet" href="css/style-desktop.css"/>
    <link rel="stylesheet" href="css/semantic.min.css"/>
    <link rel="stylesheet" href="css/style-tablet.css"/>
    <link rel="stylesheet" href="css/style-mobile.css"/>
    <link rel="stylesheet" href="css/admin-panel-styling.css"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="nouislider/style/jquery.nouislider.css" type="text/css"/>
    <link rel="stylesheet" href="nouislider/style/jquery.nouislider.pips.css" type="text/css"/>

	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script src="javascript/jquery-1.11.1.min.js"></script>
    <script src="javascript/functions.js"></script>
    <script src="javascript/graphs.js" type="text/javascript"></script>
    <script src="javascript/semantic.min.js"></script>
    <script src="javascript/main.js"></script>


    <title> RotterZwam logs </title>
</head>
<body>
<header>

    <div class="top-bar">

        <?php
        if(isset($_SESSION['loggedIn'])){
            echo'    <form action="" method="POST" id="logOut">
                        <button type="submit" name="logout">Logout  <i class="sign out inverted icon"></i></button>
                        </form>';
        }else{
            echo'<img src="images/key-256.png" alt="admin-key" id="admin" width="25px">';
        }
        ?>


    </div>
    <div id="logo"><img src="images/logoheader7.png" alt="Rotterzwam Logo"></div>
    <div id="power">Stroom status: <img class="powerStatus" src="images/Powerstatus.png" alt="powerstatus"></div>
</header>




<div class="ui small modal" id="login-modal">
    <i class="close icon"></i>
    <form class="ui form segment" action="" method="POST">
        <div class="ui field">
        <label for="username">Username</label>
        <div class="ui input">
            <input type="text" placeholder="Username" id="username" name="username" required="required">
        </div>
        </div>

        <div class="ui field">
        <label for="password">Password</label>
        <div class="ui input">
            <input type="Password" placeholder="Password" id="password" name="password" required="required">
        </div>
        </div>
        <button class="ui button green primary" type="submit" name="login" style="background-color: #c1d045;">Login</button>
    </form>
</div>
<div id="error-modal" class="ui small modal"><i class="close icon"></i><p><?php echo $error; ?></p></div>



<div class="ui segment" id="Container">

    <div id="loader" class="ui inverted active dimmer"><div id="loaderText" class="ui large text loader">Laden...</div></div>



    <div id="content" class="hidden">

            <div id="app-menu" class="ui inverted menu main-menu">
                <a id="home" class="item">
                    <i  class="home icon"></i> Home
                </a>
                <a id="fr1" class="item fruitRoom">
                    <i  class="dashboard icon"></i> Fruitruimte 1
                </a>
                <a id="fr2" class="item fruitRoom">
                    <i  class="dashboard icon"></i> Fruitruimte 2
                </a>
                <?php
                    include ('includes/adminButton.php');
                ?>
            </div>
                <?php
                    include('includes/adminPanel.php');

                ?>



            <div id="grid">
                <div class="column temperature ui">
                   <div id="temp-module" class="temp module">
                       <div style="background-color: #444444;">Temperatuur</div>
                       <img id="temp-module-img" src="images/shroomtemp.png" alt="placeholder">
                       <div class="results" id="result-temp" style="background-color: #c1d045;"></div>
                   </div>
                </div>

                <div class="column humidity ui">
                    <div id="hum-module" class="hum module" >
                        <div style="background-color: #444444;">Luchtvochtigheid</div>
                            <img id="hum-module-img" src="images/shroomhum.png" alt="placeholder">
                            <div class="results" id="result-hum" style="background-color: #c1d045;"></div>
                    </div>
                </div>

                <div class="column graphic">
							<div class="chart-module" style="background-color: #444444;">
							<div style="background-color: #444444;">Overzicht Temperatuur</div>
							<div class="chart"><div  id="chart_temp" style="background-color: #444444;"></div></div>
							<div class="chart-footer" style="background-color: #c1d045;"></div>
							
							</div>
                </div>
            </div>
    </div>
</div>

</body>
</html>
