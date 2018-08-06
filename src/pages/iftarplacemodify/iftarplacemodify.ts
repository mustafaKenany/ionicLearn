import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IftarplacemodifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iftarplacemodify',
  templateUrl: 'iftarplacemodify.html',
})
export class IftarplacemodifyPage {

  // location: locationsInfo =
  //   {
  //     latitude: '',
  //     longitude: '',
  //     info: ''
  //   }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IftarplacemodifyPage');
  }

}
