//import a @angular/core 'decorator'? for the class
// Decorators are design patterns that are used to separate modification or decoration
// of a class without modifying the original source code.
// In AngularJS, decorators are functions that allow a service, directive or filter to be
// modified prior to its usage.
// Decorators - AngularJS: Developer Guide

// apply the decorator to the class
// use @Component() like a function, add fields/properties
// Called the decorator function, accessing elements
// extends html vocabulary, defines new elements/tags
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
// decorator - makes the class a component
// component accepts one argument, we pass an object.
@Component({
  selector: "courses", // defines element <courses> tag
  template: ` <h2>{{ "Title: " + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>`, //String Interpolation in effect.
})
// export the class for Angular to access the class.
export class CoursesComponent {
  title = "List of Courses";
  courses;

  // Dependency injection for constructor.
  constructor(service: CoursesService) {
    // Dependency must be registered in the module > Provider. or on rendering will get the ERROR "Error: No provider for CoursesService!"
    // let service = new CoursesService(); // tightly couples instance to the service class implementation
    this.courses = service.getCourses();
  }
  getTitle = () => this.title;
}
