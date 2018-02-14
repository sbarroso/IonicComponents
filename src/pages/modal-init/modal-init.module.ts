import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInitPage } from './modal-init';

@NgModule({
  declarations: [
    ModalInitPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalInitPage),
  ],
})
export class ModalInitPageModule {}
