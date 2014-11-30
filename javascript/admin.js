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


        $('.basic.modal')
            .modal('show')
        ;

        $("#confirmNo").on('click', function(){

            $('.basic.modal')
                .modal('hide')
            ;
        });
        $("#confirmYes").on('click', function(){
            $('.basic.modal')
                .modal('hide')
            ;
            loadDataRoom1();
            setButtonLogic("#fr1");
            setLoader(1000);

        });


    });


});