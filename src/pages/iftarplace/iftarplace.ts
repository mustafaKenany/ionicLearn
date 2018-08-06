import { locationsInfo } from './../../module/locationInof';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IftarServiceProvider } from '../../providers/iftar-service/iftar-service'

/**
 * Generated class for the IftarplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iftarplace',
  templateUrl: 'iftarplace.html',
})
export class IftarplacePage {

  location: locationsInfo =
    {
      latitude: '',
      longitude: '',
      info: ''
    }
  constructor(public navCtrl: NavController, public navParams: NavParams, public iftarService: IftarServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IftarplacePage');
  }


  addIftarPlace(location: locationsInfo) {
    console.log(location);
    this.iftarService.addIftarPlace(location).then((result) => {
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
