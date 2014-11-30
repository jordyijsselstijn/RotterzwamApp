$(document).ready(function(){







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