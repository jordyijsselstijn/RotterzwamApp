<?php


if(isset($_SESSION['loggedIn'])){

    echo '

    <div id="control-panel" class="hidden">

    <div>Slider1</div>


    <table class="ui table" id="alerts">
      <tr>
        <th>Notificatie type</th>
        <th>Gemeten waarde</th>

      </tr>

    </table>

    <div id="control-panel-buttons"><div class="ui button green primary" id="adminSave" style="background-color: #c1d045;">Bewaren</div><div class="ui button" id="adminDiscard">Ongedaan maken</div></div>

    </div>

    ';


    echo'

    <div class="ui basic modal">

    <div>Weet u zeker dat u de wijzigingen niet wilt opslaan?</div>
    <br>
        <div class="ui button green primary" id="confirmYes" style="background-color: #c1d045;">Ja</div>
        <div class="ui button" id="confirmNo">Nee</div>




    </div>





    ';



}