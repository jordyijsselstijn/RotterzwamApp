<?php


if(isset($_SESSION['loggedIn'])){

    echo '

    <div id="control-panel" class="hidden">
    <div id="panel-loader" class="ui active dimmer"><div class="ui large text loader">Initialiseren...</div></div>
    <div>Slider1</div>



    <div id="control-panel-buttons"><div class="ui button primary">Save</div><div class="ui button">Discard</div></div>

    </div>

    ';

}