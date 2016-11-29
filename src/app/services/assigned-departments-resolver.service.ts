import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Department } from '../common/department.model';

import { FacultyService } from './faculty.service';

@Injectable()
export class AssignedDepartmentsResolver implements Resolve<Department[]> {
    
    constructor(private facultyService: FacultyService) {
    }
    
    resolve(route: ActivatedRouteSnapshot) : Observable<Department[]> {
        let id: number = route.parent.params['id'];
        return this.facultyService.getAssignedDepartments(id).map(departments => {
            return departments;
        });
    }
}