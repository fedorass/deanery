import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FacultyService } from '../../services/faculty.service';
import { SpecialityService } from '../../services/speciality.service';

import { Speciality } from '../../common/speciality.model';
import { Course } from '../../common/course.model';

@Component({
    templateUrl: './courses.component.html',
    providers: [FacultyService, SpecialityService]
})
export class CoursesComponent implements OnInit {
    
    private specialities: Speciality[];
    private courses: Course[];
    private speciality: number;
    private year: number;
    private subscription: any;
     
    constructor(private route: ActivatedRoute, private facultyService: FacultyService, private specialityService: SpecialityService) {
    }
    
    ngOnInit(): void {
        
        this.subscription = this.route.parent.params.subscribe((params: Params) => {
            let id: number = params['id'];
            this.facultyService.getSpecialities(id).subscribe(specialities => {
                this.specialities = specialities;
            }); 
        });
        
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
    showCourse(): void {
        this.specialityService.getCourses(this.speciality).subscribe(courses => {
            this.courses = courses;
        });
    }
    
}