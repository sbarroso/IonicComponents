import { TooltipsModule } from 'ionic-tooltips';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TooltipsPage } from './tooltips';

@NgModule({
  declarations: [
    TooltipsPage,
  ],
  imports: [
    IonicPageModule.forChild(TooltipsPage),
    TooltipsModule
  ],
})
export class TooltipsPageModule {}
