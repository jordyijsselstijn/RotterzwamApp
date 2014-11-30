    //Laadt de google corechart visualisation
    google.load("visualization", '1', {packages:['corechart']});

    //Wordt getriggered wanneer de chart api is geladen
    google.setOnLoadCallback(function(){
        getTemperatureCall(getTemperatureCallback);
        getHumidityCall(getHumidityCallback);
    });


    

    //Ajax call naar de php api
    function getTemperatureCall(callback)
    {
        $.ajax(
            {
                dataType:"json",
                async:'false',
                data: {"boundary":"boundary", "unit": "Temperature", "room": 1},
                url:"api_pull_v2.php",                                  //http://rotterzwam.nickderonde.nl/DEV/ removed for localhost
                success:callback
            }
        );
    }

    //Ajax call naar de php api
    function getHumidityCall(callback)
    {
        $.ajax(
            {
                dataType:"json",
                async:'false',
                data: {"boundary":"boundary", "unit": "Temperature", "room": 1},
                url:"api_pull_v2.php",                                  //http://rotterzwam.nickderonde.nl/DEV/ removed for localhost
                success:callback
            }
        );
    }
    

    

    //Callback functie die getriggered wordt door de Ajax call functie.
    //Deze functie rendert ook meteen de google chart
    function getTemperatureCallback(data)
    {
        console.log(data);

        var chartData = new google.visualization.DataTable();
        
        chartData.addColumn('string', 'date');
        chartData.addColumn('number', 'temp');
        chartData.addColumn('number', 'min');       //lijn voor minimum
        chartData.addColumn('number', 'max');       //lijn voor maximum



        for(i = 0; i < data.length; i++){

            chartData.addRow([data[i].timeDate, parseInt(data[i].temperature), parseInt(data[i].min_temp), parseInt(data[i].max_temp)]);

        }

		var showEvery = parseInt(chartData.getNumberOfRows() /3);

		var width='100%';

		
		var options = {
            
           height: '100%',
		   width: width,
		   legend: {position: 'bottom'},
		   hAxis: { textPosition: 'none' },
		   chartArea: {'width': '70%', 'height': '100%', left: '10%', top:'10%'}

        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_temp'));
        chart.draw(chartData, options);

    }		
    

	
    //Callback functie die getriggered wordt door de Ajax call functie.
    //Deze functie rendert ook meteen de google chart
    function getHumidityCallback(data)
    {

        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'date');
        chartData.addColumn('number', 'humidity');

        for(i = 0; i < data.length; i++){
            chartData.addRow([data[i].timeDate, parseInt(data[i].humidity)]);
        }


        var options = {
            title: 'Maandelijkse luchtvochtigheid'
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_hum'));


        chart.draw(chartData, options);

    }