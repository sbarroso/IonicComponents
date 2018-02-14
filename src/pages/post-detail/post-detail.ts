import { Post } from './../../models/post.interface';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'posts/:postId',
  defaultHistory: ['PostsPage']
})
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  postId: number;
  post: Observable<Post>;

  constructor(private data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.postId = this.navParams.get('postId');
    console.log(this.postId)
    this.post = this.data.getPostById(this.postId)
  }

}
