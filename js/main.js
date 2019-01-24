var maleOral = 0;
var maleWritten = 0;
var femaleOral = 0;
var femaleWritten = 0;
var male = [];


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
            // return d.gender;
        })
        console.log("==============================");
        console.log("---- femaleOral " + femaleOral);
        console.log("---- femaleWritten " + femaleWritten);
        console.log("---- maleOral " + maleOral);
        console.log("---- maleWritten " + maleWritten);
        console.log("==============================");

        male = {
            Orale: maleOral,
            Written: maleWritten
        };
        console.log("maleArray: ");
        console.log(male);


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
        Highcharts.chart('container', chartdata);

    })