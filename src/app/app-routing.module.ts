import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { FacultyService } from './services/faculty.service';
import { FacultyResolver } from './services/faculty-resolver.service';
import { AssignedDepartmentsResolver } from './services/assigned-departments-resolver.service';
import { SpecialitiesResolver } from './services/specialities-resolver.service';

import { DepartmentService } from './services/department.service';
import { DepartmentResolver } from './services/department-resolver.service';
import { TeachersResolver } from './services/teachers-resolver.service';

import { FacultyDetailsComponent } from './components/faculty/faculty-details.component';
import { AssignedDepartmentsComponent } from './components/faculty/assigned-departments.component';
import { SpecialitiesComponent } from './components/faculty/specialities.component';
import { CoursesComponent } from './components/faculty/courses.component';

import { DepartmentDetailsComponent } from './components/department/department-details.component';
import { TeachersComponent } from './components/department/teachers.component';

import { UniversityDetailsComponent } from './components/university/university-details.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: 'faculties/:id', 
        component: FacultyDetailsComponent,
        resolve: {
            faculty: FacultyResolver
        },
        children: [
          { 
            path: '',
            redirectTo: 'departments'
          },
          { 
            path: 'departments',  
            component: AssignedDepartmentsComponent,
            resolve: {
              assignedDepartments: AssignedDepartmentsResolver
            }
          },
          {
            path: 'specialities',
            component: SpecialitiesComponent,
            resolve: {
              specialities: SpecialitiesResolver
            }
          },
          {
            path: 'courses',
            component: CoursesComponent
          }          
        ]
      },
      
      { 
        path: 'departments/:id', 
        component: DepartmentDetailsComponent,
        resolve: {
            department: DepartmentResolver
        },
        children: [  
          { 
            path: '',
            redirectTo: 'teachers'
          },
          {
            path: 'teachers',
            component: TeachersComponent,
            resolve: {
              teachers: TeachersResolver
            }            
          }
        ]
      },      
      { 
        path: '', 
        component: UniversityDetailsComponent
      } 
    ])
  ],
  
  exports: [
    RouterModule
  ],
  
  providers: [
    FacultyService,
    FacultyResolver,
    AssignedDepartmentsResolver,
    SpecialitiesResolver,
    DepartmentService,
    DepartmentResolver,
    TeachersResolver
  ]
  
})

export class AppRoutingModule {}