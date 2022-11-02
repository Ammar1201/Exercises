const { LOG10E } = require("mathjs");

const school = {
  teachers: [
    { id: 1, name: "Pinchas", subjects: ["chemistry", "biology", "physics"], students: [], capacityLeft: 3 },
    { id: 2, name: "Williams", subjects: ["history", "ethics"], students: [], capacityLeft: 2 },
  ],
  students: [
  { id: 10, name: "Jennifer", age: 20 },
  { id: 11, name: "Howard", age: 23 },
  { id: 12, name: "Old-Timmy", age: 86 },
  { id:13, name: "Houston", age: 21 },
  ],

  findPerson: (type, id) => {
    return type.find((person) => {
      return person.id == id;
    });
  },

  findTeacherBySubject: (subject) => {
    return school.teachers.find((teacher) => {
      return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
    });
  },

  assignStudent: (students, subject) => {
    let teacher = school.findTeacherBySubject(subject);
    let teacherCapacity = teacher.capacityLeft;
    let breakLoop = false;
    while(teacherCapacity > 0 && !breakLoop) {
      while(teacherCapacity > 0 && !breakLoop) {
        let student = null;
        if(students.length > 0) {
          student = students.pop();
        }
        else {
          breakLoop = true;
        }
        if(!breakLoop) {
          teacher.students.push(student);
          teacher.capacityLeft -= 1;
          teacherCapacity -= 1;
        }
      }
      if(!breakLoop && teacherCapacity > 0) {
        teacher = school.findTeacherBySubject(subject);
        teacherCapacity = teacher.capacityLeft;
      }
    }

    if(students.length > 0) {
      console.log(`Sorry, no available teachers left`);
    }
    else {
      console.log(`done`);
    }
  },

  assignTeachersSubject: (teacherID, subject) => {
    let teacher = school.findPerson(school.teachers, teacherID);
    if(!(teacher.subjects.includes(subject))) {
      teacher.subjects.push(subject);
    }
  }
};

// console.log(school.findPerson(school.students, 12));

// school.assignStudent([11, 12, 10], `biology`);
// console.log(school.teachers);

school.assignTeachersSubject(2, `ethics`);
console.log(school.teachers);