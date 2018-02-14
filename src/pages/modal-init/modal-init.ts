import { Component } from '@angular/core';
import { IonicPage, ModalController, Modal, ModalOptions } from 'ionic-angular';

/**
 * Generated class for the ModalInitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-init',
  templateUrl: 'modal-init.html',
})
export class ModalInitPage {

  constructor(private modal: ModalController) {
  }



  openModal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: true
    }


    const myData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    }

    const myModal: Modal = this.modal.create('ModalPage', { data: myData }, myModalOptions);
    myModal.present();

    myModal.onDidDismiss(data => {
      console.log('I have dismissed')
      console.log(data)
    })

    myModal.onWillDismiss(data => {
      console.log('I"m about to dismiss')
      console.log(data)
    })
  }


}
