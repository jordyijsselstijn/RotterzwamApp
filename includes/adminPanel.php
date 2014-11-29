<?php


if(isset($_SESSION['loggedIn'])){

    echo '

    <div id="control-panel" class="hidden">

    <div>Slider1</div>

    <div style="overflow: scroll">
    <table class="ui table" id="alerts">
      <tr>
        <th>Notificatie type</th>
        <th>Gemeten waarde</th>
        <th>Datum</th>

      </tr>

    </table>
    </div>

    <div id="control-panel-buttons"><div class="ui button primary" id="adminSave">Bewaren</div><div class="ui button" id="adminDiscard">Ongedaan maken</div></div>

    </div>

    ';

}else{

    echo 'you will have to log in to see this part!';


}