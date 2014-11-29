$(document).ready(init);

function init()
{
    /*getTemperatureCall(getTemperatureCallback);
     getHumidityCall(getHumidityCallback);*/

    getBoundaryCall(getBoundaryCallback);

    /*Als de update button wordt ingedrukt voer de calls uit(id kan ook worden aangepast naar id van update button boundaries)*/
    $("#update").click(function(){
        updateBoundaryCall(updateBoundaryCallback);
    });
}

/*function getTemperatureCall(callback)
 {
 $.ajax(
 {
 dataType:"json",
 data: {"room": 2, "unit": "Temperature"},
 url:"api_pull_v2.php",
 success:callback
 }
 );
 }

 function getTemperatureCallback(data)
 {
 console.log(data);
 $.each(data, function (i, val)
 {
 $("#temp-module").append('<div class="results" id="result-temp">' +val.idTemperature+ ' - ' +val.temperature+ ' - ' +val.timeDate+ ' - ' +val.arduinoId_FK+'</div>');
 });

 }

 function getHumidityCall(callback)
 {
 $.ajax(
 {
 dataType:"json",
 data: {"room": 2, "unit": "Humidity"},
 url:"api_pull_v2.php",
 success:callback
 }
 );
 }

 function getHumidityCallback(data)
 {
 console.log(data);
 $.each(data, function (i, val)
 {
 $("#hum-module").append('<div class="results" id="result-hum">' +val.idHumidity+ ' - ' +val.Humidity+ ' - ' +val.timeDate+ ' - ' +val.arduinoId_FK+'</div>');
 });

 }*/

function getBoundaryCall(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"boundary": "boundary"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getBoundaryCallback(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $("#bound").append('<div class="result">' +val.min_temp+ ' - ' +val.max_temp+ ' - ' +val.min_hum+ ' - ' +val.max_hum+ ' - ' +val.min_co+ ' - ' +val.max_co+ '</div>');
    });

}

function updateBoundaryCall()
{
    /*Haalt de waardes van de boundaries uit de formtabels (naam van de id's kunnen worden aangepast naar de namen van de id's)*/
    var minTemp = $("#min-temp").val();
    var maxTemp = $("#max-temp").val();
    var minHum = $("#min-hum").val();
    var maxHum = $("#max-hum").val();
    var minCo = $("#min-co").val();
    var maxCo = $("#max-co").val();

    $.ajax(
        {
            dataType:"json",
            data: {"min_temp": minTemp, "max_temp": maxTemp, "min_hum": minHum, "max_hum": maxHum, "min_co": minCo, "max_co": maxCo},
            url:"api_pull_v2.php",
            success:updateBoundaryCallback()
        }
    );
}

function updateBoundaryCallback()
{
    console.log("update geslaagd");
}