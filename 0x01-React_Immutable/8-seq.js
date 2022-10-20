import Immutable from 'immutable';

function printBestStudents(students) {
  const Seggs = Immutable.Seq(students);

  const bestStudents = Seggs.filter((student) => student.score > 70);

  const CapStudents = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const bestStudentsNames = bestStudents.toJS();

  Object.keys(bestStudentsNames).map((key) => {
    const student = bestStudentsNames[key];
    student.firsName = CapStudents(student.firstName);
    student.lastName = CapStudents(student.lastName);
    return student;
  });
  console.log(bestStudentsNames);
}

export default printBestStudents;
