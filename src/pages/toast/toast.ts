import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  toastOptions: ToastOptions;
  toastMessage: string;

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.toastOptions = {
      message: 'Ionic is awesome!',
      duration: 3000
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast() {
    this.toast.create(this.toastOptions).present();
  }

  showToast2(){
    this.toast.create({
      message: this.toastMessage,
      showCloseButton: true,
      closeButtonText: 'Close toast',
      position: 'top'
    })
  }



}
