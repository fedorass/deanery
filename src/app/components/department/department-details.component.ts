import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Department } from '../../common/department.model';

@Component({
    templateUrl: './department-details.component.html',
    styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

    private department: Department;
    private subscription: any;
    
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void {
        
        this.subscription = this.route.data.subscribe((data: { department: Department }) => {
            this.department = data.department;
        });
    } 
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}