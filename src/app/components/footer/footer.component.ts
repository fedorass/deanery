import { Component } from '@angular/core';

@Component({
      selector: 'footer',
      styles: [
          ':host { flex: 0 0 45px; margin-top: 5px }'
      ],
      template: `
            <div class="ui segment blue inverted center aligned">
                <span>&copy; 2017 РДГУ</span>
            </div>
        `
})
export class FooterComponent {
    
}