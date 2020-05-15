import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component"; //Import code automatically added when using auto-complete on declartions class addition.

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // Component Class Name. In VS Code using auto complete added import above.
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
