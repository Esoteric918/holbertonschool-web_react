import Immutable from 'immutable';

function printBestStudents(students) {
  const Seggs = Immutable.Seq(students);
  console.log(Seggs);

  const bestStudents = Seggs.filter(student => student.score > 70);
  // console.log(bestStudents);

  const CapStudents = bestStudents.map(students.charAt(0).toUpperCase()) + students.slice(1);
  // console.log(CapStudents);

  const bestStudentsNames = CapStudents.toJS();

  Object.keys(bestStudentsNames).map((key) => {
    const student = bestStudentsNames[key];
    student.firsName = CapStudents(student.firstName);
    student.lastName = CapStudents(student.lastName);
    return student;
  });
  console.log(bestStudentsNames);
};

export default printBestStudents;
