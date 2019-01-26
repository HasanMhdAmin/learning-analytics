var oral = [];
var written = [];

function get_lunch_Values(data) {
  var standard_Oral = 0;
  var standard_Written = 0;
  var free_Oral = 0;
  var free_Written = 0;

  oral = [];
  written = [];

  data.map(function(d) {
    //################ Gender Section ################
    if (d.lunch == "standard" && d.result == "r") {
      standard_Oral++;
    }
    if (d.lunch == "standard" && d.result == "w") {
      standard_Written++;
    }
    if (d.lunch == "free/reduced" && d.result == "r") {
      free_Oral++;
    }
    if (d.lunch == "free/reduced" && d.result == "w") {
      free_Written++;
    }
  });

  oral = { standard_Oral, free_Oral };
  written = { standard_Written, free_Written };
}

function get_lunch_xAxisLable() {
  return ["standard", "free/reduced"];
}

function get_lunch_OralData(data) {
  this.get_lunch_Values(data);
  return oral;
}

function get_lunch_WrittenData(data) {
  this.get_lunch_Values(data);
  return written;
}
