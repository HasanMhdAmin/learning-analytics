var oral = [];
var written = [];

function get_ethnicity_Values(data) {
  var groupA_Oral = 0;
  var groupA_Written = 0;

  var groupB_Oral = 0;
  var groupB_Written = 0;

  var groupC_Oral = 0;
  var groupC_Written = 0;

  var groupD_Oral = 0;
  var groupD_Written = 0;

  oral = [];
  written = [];

  data.map(function(d) {
    //################ level of education Section ################
    if (d.ethnicity == "group A" && d.result == "r") {
      groupA_Oral++;
    } else if (d.ethnicity == "group A" && d.result == "w") {
      groupA_Written++;
    } else if (d.ethnicity == "group B" && d.result == "r") {
      groupB_Oral++;
    } else if (d.ethnicity == "group B" && d.result == "w") {
      groupB_Written++;
    } else if (d.ethnicity == "group C" && d.result == "r") {
      groupC_Oral++;
    } else if (d.ethnicity == "group C" && d.result == "w") {
      groupC_Written++;
    } else if (d.ethnicity == "group D" && d.result == "r") {
      groupD_Oral++;
    } else if (d.ethnicity == "group D" && d.result == "w") {
      groupD_Written++;
    }
  });

  oral = {
    groupA_Oral,
    groupB_Oral,
    groupC_Oral,
    groupD_Oral
  };
  written = {
    groupA_Written,
    groupB_Written,
    groupC_Written,
    groupD_Written
  };
}

function get_ethnicity_xAxisLable() {
  return ["group A", "group B", "group C", "group D"];
}

function get_ethnicity_OralData(data) {
  this.get_ethnicity_Values(data);
  return oral;
}

function get_ethnicity_WrittenData(data) {
  this.get_ethnicity_Values(data);
  return written;
}
