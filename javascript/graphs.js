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
                data: {"room": 2, "unit": "Temperature", "month": "this"},
                url:"http://rotterzwam.nickderonde.nl/api_pull_v2.php",
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
                data: {"room": 2, "unit": "Humidity", "month": "this"},
                url:"http://rotterzwam.nickderonde.nl/api_pull_v2.php",
                success:callback
            }
        );
    }

    //Callback functie die getriggered wordt door de Ajax call functie.
    //Deze functie rendert ook meteen de google chart
    function getTemperatureCallback(data)
    {

        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'date');
        chartData.addColumn('number', 'temp');

        for(i = 0; i < data.length; i++){
            chartData.addRow([data[i].timeDate, parseInt(data[i].temperature)]);
        }

        var options = {
            title: 'Maandelijkse temperatuur'
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