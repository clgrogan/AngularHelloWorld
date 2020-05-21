import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component"; //Import code automatically added when using auto-complete on declarations class addition.
import { CourseComponent } from "./course/course.component"; // Generated via angular CLI
import { CoursesService } from "./courses.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // Component Class Name. In VS Code using auto complete added import above.
    CourseComponent, // Generated via Angular CLI
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    CoursesService, // Registers the courses service for dependency injection use
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
