import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Department } from '../common/department.model';

import { DepartmentService } from './department.service';

@Injectable()
export class DepartmentResolver implements Resolve<Department> {
    
    constructor(private departmentService: DepartmentService) {
    }
    
    resolve(route: ActivatedRouteSnapshot) : Observable<Department> {
        let id: number = route.params['id'];
        return this.departmentService.get(id).map(department => {
            return department;
        });
    }
}