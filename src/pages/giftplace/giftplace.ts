import { GiftServiceProvider } from './../../providers/gift-service/gift-service';
import { locationsInfo } from './../../module/locationInof';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the GiftplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giftplace',
  templateUrl: 'giftplace.html',
})
export class GiftplacePage {

  location: locationsInfo =
    {
      latitude: '',
      longitude: '',
      info: ''
    }
  constructor(public navCtrl: NavController, public navParams: NavParams, public giftService: GiftServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftplacePage');
  }

  addGiftPlace(location: locationsInfo) {
    console.log(location);
    this.giftService.addGiftPlace(location).then((result) => {
      this.showAlert();
      this.location.info = '';
      this.location.longitude = '';
      this.location.latitude = '';
    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Great',
      subTitle: 'thanks for helping our family',
      buttons: ['OK']
    });
    alert.present();
  }

}
