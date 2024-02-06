"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teachers_1 = require("./teachers");
var students_1 = require("./students");
var courses_1 = require("./courses");
var teacher1 = new teachers_1.Teacher(1, "Mr. Smith");
var student1 = new students_1.Students("Alice", 1, []);
var student2 = new students_1.Students("Bob", 2, []);
var course1 = new courses_1.Course(1, "Math", "Math notes...", []);
var course2 = new courses_1.Course(2, "Science", "Science notes...", []);
teacher1.enrollStudentInCourse(student1, course1);
teacher1.enrollStudentInCourse(student2, course1);
teacher1.enrollStudentInCourse(student2, course2);
var enrolledStudentsInCourse1 = teacher1.watchStudentsEnrolled(course1);
console.log("Students enrolled in Math course:");
enrolledStudentsInCourse1.forEach(function (student) {
    console.log("Name: ".concat(student.sname, ", ID: ").concat(student.sid));
});
var enrolledStudentsInCourse2 = teacher1.watchStudentsEnrolled(course2);
console.log("Students enrolled in Science course:");
enrolledStudentsInCourse2.forEach(function (student) {
    console.log("Name: ".concat(student.sname, ", ID: ").concat(student.sid));
});
var course1Notes = student1.watchCourseNotes(course1);
console.log("Course notes for Math:", course1Notes);
