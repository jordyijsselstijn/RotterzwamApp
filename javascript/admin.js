$(document).ready(function(){

    getAlerts(alertCallback);

    function alertCallback (data){

        console.log(data);
        $.each(data, function (i, val)
        {
            $("#alerts tbody").append("<tr><td>"+val.alertType+"</td><td>"+val.date+"</td></tr>");

        });



    }


});