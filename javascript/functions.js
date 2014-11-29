
function getTemperatureCallR1(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":1, "unit": "Temperature"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getTemperatureCallbackR1(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $("#result-temp").html(val.temperature+' °c');
        $("#temp-capt").html('Gemeten om: '  +val.timeDate);
    });
}





function getHumidityCallR1(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":1, "unit": "Humidity"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getHumidityCallbackR1(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $("#result-hum").html(val.humidity+' %');
        $("#hum-capt").html('Gemeten om: '  +val.timeDate);
    });

}





function getTemperatureCallR2(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":2, "unit": "Temperature"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getTemperatureCallbackR2(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $("#result-temp").html(val.temperature+' °c');
        $("#temp-capt").html('Gemeten om: '  +val.timeDate);
    });

}

function getHumidityCallR2(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":2, "unit": "Humidity"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getHumidityCallbackR2(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $("#result-hum").html(val.humidity+' %');
        $("#hum-capt").html('Gemeten om: '  +val.timeDate);
    });

}

function loadDataRoom1(){
    getTemperatureCallR1(getTemperatureCallbackR1);
    getHumidityCallR1(getHumidityCallbackR1);
}

function loadDataRoom2(){
    getTemperatureCallR2(getTemperatureCallbackR2);
    getHumidityCallR2(getHumidityCallbackR2);
}

function setButtonLogic(element, panel){


    if(panel=="admin"){

        $(".item").removeClass("active");
        $("#loader").addClass("active");
        $("#content").addClass("hidden");
        $(element).addClass('active');
        $("#control-panel").removeClass("hidden");
        $("#grid").addClass("hidden");

    }else{
        $(".item").removeClass("active");
        $("#loader").addClass("active");
        $("#content").addClass("hidden");
        $(element).addClass('active');
        $("#control-panel").addClass("hidden");
        $("#grid").removeClass("hidden");
    }
}

function setLoader(timeOut){


        setTimeout(function(){
            $("#loader").removeClass("active");
            $("#content").removeClass("hidden");
        }, timeOut) ;

}

function getAlerts(callback){

    $.ajax({
        dataType:"json",
        url:"includes/alertPull.php",
        success:callback
    })

}

getBoundaryCall(getBoundaryCallback);

/*Als de update button wordt ingedrukt voer de calls uit(id kan ook worden aangepast naar id van update button boundaries)*/
$("#update").click(function(){
    updateBoundaryCall(updateBoundaryCallback);
});



function getBoundaryCall()
{
    $.ajax(
        {
            dataType:"json",
            data: {"boundary": "boundary"},
            url:"api_pull_v2.php",
            success:getBoundaryCallback()
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
            success:updateBoundaryCallback(data)
        }
    );
}


function updateBoundaryCallback(data)
{
    console.log(data);
}
