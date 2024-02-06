import { Teacher } from "./teachers";
import { Students } from "./students";
import { Course } from "./courses";

const teacher1 = new Teacher(1, "Mr. Smith");
const student1 = new Students("Alice", 1, []);
const student2 = new Students("Bob", 2, []);

const course1 = new Course(1, "Math","Math notes...", []);
const course2 = new Course(2, "Science","Science notes...", []);


teacher1.enrollStudentInCourse(student1, course1);
teacher1.enrollStudentInCourse(student2, course1);
teacher1.enrollStudentInCourse(student2, course2);

const enrolledStudentsInCourse1 = teacher1.watchStudentsEnrolled(course1);
console.log("Students enrolled in Math course:");
enrolledStudentsInCourse1.forEach(student => {
    console.log(`Name: ${student.sname}, ID: ${student.sid}`);
});

const enrolledStudentsInCourse2 = teacher1.watchStudentsEnrolled(course2);
console.log("Students enrolled in Science course:");
enrolledStudentsInCourse2.forEach(student => {
    console.log(`Name: ${student.sname}, ID: ${student.sid}`);
});

const course1Notes = student1.watchCourseNotes(course1);
console.log("Course notes for Math:", course1Notes);
