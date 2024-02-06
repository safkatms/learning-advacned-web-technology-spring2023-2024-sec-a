"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(id, name) {
        this.id = id;
        this.name = name;
    }
    Teacher.prototype.enrollStudentInCourse = function (student, course) {
        course.studentsEnrolled.push(student);
        student.coursesEnrolled.push(course);
    };
    Teacher.prototype.watchStudentsEnrolled = function (course) {
        return course.studentsEnrolled;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
