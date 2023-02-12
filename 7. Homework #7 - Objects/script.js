'use strict';

///////////////// ACADEMY TEMPLATE /////////////////

function Academy(name, students, subjects, start, end) {
  this.academyName = name;
  this.students = students || [];
  this.subjects = subjects || [];
  this.start = start;
  this.end = end;
  this.numberOfClasses = subjects.length * 10;
  this.printStudents = function () {
    console.log('--- students ---');
    students.forEach(student => {
      console.log(student);
    });
  };
  this.printSubjects = function () {
    console.log('--- subjects ---');
    subjects.forEach(subject => {
      console.log(subject);
    });
  }
}

// ACADEMIES
const sedcAcademy = new Academy('SEDC', ['Aleksandar', 'Dragica', 'Lina'], ['HTML', 'CSS', 'JS Basic', 'JS Advanced'], '17.10.2022', '18.10.2023');
const codeAcademy = new Academy('CodeAcademy', ['Milan', 'Jovica', 'Katarina'], ['PHP', 'Angular', 'React', 'NodeJS'], '08.09.2022', '22.11.2023');

///////////////// SUBJECT TEMPLATE /////////////////

function Subject(title, isElective, academy, students) {
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective = Boolean(isElective);
  this.academy = academy;
  this.students = students;
  this.overrideClasses = function (number) {
    if (number >= 3) return `The number of classes is: ${this.numberOfClasses = number}`;
    else return `Number of classes can't be smaller than 3. You have ${number} classes.`
  }
}

// SUBJECTS 
const javascriptSubject = new Subject('JS Advanced', false, sedcAcademy, sedcAcademy.students);
const htmlSubject = new Subject('HTML', true, sedcAcademy, sedcAcademy.students);
const csslSubject = new Subject('CSS', true, sedcAcademy, sedcAcademy.students);
const phpSubject = new Subject('PHP', false, codeAcademy, codeAcademy.students);


///////////////// STUDENT TEMPLATE /////////////////
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;
  // When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
  this.startAcademy = function (academy) {
    this.academy = academy;
    academy.students.push(this.firstName);

  };
  // When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject
  this.startSubject = function (subject, academy) {
    if (this.academy = academy && academy.subjects.includes(subject.title)) {
      subject.students.push(this.firstName);

      if (this.currentSubject) {
        if (!this.completedSubjects.includes(this.currentSubject)) {
          this.completedSubjects.push(this.currentSubject);
        }
      }
      this.currentSubject = subject;
    }
    else {
      return 'The student does not have an academy or the subject does not exist in the academy';
    }
  };
}

// STUDENTS
const aleksandarTodoroski = new Student('Aleksandar', 'Todoroski', 38);
const dragicaTodoroska = new Student('Dragica', 'Todoroska', 35);
const natasaBozinovska = new Student('Natasa', 'Bozinovska', 35);
const kristijanBozinovski = new Student('Kristijan', 'Bozinovski', 10);

// console.log('SEDC students:', sedcAcademy.students);
// console.log('CodeAcademy students:', codeAcademy.students);
// aleksandarTodoroski.startAcademy(sedcAcademy);
// natasaBozinovska.startAcademy(codeAcademy);
// dragicaTodoroska.startAcademy(codeAcademy);
// kristijanBozinovski.startAcademy(codeAcademy);
// console.log('SEDC students:', sedcAcademy.students);
// console.log('CodeAcademy students:', codeAcademy.students);

// console.log('Students of JavaScript subject are:', javascriptSubject.students);
// aleksandarTodoroski.startSubject(javascriptSubject, sedcAcademy);
// console.log('The current subject is', aleksandarTodoroski.currentSubject);
// aleksandarTodoroski.startSubject(htmlSubject, sedcAcademy);
// console.log('The current subject is', aleksandarTodoroski.currentSubject);
// aleksandarTodoroski.startSubject(csslSubject, sedcAcademy);
// console.log('The current subject is', aleksandarTodoroski.currentSubject);
// console.log('Completed subjects are:', aleksandarTodoroski.completedSubjects);
// console.log('JavaScript students:', javascriptSubject.students);
// console.log('HTML students:', htmlSubject.students);
// console.log('CSS students:', csslSubject.students);
// console.log('PHP students:', phpSubject.students);
// console.log('SEDC students:', sedcAcademy.students);
// console.log('CodeAcademy students:', codeAcademy.students);