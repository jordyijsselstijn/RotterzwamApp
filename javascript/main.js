$(document).ready(function(){

    //loading screen, buttonlogic and data loader for initial startup.

    setTimeout(function(){
        setLoader(1000);
        loadDataRoom1();
    }, 1000) ;

    //animations for the login bar
    $("#admin").on('click', function(){
        $("#login-bar").toggle("slide");
    });


    $("#admin_panel").on('click', function(){

        setButtonLogic(this, "admin");
        setLoader(1000);

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
	







