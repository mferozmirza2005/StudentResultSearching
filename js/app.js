var student1 = {
  name: "ali",
  fatherName: "ahmed",
  age: 20,
  result: "pass",
};
var student2 = {
  name: "faizan",
  fatherName: "faiz",
  age: 16,
  result: "pass",
};
var student3 = {
  name: "hassan",
  fatherName: "adeel",
  age: 24,
  result: "Fail",
};
var student4 = {
  name: "salman",
  fatherName: "usman",
  age: 25,
  result: "Fail",
};
var student5 = {
  name: "shahzaib",
  fatherName: "hammad",
  age: 30,
  result: "pass",
};

var students = [student1, student2, student3, student4, student5];

var Rsearch = document.getElementById("RSearch");
var studentR = document.getElementById("result");

for (var i = 0; i < students.length; i++) {
  students[i].id = i + 1;
}

for (var i = 0; i < students.length; i++) {
  var result = Rsearch.value;
  var Sid = students[i].id;
  var SName = students[i].name;
  var SFName = students[i].fatherName;
  var Sresult = students[i].result;

  studentR.innerHTML +=
    `
  <tr>
  <td>` +
    Sid +
    `</td>
  <td>` +
    SName +
    `</td>
  <td>` +
    SFName +
    `</td>
  <td>` +
    Sresult +
    `</td>
    </tr>
    `;
    
  function SResult() {
    var SRoll = document.getElementById("SRoll");
    var SName = document.getElementById("SName");
    var SFname = document.getElementById("SFname");
    var SResult = document.getElementById("SResult");
    var result = Rsearch.value;
    for (var i = 0; i < students.length; i++) {
      var SearchRoll = students[i].id;
      var SearchName = students[i].name;
      var SearchFName = students[i].fatherName;
      var Searchresult = students[i].result;

      if (result == students[i].id) {
        SRoll.innerHTML = SearchRoll;
        SName.innerHTML = SearchName;
        SFname.innerHTML = SearchFName;
        SResult.innerHTML = Searchresult;
      }

      if (result != students[0].id) {
        var noMatch = document.getElementById("noSMatch");
        noMatch.innerHTML = "No Student found.";

        SRoll.innerHTML = "";
        SName.innerHTML = "";
        SFname.innerHTML = "";
        SResult.innerHTML = "";
      }
    }
  }
}