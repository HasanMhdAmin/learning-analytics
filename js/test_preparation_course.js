var oral = [];
var written = [];

function get_test_preparation_course_Values(data) {
  var none_Oral = 0;
  var none_Written = 0;
  var completed_Oral = 0;
  var completed_Written = 0;

  oral = [];
  written = [];

  data.map(function(d) {
    //################ Gender Section ################
    if (d.test_preparation_course == "none" && d.result == "r") {
      none_Oral++;
    }
    if (d.test_preparation_course == "none" && d.result == "w") {
      none_Written++;
    }
    if (d.test_preparation_course == "completed" && d.result == "r") {
      completed_Oral++;
    }
    if (d.test_preparation_course == "completed" && d.result == "w") {
      completed_Written++;
    }
  });

  oral = { none_Oral, completed_Oral };
  written = { none_Written, completed_Written };
}

function get_test_preparation_course_xAxisLable() {
  return ["none", "completed"];
}

function get_test_preparation_course_OralData(data) {
  this.get_test_preparation_course_Values(data);
  return oral;
}

function get_test_preparation_course_WrittenData(data) {
  this.get_test_preparation_course_Values(data);
  return written;
}
