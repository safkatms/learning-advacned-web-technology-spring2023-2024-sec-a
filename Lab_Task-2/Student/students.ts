import { Course } from "./courses";

export class Students {
    sname: string;
    sid: number;
    coursesEnrolled: Course[];

    constructor(sname: string, sid: number, coursesEnrolled: Course[]) {
        this.sname = sname;
        this.sid = sid;
        this.coursesEnrolled = coursesEnrolled;
    }
    watchCourseNotes(course: Course): string {
      return course.notes;
  }
}
