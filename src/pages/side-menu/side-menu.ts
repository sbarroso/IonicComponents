import { SideMenuListComponent } from './../../components/side-menu-list/side-menu-list';
import { SideMenuHomeComponent } from './../../components/side-menu-home/side-menu-home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SideMenuHomeComponent;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: SideMenuHomeComponent },
      { title: 'List', component: SideMenuListComponent }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
