"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
var Students = /** @class */ (function () {
    function Students(sname, sid, coursesEnrolled) {
        this.sname = sname;
        this.sid = sid;
        this.coursesEnrolled = coursesEnrolled;
    }
    Students.prototype.watchCourseNotes = function (course) {
        return course.notes;
    };
    return Students;
}());
exports.Students = Students;
