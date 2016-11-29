import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Faculty } from '../common/faculty.model';

import { FacultyService } from './faculty.service';

@Injectable()
export class FacultyResolver implements Resolve<Faculty> {
    
    constructor(private facultyService: FacultyService) {
    }
    
    resolve(route: ActivatedRouteSnapshot) : Observable<Faculty> {
        let id: number = route.params['id'];
        return this.facultyService.get(id).map(faculty => {
            return faculty;
        });
    }
}