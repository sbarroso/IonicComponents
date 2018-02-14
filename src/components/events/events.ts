import { Component } from '@angular/core';
import { Events, ToastController } from 'ionic-angular';

/**
 * Generated class for the EventsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class EventsComponent {

  name: string;
 
  constructor(private toast: ToastController, private ev: Events) {
    this.ev.subscribe('hello', name => {
      const toast = this.toast.create({
        message: `Hello ${name}`,
        duration: 3000
      });
      toast.present();
    })
  }

}
