import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FacultyService } from '../../services/faculty.service';
import { Faculty } from '../../common/faculty.model';

import { DepartmentService } from '../../services/department.service';
import { Department } from '../../common/department.model';
import { NavbarItemComponent } from './navbar-item.component';

@Component({
      selector: 'navbar',
      styles: [
            ':host { flex: 0 0 45px; margin-bottom: 5px }'
      ],
      templateUrl: './navbar.component.html',
      providers: [FacultyService, DepartmentService]
})
export class NavbarComponent {
      
      private faculties: Faculty[] = [];
      private departments: Department[] = [];
      
      departmentPattern: string;
      facultyPattern: string;
      
      @ViewChild('facultySidebar') facultySidebar: NavbarItemComponent;
      @ViewChild('departmentSidebar') departmentSidebar: NavbarItemComponent;
      
      constructor(private facultyService: FacultyService, private departmentService: DepartmentService, private router: Router) {}
      
      showFacultySidebar() {
            this.faculties = null;
            this.facultyService.getAll().subscribe(faculties => {
                 this.faculties = faculties;
            });
            this.facultySidebar.showSidebar();            
      }
      
      gotoFacultyDetails(id: number) {
            let link = ['faculties', id];
            this.router.navigate(link);
      }      
      
      showDepartmentSidebar() {
            this.departments = null;
            this.departmentService.getAll().subscribe(departments => {
                  this.departments = departments;
            });
            this.departmentSidebar.showSidebar();
      }
      
      gotoDepartmentDetails(id : number) {
            let link = ['departments', id];
            this.router.navigate(link);            
      }
}