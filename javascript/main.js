$(document).ready(function(){

           setTimeout(function(){
               $("#loader").removeClass("active");
               $("#content").removeClass("hidden");
           }, 1000) ;

        $("#home").on("click", function(){



        });

        $("#fr1").on("click", function(){
            $("#loader").addClass("active");

                setTimeout(function(){
                    $("#loader").removeClass("active");
                    $("#content").removeClass("hidden");
                }, 1000) ;
        });

        $("#fr2").on("click", function(){
            $("#loader").addClass("active");

            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });





});