interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'Juan',
    lastName: 'Diaz',
    age: 35,
    location: 'Oklahoma'
}
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Mary',
    age: 420,
    location: 'Washington'
}

const studentList: Array<Student> = [student1, student2];

var table = document.createElement('table');
document.body.appendChild(table);

studentList.forEach((student) => {
    var tr = table.insertRow();
    var fs = tr.insertCell();
    var loc =tr.insertCell();
    fs.innerHTML = student.firstName;
    loc.innerHTML = student.location;
});
