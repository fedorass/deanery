import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Teacher } from '../common/teacher.model';

import { DepartmentService } from './department.service';

@Injectable()
export class TeachersResolver implements Resolve<Teacher[]> {
    
    constructor(private departmentService: DepartmentService) {
    }
    
    resolve(route: ActivatedRouteSnapshot) : Observable<Teacher[]> {
        let id: number = route.parent.params['id'];
        return this.departmentService.getTeachers(id).map(teachers => {
            return teachers;
        });
    }
}