import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgSemanticModule } from 'ng-semantic';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar/navbar-item.component';
import { FooterComponent } from './components/footer/footer.component';

import { FacultyDetailsComponent } from './components/faculty/faculty-details.component';
import { AssignedDepartmentsComponent } from './components/faculty/assigned-departments.component';
import { SpecialitiesComponent } from './components/faculty/specialities.component';
import { CoursesComponent } from './components/faculty/courses.component';

import { DepartmentDetailsComponent } from './components/department/department-details.component';
import { TeachersComponent } from './components/department/teachers.component';

import { UniversityDetailsComponent } from './components/university/university-details.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    NgSemanticModule,
    AppRoutingModule
  ],
  
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    FooterComponent,
    FacultyDetailsComponent,
    AssignedDepartmentsComponent,
    SpecialitiesComponent,
    CoursesComponent, 
    DepartmentDetailsComponent,
    TeachersComponent,
    UniversityDetailsComponent
  ],
  
  bootstrap: [ AppComponent ]
  
})
export class AppModule { }
