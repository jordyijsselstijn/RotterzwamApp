$(document).ready(function(){


    //resize logic for data dat should not be shown


    $(window).on('resize', function(){

        if(window.innerWidth<768){

            $(".values").addClass("hidden");


        }else if(window.innerWidth>768){

            $(".values").removeClass("hidden");

        }
    });





});

