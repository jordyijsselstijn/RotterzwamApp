$(document).ready(function(){


        setTimeout(function(){
            $("#loader").removeClass("active");
            $("#content").removeClass("hidden");
        }, 1000) ;



        $("#home").on("click", function(){



            if($(".powerStatus").attr("src")=="images/Powerstatus_red.png"){

                $(".powerStatus").attr("src", "images/Powerstatus.png")

                }else if($(".powerStatus").attr("src")=="images/Powerstatus.png"){

                    $(".powerStatus").attr("src", "images/Powerstatus_green.png")

                    }else{

                        $(".powerStatus").attr("src", "images/Powerstatus_red.png");

                    }


        });



        $("#fr1").on("click", function(){

            $("#loader").addClass("active");
            $("#content").addClass("hidden");
            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });




        $("#fr2").on("click", function(){

            $("#loader").addClass("active");
            $("#content").addClass("hidden");
            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });


    $("#temp-module").hover( function(){

        $("#temp-module-img").transition({

            animation:'horizontal flip',
            duration:'0.2s',
            complete:function(){

                $("#temp-capt").removeClass("hidden");
            }

        });

    }, function() {

        $("#temp-capt").addClass("hidden");
        $("#temp-module-img").removeClass("hidden");

    });

    $("#hum-module").hover( function(){

        $("#hum-module-img").transition({

            animation:'horizontal flip',
            duration:'0.2s',
            complete:function(){

                $("#hum-capt").removeClass("hidden");
            }

        });

    }, function() {

        $("#hum-capt").addClass("hidden");
        $("#hum-module-img").removeClass("hidden");

    });

    $("#graph-module").hover( function(){

        $("#graph-module-img").transition({

            animation:'horizontal flip',
            duration:'0.2s',
            complete:function(){

                $("#graph-capt").removeClass("hidden");
            }

        });

    }, function() {

        $("#graph-capt").addClass("hidden");
        $("#graph-module-img").removeClass("hidden");

    });

});