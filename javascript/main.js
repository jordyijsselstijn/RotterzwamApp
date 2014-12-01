$(document).ready(function(){


    //powersurge detection on front end
    var tid = setTimeout(mycode, 5000);
    function mycode() {
        // do some stuff...
        getPowerStatus(powerStatusCallback);
        tid = setTimeout(mycode, 5000); // repeat myself
    }

    //loading screen, buttonlogic and data loader for initial startup.

    setTimeout(function(){
        setLoader(1000);
        loadDataRoom1();

    }, 1000) ;

    $("#admin").on('click', function(){

        $("#login-modal")
            .modal('setting', 'closable', false)
            .modal('show')
        ;
    });


    $("#logOut").on('click', function(){

       $("#loaderText").html('Uitloggen...');


    });

    var loginError= $("#error-modal p").html();

    if(loginError!=""){

        $("#error-modal")
            .modal('show')
    }

    //admin button logic.
    $("#admin_panel").on('click', function(){
        setButtonLogic(this, "admin");
        setLoader(500);
        getAlerts(alertCallback);
        getBoundaryCall(getBoundaryCallback);
    });


    //loading screen, buttonlogic and data loader for fruitroom 1.
        $("#fr1").on("click", function(){
            loadDataRoom1();
            setButtonLogic(this);
            setLoader(1000);
        });


    //loading screen, buttonlogic and data loader for fruitroom 2.
        $("#fr2").on("click", function(){

            loadDataRoom2();
            setButtonLogic(this);
            setLoader(1000);
        });


    //Admin savebutton so it calls the update function in the functions.js file
    $("#adminSave").on('click', function(){

        updateBoundaryCall(updateBoundaryCallback);


    });

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
	







