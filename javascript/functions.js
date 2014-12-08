
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
        $('.temperature')
            .popup({
                title   : 'Gemeten op',
                content : val.timeDate
            })
        ;

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
        $('.humidity')
            .popup({
                title   : 'Gemeten op',
                content : val.timeDate
            })
        ;
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
        $('.temperature')
            .popup({
                title   : 'Gemeten op',
                content : val.timeDate
            })
        ;
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
        $('.humidity')
            .popup({
                title   : 'Gemeten op',
                content : val.timeDate
            })
        ;
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


function alertCallback (data){
    console.log(data);
    $("#alerts tbody").empty();
    $.each(data, function (i, val)
    {
        $("#alerts tbody").append("<tr id="+val.id+"><td >"+val.alertType+"</td>" +
            "<td>"+val.alertValue+"</td>"
        );

        $("#"+val.id).popup({

            title:'Datum',
            content:val.date

        });
    });
}



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


}


//   Haalt de waardes van de boundaries uit de formtabels (naam van de id's kunnen worden aangepast naar de namen van de id's)

function updateBoundaryCall(callback)
{
     var minTemp = $(".input1").val();
    var maxTemp = $(".input2").val();
    var minHum = $(".input3").val();
    var maxHum = $(".input4").val();

    $.ajax(
        {
            dataType:"json",
            data: {"min_temp": minTemp, "max_temp": maxTemp, "min_hum": minHum, "max_hum": maxHum},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}




function updateBoundaryCallback(data)
{
    console.log(data);
}



function getPowerStatus(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"powersurge":"true"},
            url:"../DEV/powersurge_api.php",
            success:callback
        }
    );
}


function powerStatusCallback(data){

    var powerStatusImage = $("#powerStatus");

    console.log(data.powerstatus);

    if(data.powerstatus == "true"){
        //show green image
        powerStatusImage.attr("src","images/Powerstatus_green.png");

    } else if (data.powerstatus == "false"){
        //show red image
        powerStatusImage.attr("src","images/Powerstatus_red.png");
    } else {
        //show white (unknown or not connected)
        powerStatusImage.attr("src","images/Powerstatus.png");
    }
}