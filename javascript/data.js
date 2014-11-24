$(document).ready(init);

function init()
{
    getTemperatureCall(getTemperatureCallback);
    getHumidityCall(getHumidityCallback);
}

function getTemperatureCall(callback)
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

}
