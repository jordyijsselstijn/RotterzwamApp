$(document).ready(function(){


    //timer for the loading screen

        setTimeout(function(){
            $("#loader").removeClass("active");
            $("#content").removeClass("hidden");
        }, 1000) ;


    //feature to change the color of the plug for showcase purposes

        $("#home").on("click", function(){



            if($(".powerStatus").attr("src")=="images/Powerstatus_red.png"){

                $(".powerStatus").attr("src", "images/Powerstatus.png")

                }else if($(".powerStatus").attr("src")=="images/Powerstatus.png"){

                    $(".powerStatus").attr("src", "images/Powerstatus_green.png")

                    }else{

                        $(".powerStatus").attr("src", "images/Powerstatus_red.png");

                    }


        });


    //loading screen when you change fruitroom.

        $("#fr1").on("click", function(){

            $("#loader").addClass("active");
            $("#content").addClass("hidden");
            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });


    //loading screen when you change fruitroom.

        $("#fr2").on("click", function(){

            $("#loader").addClass("active");
            $("#content").addClass("hidden");
            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });


    //Transitions for the modules, so that it shows the captions.

    $("#temp-module").hover( function(){

        $("#temp-module-img").stop(true, true).transition({

            animation:'horizontal flip',
            duration:'0.1s',
            complete:function(){

                $("#temp-capt").stop(true, true).removeClass("hidden");
            }

        });

    }, function() {

        $("#temp-capt").stop(true, true).addClass("hidden");
        $("#temp-module-img").stop(true, true).removeClass("hidden");

    });

    $("#hum-module").hover( function(){

        $("#hum-module-img").stop(true, true).transition({

            animation:'horizontal flip',
            duration:'0.1s',
            complete:function(){

                $("#hum-capt").stop(true, true).removeClass("hidden");
            }

        });

    }, function() {

        $("#hum-capt").stop(true, true).addClass("hidden");
        $("#hum-module-img").stop(true, true).removeClass("hidden");

    });

    $("#graph-module").hover( function(){

        $("#graph-module-img").stop(true, true).transition({

            animation:'horizontal flip',
            duration:'0.1s',
            complete:function(){

                $("#graph-capt").stop(true, true).removeClass("hidden");
            }

        });

    }, function() {

        $("#graph-capt").stop(true, true).addClass("hidden");
        $("#graph-module-img").stop(true, true).removeClass("hidden");

    });

});