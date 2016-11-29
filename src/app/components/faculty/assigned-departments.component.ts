import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { FacultyService } from '../../services/faculty.service';
import { Department } from '../../common/department.model';

@Component({
    templateUrl: './assigned-departments.component.html',
    styleUrls: ['./assigned-departments.component.css'],
    providers: [FacultyService]
})
export class AssignedDepartmentsComponent implements OnInit {
    
    private assignedDepartments: Department[];
    private subscription: any;
    
    constructor(private route: ActivatedRoute, private facultyService: FacultyService) {}
    
    ngOnInit(): void { 
        
        this.subscription = this.route.data.subscribe((data: { assignedDepartments: Department[] }) => {
            this.assignedDepartments = data.assignedDepartments;
        });
        /*this.subscription = this.route.parent.params.subscribe(params => {
            let facultyId: number = params['id'];
            this.assignedDepartments = this.facultyService.getAssignedDepartments(facultyId);
        });*/
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}