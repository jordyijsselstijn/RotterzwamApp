$(document).ready(function(){




    $("#admin").on('click', function(){

        $("#login-bar").toggle("slide");


    });

    $("#admin_panel").on('click', function(){

        $(".item").removeClass("active");
        $(this).addClass("active");
        $("#grid").addClass("hidden");
        $("#control-panel").removeClass("hidden");

        setTimeout(function(){

            $("#panel-loader").removeClass("active");

        }, 500);




    });


    //timer for the loading screen

        setTimeout(function(){
            $("#loader").removeClass("active");
            $("#content").removeClass("hidden");
            loadDataRoom1();
        }, 1000) ;


    //loading screen when you change fruitroom.

        $("#fr1").on("click", function(){

            loadDataRoom1();
            setButtonLogic(this);
            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });


    //loading screen when you change fruitroom.

        $("#fr2").on("click", function(){
        
            loadDataRoom2();
            setButtonLogic(this);
            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });


    //Transitions for the modules, so that it shows the captions.

    $("#temp-module").hover( function(){
    
    if($(window).innerWidth()<768){
	    
	    
	    
    }else{
	    
		        $("#temp-module-img").stop(true, true).transition({
	
	            animation:'horizontal flip',
	            duration:'0.1s',
	            complete:function(){

	                $("#temp-capt").stop(true, true).removeClass("hidden");
	            }
	
	        });
	
	    }}, function() {
	
	        $("#temp-capt").stop(true, true).addClass("hidden");
	        $("#temp-module-img").stop(true, true).removeClass("hidden");
	
	    });
    	
    
	$("#hum-module").hover( function(){
	
	if($(window).innerWidth()<768){
	    
	    
	    
    }else{

	
	        $("#hum-module-img").stop(true, true).transition({
	
	            animation:'horizontal flip',
	            duration:'0.1s',
	            complete:function(){
	
	                $("#hum-capt").stop(true, true).removeClass("hidden");
	            }
	
	        });
	
	    }}, function() {
	
	        $("#hum-capt").stop(true, true).addClass("hidden");
	        $("#hum-module-img").stop(true, true).removeClass("hidden");
	
	    });
	    
	    });
	







