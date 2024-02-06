"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(id, name, notes, studentsEnrolled) {
        this.id = id;
        this.name = name;
        this.notes = notes;
        this.studentsEnrolled = studentsEnrolled;
    }
    Course.prototype.getCourseNotes = function () {
        return this.notes;
    };
    return Course;
}());
exports.Course = Course;
