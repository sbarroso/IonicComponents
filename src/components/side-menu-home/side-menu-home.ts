import { Component } from '@angular/core';

/**
 * Generated class for the SideMenuHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-menu-home',
  templateUrl: 'side-menu-home.html'
})
export class SideMenuHomeComponent {

  text: string;

  constructor() {
    console.log('Hello SideMenuHomeComponent Component');
    this.text = 'Hello World';
  }

}
