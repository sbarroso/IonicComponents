import { PopoverComponent } from './../../components/popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  selectedTitle: string;


  constructor(private popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    this.selectedTitle = "No option selected.";
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverComponent, { });
    popover.present({
      ev: ev
    });

    popover.onDidDismiss((popoverData) => {
      this.selectedTitle = popoverData;
    })
  }

}
