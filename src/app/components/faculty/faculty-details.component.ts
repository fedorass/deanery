import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Faculty } from '../../common/faculty.model';

@Component({
    templateUrl: './faculty-details.component.html',
    styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {

    private faculty: Faculty;
    private subscription: any;
    
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void { 
        
        this.subscription = this.route.data.subscribe((data: { faculty: Faculty }) => {
            this.faculty = data.faculty;
        });
    } 
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}