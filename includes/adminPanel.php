<?php


if(isset($_SESSION['loggedIn'])){

    echo '

    <div id="control-panel" class="hidden">

    <div class="ui segment valueSlider">Temperatuur

        <form action="" id="sliderForm">
            <div  id="rangeSliderTemp"></div>
            <div id="valueTemp">
                <label for="min">Minimaal</label>
                <input type="text" class="input1" id="min-temp" name="one"/>

                <label for="max">Maximaal</label>
                <input type="text" class="input2" id="max-temp" name="two"/>
            </div>
        </form>

    </div>

    <div class="ui segment valueSlider">Luchtvochtigheid

            <form action="" id="sliderHum">
            <div  id="rangeSliderHum"></div>
            <div id="valueHum">
                <label for="min">Minimaal</label>
                <input type="text" class="input3" id="min-hum" name="three"/>

                <label for="max">Maximaal</label>
                <input type="text" class="input4" id="max-hum" name="four"/>
            </div>
        </form>




    </div>


    <table class="ui table" id="alerts">
      <tr>
        <th>Notificatie type</th>
        <th>Gemeten waarde</th>

      </tr>

    </table>

    <div id="control-panel-buttons"><div class="ui button green primary" id="adminSave" style="background-color: #c1d045;">Bewaren</div><div class="ui button" id="adminDiscard">Ongedaan maken</div></div>

    </div>

    <script src="nouislider/js/jquery.nouislider.all.js" type="text/javascript"></script>
    <script src="nouislider/js/jquery.liblink.js" type="text/javascript"></script>
    <script src="nouislider/js/slider.js" type="text/javascript"></script>

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