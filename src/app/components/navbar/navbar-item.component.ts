import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { SemanticSidebarComponent  } from 'ng-semantic';

@Component({
      selector: 'navbar-item',
      templateUrl: './navbar-item.component.html'
})
export class NavbarItemComponent {
      
      @Input()
      entities: any[] = [];

      @Input()
      name: string;

      @Output()
      openDetails: EventEmitter<number> = new EventEmitter<number>();

      pattern: string;
      
      @ViewChild('sidebar') sidebar: SemanticSidebarComponent ;
      
      
      showSidebar(): void {
            this.sidebar.show({transition: 'overlay'});
      }
      
      select(entity: any) {
             this.sidebar.hide();
             this.openDetails.emit(entity.id);
      }
}