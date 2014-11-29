$(document).ready(function(){




    $("#admin").on('click', function(){

        $("#login-bar").toggle("slide");


    });

    $("#admin_panel").on("click", function(){


        $("#grid").toggleClass("hidden");
        $("#control-panel").toggleClass("hidden");
        setTimeout(function(){

            $("#panel-loader").removeClass("active");


        },500);

    });




    //timer for the loading screen

        setTimeout(function(){
            $("#loader").removeClass("active");
            $("#content").removeClass("hidden");

            getTemperatureCallR1(getTemperatureCallbackR1);
			getHumidityCallR1(getHumidityCallbackR1);
        }, 1000) ;


    //loading screen when you change fruitroom.

        $("#fr1").on("click", function(){
        
        getTemperatureCallR1(getTemperatureCallbackR1);
        getHumidityCallR1(getHumidityCallbackR1);
            $(".item").removeClass("active");
            $("#loader").addClass("active");
            $("#content").addClass("hidden");
            $(this).addClass('active');
            setTimeout(function(){
                $("#loader").removeClass("active");
                $("#content").removeClass("hidden");
            }, 1000) ;
        });


    //loading screen when you change fruitroom.

        $("#fr2").on("click", function(){
        
        getTemperatureCallR2(getTemperatureCallbackR2);
        getHumidityCallR2(getHumidityCallbackR2);


            $(".item").removeClass("active");
            $("#loader").addClass("active");
            $("#content").addClass("hidden");
            $(this).addClass('active');
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
	




function getTemperatureCallR1(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":1, "unit": "Temperature"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getTemperatureCallbackR1(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $("#result-temp").html(val.temperature+' °c');
        $("#temp-capt").html('Gemeten om: '  +val.timeDate);
    });

}

function getHumidityCallR1(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":1, "unit": "Humidity"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getHumidityCallbackR1(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
      	$("#result-hum").html(val.humidity+' %');
        $("#hum-capt").html('Gemeten om: '  +val.timeDate);
    });

}









function getTemperatureCallR2(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":2, "unit": "Temperature"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getTemperatureCallbackR2(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
                $("#result-temp").html(val.temperature+' °c');
				$("#temp-capt").html('Gemeten om: '  +val.timeDate);
    });

}





function getHumidityCallR2(callback)
{
    $.ajax(
        {
            dataType:"json",
            data: {"room":2, "unit": "Humidity"},
            url:"api_pull_v2.php",
            success:callback
        }
    );
}

function getHumidityCallbackR2(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $("#result-hum").html(val.humidity+' %');
        $("#hum-capt").html('Gemeten om: '  +val.timeDate);
    });

}





