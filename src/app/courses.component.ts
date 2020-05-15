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
// decorator - makes the class a component
// component accepts one argument, we pass an object.
@Component({
  selector: "courses", // defines element <courses>
  template: "<h2>Courses</h2>",
})
// export the class for Angular to access the class.
export class CoursesComponent {}
