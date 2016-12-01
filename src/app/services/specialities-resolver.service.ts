import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Speciality } from '../common/speciality.model';

import { FacultyService } from './faculty.service';

@Injectable()
export class SpecialitiesResolver implements Resolve<Speciality[]> {
    
    constructor(private facultyService: FacultyService) {
    }
    
    resolve(route: ActivatedRouteSnapshot) : Observable<Speciality[]> {
        let id: number = route.parent.params['id'];
        return this.facultyService.getSpecialities(id).map(specialities => {
            return specialities;
        });
    }
}