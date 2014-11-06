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
        $(".content").append('<div class="data"><p>' +val.idTemperature+ ' - ' +val.temperature+ ' - ' +val.timeDate+ ' - ' +val.arduinoId_FK+'</p></div>');
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
        $(".content").append('<div class="data"><p>' +val.idHumidity+ ' - ' +val.Humidity+ ' - ' +val.timeDate+ ' - ' +val.arduinoId_FK+'</p></div>');
    });

}
