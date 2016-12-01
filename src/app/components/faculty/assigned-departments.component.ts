import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Department } from '../../common/department.model';

@Component({
    templateUrl: './assigned-departments.component.html',
    styleUrls: ['./assigned-departments.component.css']
})
export class AssignedDepartmentsComponent implements OnInit {
    
    private assignedDepartments: Department[];
    private subscription: any;
    
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void { 
        
        this.subscription = this.route.data.subscribe((data: { assignedDepartments: Department[] }) => {
            this.assignedDepartments = data.assignedDepartments;
        });
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}