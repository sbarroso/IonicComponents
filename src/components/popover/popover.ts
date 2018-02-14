import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  popoverItemList = [{name: 'Settings'}, {name: 'Help'}, {name: 'Signout'}];
  selectedTitle: string;

  constructor(private viewCtrl: ViewController) {
    this.selectedTitle = "";
   }

  sayHello() {
    alert("Hello World!");
  }

  setSelectedTitle(selectedItem) {
    this.selectedTitle = selectedItem;
    this.viewCtrl.dismiss(this.selectedTitle);
  }

}
