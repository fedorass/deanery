import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Course } from '../common/course.model';

@Injectable()
export class SpecialityService {
    
    private specialitiesUrl : string = '/api/specialities';
    
    constructor(private http: Http) {
    }
    
    getCourses(id: number): Observable<Course[]> {
        return this.http.get(`${this.specialitiesUrl}/${id}/courses`).map(res => res.json() || { } as Course[]);
    }
    
}
