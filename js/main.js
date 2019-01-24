// gender
var maleOral = 0;
var maleWritten = 0;
var femaleOral = 0;
var femaleWritten = 0;


// level of education
var bachelorOral = 0;
var bachelorWritten = 0;

var collegeOral = 0;
var collegeWritten = 0;

var masterOral = 0;
var masterWritten = 0;

var associateOral = 0;
var associateWritten = 0;

var hiSchoolOral = 0;
var hiSchoolWritten = 0;



var oral = [];
var written = [];


d3.csv('data-set/student-data-set.csv')
    .then(function (data)
    {
        var max_value = 1000;
        var min_value = 0;

        data.map(function (d)
        {

            //################ Gender Section ################
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


            //################ level of education Section ################
            if (d.level_of_education == "bachelor's degree" && d.result == "r")
            {
                bachelorOral++;
            }
            if (d.level_of_education == "bachelor's degree" && d.result == "w")
            {
                bachelorWritten++;
            }
            if (d.level_of_education == "college" && d.result == "r")
            {
                collegeOral++;
            }
            if (d.level_of_education == "college" && d.result == "w")
            {
                collegeWritten++;
            }
            if (d.level_of_education == "master's degree" && d.result == "r")
            {
                masterOral++;
            }
            if (d.level_of_education == "master's degree" && d.result == "w")
            {
                masterWritten++;
            }
            if (d.level_of_education == "associate's degree" && d.result == "r")
            {
                associateOral++;
            }
            if (d.level_of_education == "associate's degree" && d.result == "w")
            {
                associateWritten++;
            }
            if (d.level_of_education == "high school" && d.result == "r")
            {
                hiSchoolOral++;
            }
            if (d.level_of_education == "high school" && d.result == "w")
            {
                hiSchoolWritten++;
            }

        })


        // create oral and written array, this is [key, value] array
        //################ Gender Section ################
        // xAxisLable = ['Male', 'Female'];
        // oral = {maleOral, femaleOral};
        // written = {maleWritten, femaleWritten};

        //################ level of education Section ################
        xAxisLable = get_levelOfEducation_xAxisLable();
        oral = get_levelOfEducation_OralData(data);
        written = get_levelOfEducation_WrittenData(data);


        
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
                categories: [],
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
                data: []

            },
            {
                name: 'Written',
                data: []

            }]
        };


        // update the value of series to draw the chart
        chartdata.series[0].data = oralData;
        chartdata.series[1].data = writtenData;

        // update the name of X axis
        chartdata.xAxis.categories = xAxisLable;


        Highcharts.chart('container', chartdata);

    })