import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { FacultyService } from '../../services/faculty.service';

@Component({
    templateUrl: './specialities.component.html',
    styleUrls: ['./specialities.component.css'],
    providers: [FacultyService]
})
export class SpecialtiesComponent implements OnInit {
    
    private specialities: any[];
    private subscription: any;
    
    constructor(private route: ActivatedRoute, private facultyService: FacultyService) {}
    
    ngOnInit(): void { 
        this.subscription = this.route.parent.params.subscribe(params => {
            let facultyId: number = params['id'];
            this.specialities = this.facultyService.getSpecialities(facultyId);
        });         
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
}