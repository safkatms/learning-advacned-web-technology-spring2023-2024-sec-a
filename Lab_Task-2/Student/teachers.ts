import { Course } from "./courses";
import { Students } from "./students";

export class Teacher {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    enrollStudentInCourse(student: Students, course: Course): void {
        course.studentsEnrolled.push(student);
        student.coursesEnrolled.push(course);
    }

    watchStudentsEnrolled(course: Course): Students[] {
        return course.studentsEnrolled;
    }
}

