import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() {
    return ["course1", "course2", "course3"];
  }

  constructor() { }
}
