$(document).ready(function (){

    function handleBitcoinResponse(response, status, xhr){
        console.log(response);
        //$().text=response.xxx

        let bpi = response.bpi
        $("#bitcoin").empty();
        //$("#bitcoin").text(JSON.stringify(bpi));

        for (let i in bpi){
            //console.log(i + " " + bpi[i]);
            $("#bitcoin").append(i + " " + bpi[i] + "<br>");
        };
        renderChart(bpi);
    }

    function bitcoinButtonClicked(){
        console.log("The button has been clicked!!")

        var url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-03-01"
        $.getJSON(url, handleBitcoinResponse);
    }

    function renderChart(bpi) {
        Highcharts.chart('container', {
            chart: {
                type: 'line'
            },
            title: {
                text: '30 days Bitcoin Average Price'
            },
            subtitle: {
                text: 'Source: butaire.com'
            },
            xAxis: {
                categories: Object.keys(bpi)
            },
            yAxis: {
                title: {
                    text: 'Price in USD'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: 'Btcoin',
                data: Object.values(bpi)
            }, {
                name: 'Baseline',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    }

    $("#BitCoinButton").click(bitcoinButtonClicked);

})
