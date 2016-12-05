import { Component } from '@angular/core';
import { Event as RouterEvent, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import './rxjs-operators';
import '../../public/css/styles.css';
import '../../public/images/rshu.jpg';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loading: boolean = true;
  
  constructor(private router: Router) {
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
  }
  
  navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
          this.loading = true;
      }
      if (event instanceof NavigationEnd) {
          this.loading = false;
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
          this.loading = false;
      }
      if (event instanceof NavigationError) {
          this.loading = false;
      }
  }

}
