import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, AppComponent1} from './app.component';
import { AppCalculatorComponent } from './app-calculator/app-calculator.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import {FormsModule} from "@angular/forms";
import { StudentDetailComponent } from './student-management/student-detail/student-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        AppCalculatorComponent,
        AppComponent1,
        FontSizeComponent,
        FontSizeComponent,
        StudentManagementComponent,
        StudentDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
