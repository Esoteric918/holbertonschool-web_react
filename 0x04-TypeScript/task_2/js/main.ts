interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome(): string  {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof(salary) === 'number' && salary < 500 ) return new Teacher();
    return new Director;
}

function isDirecton(employee: Director | Teacher): employee is Director  {
    return employee instanceof Director;
    }

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirecton(employee)) {
        console.log(employee.workDirectorTasks());
        return employee.workDirectorTasks();
    } else {
        console.log(employee.workTeacherTasks());
        return employee.workTeacherTasks();
    }

}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math')
    return 'Teaching Math';
    if (todayClass === "History")
    return 'Teaching History'
}

// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));
// console.log(teachClass(to))
