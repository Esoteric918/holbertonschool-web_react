import Immutable from 'immutable';

// const Immutable = require('immutable');

function printBestStudents(students) {
  const Seggs = Immutable.Seq(students);

  const bestStudents = Seggs.filter(student => student.score > 70);
  // console.log(bestStudents);

  const CapStudents = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  // console.log(CapStudents);

  const bestStudentsNames = bestStudents.toJS();

  Object.keys(bestStudentsNames).map((key) => {
    const student = bestStudentsNames[key];
    student.firsName = CapStudents(student.firstName);
    student.lastName = CapStudents(student.lastName);
    return student;
  });
  console.log(bestStudentsNames);
};

// const grades = {
//   1: {
//     score: 99,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   },
//   2: {
//     score: 59,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   },
//   3: {
//     score: 79,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   }
// };

// printBestStudents(grades);
