$(document).ready(function(){

    //loading screen, buttonlogic and data loader for initial startup.

    setTimeout(function(){
        setLoader(1000);
        loadDataRoom1();
        getBoundaryCall();
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


    $("#admin_panel").on('click', function(){

        setButtonLogic(this, "admin");
        setLoader(500);
        getAlerts(alertCallback);
        getBoundaryCall(getBoundaryCallback());

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


    //Transitions for the modules, so that it shows the captions.
    $("#adminSave").on('click', function(){

        updateBoundaryCall();
        console.log("werkt!");

    });

});
	







