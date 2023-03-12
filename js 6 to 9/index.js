var num = prompt("Enter a number:");
if (num != null && num != "") {
  num = parseInt(num);
} else {
  num = 5;
}
var table = "<h2>Multiplication table of " + num + "</h2>";
table += "<table>";
for (var i = 1; i <= 10; i++) {
  table += "<tr>";
  table += "<td>" + num + " x " + i + "</td>";
  table += "<td>=</td>";
  table += "<td>" + (num * i) + "</td>";
  table += "</tr>";
}
table += "</table>";
document.write(table);
/////////////////////////////////////////////
var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");

// ////// total marks for each subject
var totalMarks = 100;

////// obtained marks from user
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3));




///// calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;



/////////  working of result table
var resultTable = "<table>";
resultTable += "<tr>";
resultTable += "<th>Subject</th>";
resultTable += "<th>Total Marks</th>";
resultTable += "<th>Obtained Marks</th>";
resultTable += "<th>Percentage</th>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td>" + subject1 + "</td>";
resultTable += "<td>" + totalMarks + "</td>";
resultTable += "<td>" + obtainedMarks1 + "</td>";
resultTable += "<td>" + ((obtainedMarks1 / totalMarks) * 100) + "%</td>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td>" + subject2 + "</td>";
resultTable += "<td>" + totalMarks + "</td>";
resultTable += "<td>" + obtainedMarks2 + "</td>";
resultTable += "<td>" + ((obtainedMarks2 / totalMarks) * 100) + "%</td>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td>" + subject3 + "</td>";
resultTable += "<td>" + totalMarks + "</td>";
resultTable += "<td>" + obtainedMarks3 + "</td>";
resultTable += "<td>" + ((obtainedMarks3 / totalMarks) * 100) + "%</td>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td><strong>Total</strong></td>";
resultTable += "<td><strong>" + (totalMarks * 3) + "</strong></td>";
resultTable += "<td><strong>" + totalObtainedMarks + "</strong></td>";
resultTable += "<td><strong>" + totalPercentage + "%</strong></td>";
resultTable += "</tr>";
resultTable += "</table>";
// display result table on the browser
document.write(resultTable);
//////////////////////////////////////////////////
