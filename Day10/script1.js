var students = [
  { sname: "ABC", age: 22, course: "HTML" },
  { sname: "BCD", age: 23, course: "CSS" },
  { sname: "CDE", age: 21, course: "JAVA" },
  { sname: "EFG", age: 23, course: "REACT" }
];

var table = document.createElement("table");
table.border = "1";

var thead = document.createElement("thead");
thead.innerHTML = `
<tr>
<th>S.No</th>
<th>Student Name</th>
<th>Age</th>
<th>Course</th>
</tr>`;

var tbody = document.createElement("tbody");

for (var i = 0; i < students.length; i++) {
    var tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${i+1}</td>
    <td>${students[i].sname}</td>
    <td>${students[i].age}</td>
    <td>${students[i].course}</td>`;

    tbody.appendChild(tr);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);