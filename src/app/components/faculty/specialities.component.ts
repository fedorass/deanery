import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Speciality } from '../../common/speciality.model';

@Component({
    templateUrl: './specialities.component.html',
    styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
    
    private specialities: Speciality[];
    private subscription: any;
    
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void { 
        this.subscription = this.route.data.subscribe((data: { specialities: Speciality[] }) => {
            this.specialities = data.specialities;
        });
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
}