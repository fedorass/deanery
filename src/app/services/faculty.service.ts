import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Faculty } from '../common/faculty.model';
import { Department } from '../common/department.model';

@Injectable()
export class FacultyService {
    
    private FACULTIES: Faculty[] = [
            {
                id: 1,
                name: 'Математики та інформатики',
                assignedDepartments: [
                    {
                        id: 1,
                        name: 'Інформатики та прикладної математики'
                    },
                    {
                        id: 2,
                        name: 'Інформаційно-комунікаційних технологій та методики викладання інформатики'
                    },
                    {
                        id: 3,
                        name: 'Вищої математики'
                    },
                    {
                        id: 4,
                        name: 'Математики та методики її викладання'
                    }                    
                ],
                specialities: [
                    {
                        id: 1,
                        name: 'Математика та інформатика'
                    },
                    {
                        id: 2,
                        name: 'Математика та фізика'
                    },
                    {
                        id: 3,
                        name: 'Математика та економіка'
                    },
                    {
                        id: 4,
                        name: 'Прикладна математика'
                    },
                    {
                        id: 5,
                        name: 'Інформатика'
                    },
                    {
                        id: 6,
                        name: 'Комп’ютерні науки та інформаційні технології'
                    }
                ]
            },
            {
                id: 2,
                name: 'Фізико-технологічний'
            },
            {
                id: 3,
                name: 'Іноземної філології'
            },
            {
                id: 4,
                name: 'Української філології'
            },
            {
                id: 5,
                name: 'Історико-соціологічний'
            },
            {
                id: 6,
                name: 'Інститут психології та педагогіки'
            },
            {
                id: 7,
                name: 'Педагогічний'
            },
            {
                id: 8,
                name: 'Психолого-природничий'
            },
            {
                id: 9,
                name: 'Інститут мистецтв'
            },
            {
                id: 10,
                name: 'Документальних комунікацій і менеджменту'
            }
        ];
        
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

    getSpecialities(id: number): Department[] {
        let faculty: Faculty = this.FACULTIES.find(faculty => faculty.id == id);
        if (faculty) {
            return faculty.specialities;
        }
        else {
            return null;
        }
    }
}