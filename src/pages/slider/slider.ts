import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  @ViewChild(Slides) slides: Slides;

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.slides.slideTo(2, 1000)  
    }, 1000);
    
  }

  slideChanged() {
    this.toast.create({
      message: 'Slide changed!',
      duration: 1000
    }).present();
  }

}
