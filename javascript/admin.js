$(document).ready(function(){

    getAlerts(alertCallback);

    function alertCallback (data){

        console.log(data);
        $.each(data, function (i, val)
        {
            $("#alerts tbody").append("<tr><td >"+val.alertType+"</td>" +
                                            "<td>"+val.alertValue+"</td>"+
                                            "<td>"+val.date+"</td></tr>");

        });



    }
    $("#adminDiscard").on('click', function(){


        var discard=confirm("Weet je het zeker?");

        if(discard==true){

            loadDataRoom1();
            setButtonLogic(this);
            setLoader(1000);

        }else if(discard==false){



        }


    });


});