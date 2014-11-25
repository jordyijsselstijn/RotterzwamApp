<?php
include("login.php");
include("logout.php");
?>

<!DOCTYPE html>
<html>
<head lang="nl">
    <meta charset="UTF-8">
    <meta name="description" content="Rotterzwam"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
    <link rel="stylesheet" href="css/semantic.min.css"/>
    <link rel="stylesheet" href="css/style-desktop.css"/>
    <link rel="stylesheet" href="css/style-tablet.css"/>
    <link rel="stylesheet" href="css/style-mobile.css"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script src="javascript/jquery-1.11.1.min.js"></script>
    <script src="javascript/graphs.js" type="text/javascript"></script>
    <script src="javascript/semantic.min.js"></script>

    <script src="javascript/main.js"></script>


    <title> RotterZwam logs </title>
</head>
<body>
<header>

    <?php
    include("login_menu.php");
    include("logout_menu.php");
    ?>

    <div id="logo"><img src="images/logoheader7.png" alt="Rotterzwam Logo"></div>
    <div id="power">Stroom status: <img class="powerStatus" src="images/Powerstatus.png" alt="powerstatus"></div>
</header>


<div class="ui segment" id="Container">

    <div id="loader" class="ui active dimmer"><div class="ui large text loader">Gegevens ophalen...</div></div>

    <div id="content" class="hidden">

            <div id="app-menu" class="ui inverted menu main-menu">
                <a id="home" class="item">
                    <i  class="home icon"></i> Home
                </a>
                <a id="fr1" class="item">
                    <i  class="dashboard icon"></i> Fruitruimte 1
                </a>
                <a id="fr2" class="item">
                    <i  class="dashboard icon"></i> Fruitruimte 2
                </a>
            </div>

        <?php
        include("boundries.php");
        ?>

        <!--desktop grid-->
            <div id="grid">


                <div class="column temperature">

                   <div id="temp-module" class="temp module">
                       <div style="background-color: #444444;">Temperatuur</div>

                       <img id="temp-module-img" src="images/shroomtemp.png" alt="placeholder">
                       <div id="temp-capt" class="caption hidden"></div>
                       <div class="results" id="result-temp" style="background-color: #c1d045;"></div>

                   </div>
                </div>



                <div class="column humidity">

                    <div id="hum-module" class="hum module" >
                        <div style="background-color: #444444;">Luchtvochtigheid</div>

                            <img id="hum-module-img" src="images/shroomhum.png" alt="placeholder">
                            <div id="hum-capt" class="caption hidden"></div>
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

<footer>

</footer>

</body>
</html>
