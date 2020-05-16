import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component"; //Import code automatically added when using auto-complete on declarations class addition.
import { CourseComponent } from "./course/course.component"; // Generated via angular CLI

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // Component Class Name. In VS Code using auto complete added import above.
    CourseComponent, // Generated via Angular CLI
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
