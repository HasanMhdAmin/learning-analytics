function bindData() {
    var filter = document.getElementById("attribute").value;


    var oral = [];
    var written = [];

    d3.csv("data-set/student-data-set.csv").then(function (data) {
        var max_value = 1000;
        var min_value = 0;

        // create oral and written array, this is [key, value] array
        if (filter == "gender") {
            //################ Gender Section ################
            xAxisLable = get_gender_xAxisLable();
            oral = get_gender_OralData(data);
            written = get_gender_WrittenData(data);
        } else if (filter == "ethnicity") {
            //################ ethnicity Section ################
            xAxisLable = get_ethnicity_xAxisLable();
            oral = get_ethnicity_OralData(data);
            written = get_ethnicity_WrittenData(data);            
        } else if (filter == "level_of_education") {
            //################ level of education Section ################
            xAxisLable = get_levelOfEducation_xAxisLable();
            oral = get_levelOfEducation_OralData(data);
            written = get_levelOfEducation_WrittenData(data);
        } else if (filter == "lunch") {
            //################ lunch Section ################
            xAxisLable = get_lunch_xAxisLable();
            oral = get_lunch_OralData(data);
            written = get_lunch_WrittenData(data);    
        } else if (filter == "test_preparation_course") {
            //################ test_preparation_course Section ################
            xAxisLable = get_test_preparation_course_xAxisLable();
            oral = get_test_preparation_course_OralData(data);
            written = get_test_preparation_course_WrittenData(data);
        }


        



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
            chart: {
                type: "column"
            },
            title: {
                text: "Exam Results"
            },
            subtitle: {
                text: "Source: www.Kaggle.com"
            },
            xAxis: {
                categories: [],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Number of Student"
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: "Orale",
                    data: []
                },
                {
                    name: "Written",
                    data: []
                }
            ]
        };

        // update the value of series to draw the chart
        chartdata.series[0].data = oralData;
        chartdata.series[1].data = writtenData;

        // update the name of X axis
        chartdata.xAxis.categories = xAxisLable;

        Highcharts.chart("container", chartdata);
    });


}