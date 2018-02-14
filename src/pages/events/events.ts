import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  name: string;
 
  constructor(private ev: Events, public navCtrl: NavController) {
  }
 
  sendEvent(){
    this.ev.publish('hello', this.name);
  }

}
