import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Teacher } from '../../common/teacher.model';

@Component({
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

    private teachers: Teacher[];
    private subscription: any;
    
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void { 
        
        this.subscription = this.route.data.subscribe((data: { teachers: Teacher[] }) => {
            this.teachers = data.teachers;
        });
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}