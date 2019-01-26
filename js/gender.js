var oral = [];
var written = [];

function get_gender_Values(data) {
  var maleOral = 0;
  var maleWritten = 0;
  var femaleOral = 0;
  var femaleWritten = 0;

  oral = [];
  written = [];

  data.map(function(d) {
    //################ Gender Section ################
    if (d.gender == "female" && d.result == "r") {
      femaleOral++;
    } else if (d.gender == "female" && d.result == "w") {
      femaleWritten++;
    } else if (d.gender == "male" && d.result == "r") {
      maleOral++;
    } else if (d.gender == "male" && d.result == "w") {
      maleWritten++;
    }
  });

  oral = { maleOral, femaleOral };
  written = { maleWritten, femaleWritten };
}

function get_gender_xAxisLable() {
  return ["Male", "Female"];
}

function get_gender_OralData(data) {
  this.get_gender_Values(data);
  return oral;
}

function get_gender_WrittenData(data) {
  this.get_gender_Values(data);
  return written;
}
