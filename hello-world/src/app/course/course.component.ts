import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "Liste of courses";
  courses;

  constructor(service: CourseService) { // dependency injection of CouseService class
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}
