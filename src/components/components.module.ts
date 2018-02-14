import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PopoverComponent } from './popover/popover';
import { EventsComponent } from './events/events';
import { SideMenuHomeComponent } from './side-menu-home/side-menu-home';
import { SideMenuListComponent } from './side-menu-list/side-menu-list';
@NgModule({
	declarations: [PopoverComponent,
    EventsComponent,
    SideMenuHomeComponent,
    SideMenuListComponent],
	imports: [ IonicModule ],
	exports: [PopoverComponent,
    EventsComponent,
    SideMenuHomeComponent,
    SideMenuListComponent]
})
export class ComponentsModule {}
