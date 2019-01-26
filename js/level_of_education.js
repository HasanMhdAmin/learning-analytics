var oral = [];
var written = [];

function get_levelOfEduvation_Values(data) {
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

  oral = [];
  written = [];

  data.map(function(d) {
    //################ level of education Section ################
    if (d.level_of_education == "bachelor's degree" && d.result == "r") {
      bachelorOral++;
    } else if (d.level_of_education == "bachelor's degree" && d.result == "w") {
      bachelorWritten++;
    } else if (d.level_of_education == "college" && d.result == "r") {
      collegeOral++;
    } else if (d.level_of_education == "college" && d.result == "w") {
      collegeWritten++;
    } else if (d.level_of_education == "master's degree" && d.result == "r") {
      masterOral++;
    } else if (d.level_of_education == "master's degree" && d.result == "w") {
      masterWritten++;
    } else if (
      d.level_of_education == "associate's degree" &&
      d.result == "r"
    ) {
      associateOral++;
    } else if (
      d.level_of_education == "associate's degree" &&
      d.result == "w"
    ) {
      associateWritten++;
    } else if (d.level_of_education == "high school" && d.result == "r") {
      hiSchoolOral++;
    } else if (d.level_of_education == "high school" && d.result == "w") {
      hiSchoolWritten++;
    }
  });

  oral = {
    bachelorOral,
    collegeOral,
    masterOral,
    associateOral,
    hiSchoolOral
  };
  written = {
    bachelorWritten,
    collegeWritten,
    masterWritten,
    associateWritten,
    hiSchoolWritten
  };
}

function get_levelOfEducation_xAxisLable() {
  return [
    "bachelor's degree",
    "college",
    "master's degree",
    "associate's degree",
    "high school"
  ];
}

function get_levelOfEducation_OralData(data) {
  this.get_levelOfEduvation_Values(data);
  return oral;
}

function get_levelOfEducation_WrittenData(data) {
  this.get_levelOfEduvation_Values(data);
  return written;
}
