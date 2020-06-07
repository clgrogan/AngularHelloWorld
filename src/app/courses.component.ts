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
  templateUrl: "./courses.component.html",
  // template: ` <h2>{{ "Title: " + getTitle() }}</h2>
  //   <button class="btn btn-primary" [class.active]="isActive">
  //     Class Binding
  //   </button>
  //   <button [style.backgroundColor]="isActive ? 'blue' : 'white'">
  //     Style Binding
  //   </button>

  //   <ul>
  //     <li *ngFor="let course of courses">
  //       {{ course }}
  //     </li>
  //   </ul>`,
})
// export the class for Angular to access the class.
export class CoursesComponent {
  title = "List of Courses";
  isActive = true;
  courses;
  twoWayBound = "some text";
  course = {
    title: "The Complete Angular Course",
    rating: 66.623,
    students: 44044,
    price: 0.99,
    releaseDate: new Date(2020, 5, 21),
  };
  textParagraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // Dependency injection for constructor.
  constructor(service: CoursesService) {
    // Dependency must be registered in the module > Provider. or on rendering will get the ERROR "Error: No provider for CoursesService!"
    // let service = new CoursesService(); // tightly couples instance to the service class implementation
    this.courses = service.getCourses();
  }
  getTitle = () => this.title;

  onEventBindingClick = () => console.log("Click Event Button was clicked!");

  onClickDiv = () => console.log("Click Bubbled Up to the div element!");

  onEventObjectAccess = ($event) => {
    $event.stopPropagation();
    console.log("Event Object Accessed:", $event);
  };

  onKeyUpVanilla = ($event) =>
    $event.keyCode === 13 && console.log("ENTER Pressed. Vanilla!");

  onKeyUpAngularEventFilter = () =>
    console.log("ENTER pressed, Angular Event Filter (keyup.enter)");

  dollarEventObject = ($event) =>
    console.log("$event.target.value:", $event.target.value);

  templateVariable = (pickle) =>
    console.log("Template Variable value:", pickle);

  twoWayBindingMethod = () =>
    console.log("twoWayBindingMethod value: " + this.twoWayBound);

  //bottom of the class
}
