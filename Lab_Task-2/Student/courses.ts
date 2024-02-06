import { Students } from "./students";

export class Course {
    id: number;
    name: string;
    notes: string;
    studentsEnrolled: Students[];

    constructor(id: number, name: string, notes: string, studentsEnrolled: Students[]) {
        this.id = id;
        this.name = name;
        this.notes = notes;
        this.studentsEnrolled = studentsEnrolled;
    }
    getCourseNotes(): string {
        return this.notes;
    }
}