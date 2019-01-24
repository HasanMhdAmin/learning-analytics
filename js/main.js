var maleOral = 0;
var maleWritten = 0;
var femaleOral = 0;
var femaleWritten = 0;
var oral = [];
var written = [];


d3.csv('data-set/student-data-set.csv')
    .then(function (data)
    {
        var max_value = 1000;
        var min_value = 0;

        data.map(function (d)
        {

            if (d.gender == "female" && d.result == "r")
            {
                femaleOral++;
            }
            if (d.gender == "female" && d.result == "w")
            {
                femaleWritten++;
            }
            if (d.gender == "male" && d.result == "r")
            {
                maleOral++;
            }
            if (d.gender == "male" && d.result == "w")
            {
                maleWritten++;
            }
        })


        // create oral and written array, this is [key, value] array
        oral = {maleOral, femaleOral};
        written = {maleWritten, femaleWritten};
        
        //convert oral, written array to only value array without key
        var oralData = [];
        for (var key in oral) {
            oralData = oralData.concat(oral[key]);
        }
        var writtenData = [];
        for (var key in written) {
            writtenData = writtenData.concat(written[key]);
        }


        var chartdata = {
            chart:
            {
                type: 'column'
            },
            title:
            {
                text: 'Monthly Average Rainfall'
            },
            subtitle:
            {
                text: 'Source: WorldClimate.com'
            },
            xAxis:
            {
                categories: [
                    'Male',
                    'Female'
                ],
                crosshair: true
            },
            yAxis:
            {
                min: 0,
                title:
                {
                    text: 'Number of Student'
                }
            },
            tooltip:
            {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions:
            {
                column:
                {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [
            {
                name: 'Orale',
                data: [maleOral, femaleOral]

            },
            {
                name: 'Written',
                data: [maleWritten, femaleWritten]

            }]
        };


        // update the value of series to draw the chart
        chartdata.series[0].data = oralData;
        chartdata.series[1].data = writtenData;

        Highcharts.chart('container', chartdata);

    })