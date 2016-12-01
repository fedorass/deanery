import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Faculty } from '../common/faculty.model';
import { Department } from '../common/department.model';
import { Speciality } from '../common/speciality.model';

@Injectable()
export class FacultyService {
    
    private facultiesUrl : string = '/api/faculties';        
    
    constructor(private http: Http) {
    }
    
    getAll(): Observable<Faculty[]> {
        return this.http.get(this.facultiesUrl).map(res => res.json() || { } as Faculty[]);
    }
    
    get(id: number): Observable<Faculty> {
        return this.http.get(`${this.facultiesUrl}/${id}`).map(res => res.json() || { } as Faculty);
    }
    
    getAssignedDepartments(id: number): Observable<Department[]> {
        return this.http.get(`${this.facultiesUrl}/${id}/assignedDepartments`).map(res => res.json() || { } as Department[]);
    }

    getSpecialities(id: number): Observable<Speciality[]> {
        return this.http.get(`${this.facultiesUrl}/${id}/specialities`).map(res => res.json() || { } as Speciality[]);
    }
}